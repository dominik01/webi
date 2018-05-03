var WebiVisitor = require('./WebiVisitor').WebiVisitor;
var WebiParser = require('./WebiParser').WebiParser;
var Scope = require('./Scope');

Visitor.prototype = Object.create(WebiVisitor.prototype);
Visitor.prototype.constructor = Visitor;

function UserException(message) {
    this.message = message;
    this.name = 'UserException';
}
 function EvalException(ctx){
    this.message = "Illegal expression: " + ctx.getText() + ", line " + ctx.start.line;
    this.name = 'EvalExeption';
 }

function Visitor(functions, scope, classes) {
    this.scope = scope;
    this.functions = functions;
    this.classes = classes;

    WebiVisitor.call(this);
    return this;
}

Visitor.prototype.setAtIndex = function (ctx, indexes, oldValue, newValue) {
    if (!Array.isArray(oldValue) && typeof oldValue !== 'object') {
        throw new UserException("Cannot assign, object is not array or object, line " + ctx.start.line);
    }
    for (var i = 0; i < indexes.length - 1; i++) {
        var idx = this.visit(indexes[i]);
        oldValue = oldValue[idx];
    }

    var idx = this.visit(indexes[indexes.length - 1]);
    console.log(idx);
    oldValue[idx] = newValue;
};


Visitor.prototype.visitBlock = function (ctx) {
    this.scope = new Scope(this.scope);

    if (ctx.statement() !== null){
        this.visit(ctx.statement());
    }
    if (ctx.expression() !== null) {
        var returnValue = this.visit(ctx.expression());
        this.scope = this.scope.getParent();
        throw returnValue;
    }
    this.scope = this.scope.getParent();
    return null;

};

Visitor.prototype.visitFunctionDecl = function (ctx) {
};

Visitor.prototype.visitAssignment = function (ctx) {
    var idenf = ctx.Identifier().getText();

    var value = ctx.expression() !== null ? this.visit(ctx.expression()) : this.visit(ctx.jsonInit());

    if (ctx.indexes() !== null) {
        var oldVal = this.scope.resolve(ctx.Identifier().getText())
        if (oldVal == null) throw new UserException("Undefined variable " + idenf + " on line " + ctx.start.line);
        oldVal = oldVal[0];
        var indexes = ctx.indexes().expression();
        console.log(indexes);
        this.setAtIndex(ctx, indexes, oldVal, value);
    }
    else {
        var type;
        if (ctx.typeType() !== null) {
            type = ctx.typeType().getText();
        }
        this.scope.assign(idenf, value, type);
    }

    return null;
};

Visitor.prototype.visitJsonCallExpression = function (ctx) {

    var val = this.visit(ctx.jsonCall());
    return val;
};

Visitor.prototype.visitAssertFunctionCall = function (ctx) {
    var value = this.visit(ctx.expression());
    if (typeof value !== 'boolean') {
        throw new UserException("Result of assert must be booolean, line: " + ctx.start.line);
    }

    return value;

};

Visitor.prototype.visitPrintFunctionCall = function (ctx) {

    var value = this.visit(ctx.expression());
    document.getElementById("result").innerHTML += value;
};

Visitor.prototype.visitPrintlnFunctionCall = function (ctx) {
    var value;
    if (ctx.expression() !== null) {
        value = this.visit(ctx.expression());
        document.getElementById("result").innerHTML += '<br/>' + value;
    }
    else document.getElementById("result").innerHTML += '<br/>';

};
Visitor.prototype.visitSizeFunctionCall = function (ctx) {
    var value = this.visit(ctx.expression());
    if (typeof value === "string" || typeof value === "object") {
        return value.length;
    }
    else {
        throw new UserException("Cannot call size function on value of this type, line:" + ctx.start.line);
    }
};

Visitor.prototype.visitIdentifierFunctionCall = function (ctx) {
    var params = ctx.exprList() !== null ? ctx.exprList().expression() : [];
    var id = ctx.Identifier().getText() + params.length;
    if (id in this.functions) {
        return this.functions[id].invoke(params, this.functions, this.scope, id, ctx.start.line);
    }
    else throw new UserException("Undefined function, line " + ctx.start.line);

};

Visitor.prototype.visitIfStatement = function (ctx) {
    //if
    if (this.visit(ctx.ifStat().expression()) === true) {
        return this.visit(ctx.ifStat().block());
    }
    //else if
    for (var i = 0; i < ctx.elseIfStat().length; i++) {
        if (this.visit(ctx.elseIfStat(i).expression()) === true) {
            return this.visit(ctx.elseIfStat(i).block());
        }
    }
    //else
    if (ctx.elseStat() !== null) {
        return this.visit(ctx.elseStat().block());
    }
};

Visitor.prototype.visitForStatement = function (ctx) {
    var start = this.visit(ctx.expression(0));
    var stop = this.visit(ctx.expression(1));
    for (var i = start; i < stop; i++) {
        this.scope.assign(ctx.Identifier().getText(), i, "Number");
        var retVal = this.visit(ctx.block());
        if (retVal != null) {
            return retVal;
        }
    }
};

Visitor.prototype.visitWhileStatement = function (ctx) {

    while (this.visit(ctx.expression())) {
        var retVal = this.visit(ctx.block());
        if (retVal != null) {
            return retVal
        }
    }
};

/** EXPRESSIONS */

Visitor.prototype.visitFunctionCallExpression = function (ctx) {
    var val = this.visit(ctx.functionCall());
    return val;
};

Visitor.prototype.visitNumberExpression = function (ctx) {
    return Number(ctx.NumberVar().getText());
};

Visitor.prototype.visitMultExpression = function (ctx) {
    var left = this.visit(ctx.expression(0));
    var right = this.visit(ctx.expression(1));
    if(typeof left === 'number'  && typeof right === 'number'){
        if (ctx.op.type === WebiParser.Multiply) return left * right;
        else if (ctx.op.type === WebiParser.Divide) return left / right;
        else if (ctx.op.type === WebiParser.Modulus) return left % right;
        else throw new UserException("Unknown operator type, line " + ctx.start.line);
    }
    throw new EvalException(ctx);
};

Visitor.prototype.visitAddExpression = function (ctx) {
    var left = this.visit(ctx.expression(0));
    var right = this.visit(ctx.expression(1));
    return (ctx.op.type === WebiParser.Add) ? left + right : left - right;
};

Visitor.prototype.visitExpressionExpression = function (ctx) {
    var value = this.visit(ctx.expression());
    return value;
};

Visitor.prototype.visitBoolExpression = function (ctx) {
    return ctx.BoolVar().getText() === 'true';
};

Visitor.prototype.visitOrExpression = function (ctx) {
    var left = this.visit(ctx.expression(0));
    var right =this.visit(ctx.expression(1));
    if(typeof left !== 'boolean' || typeof right !== 'boolean')
        throw new EvalException(ctx);
    return left || right;
};

Visitor.prototype.visitAndExpression = function (ctx) {
    var left = this.visit(ctx.expression(0));
    var right = this.visit(ctx.expression(1));
    if(typeof left !== 'boolean' || typeof right !== 'boolean')
        throw new EvalException(ctx);
    return left && right
};

Visitor.prototype.visitNullExpression = function (ctx) {
    return null;
};

Visitor.prototype.visitPowerExpression = function (ctx) {
    var left =  this.visit(ctx.expression(0));
    var right = this.visit(ctx.expression(1));
    if(typeof  left === 'number' && typeof right === 'number'){
        return Math.pow(left,right);
    }
    throw new EvalException(ctx);
};

Visitor.prototype.visitEqExpression = function (ctx) {
    return (ctx.op.type === WebiParser.Equals)
        ? this.visit(ctx.expression(0)) == this.visit(ctx.expression(1))
        : this.visit(ctx.expression(0)) != this.visit(ctx.expression(1));
};

Visitor.prototype.visitNotExpression = function (ctx) {
    var expr = this.visit(ctx.expression());
    if (typeof expr !== 'boolean') throw new UserException('Expression is not boolean on line:' + ctx.start.line);
    else return !expr;
};

Visitor.prototype.visitUnaryMinusExpression = function (ctx) {
    var expr = this.visit(ctx.expression());
    if (typeof expr !== 'number') throw new UserException('Expression is not number on line:' + ctx.start.line);
    else return -expr;
};
Visitor.prototype.visitCompExpression = function (ctx) {
    var left = this.visit(ctx.expression(0));
    var right = this.visit(ctx.expression(1));
    if (ctx.op.type === WebiParser.LTEquals) return left <= right;
    if (ctx.op.type === WebiParser.GTEquals) return left >= right;
    if (ctx.op.type === WebiParser.LT) return left < right;
    if (ctx.op.type === WebiParser.GT) return left > right;
};

Visitor.prototype.visitStringExpression = function (ctx) {
    var text = ctx.getText().slice(1, -1);
    if (ctx.indexes() !== null) {
        var index = this.visit(ctx.indexes().expression(0));
        if (typeof index === 'number') {
            return text[parseInt(index)];
        }
        else {
            throw new UserException("Index must be number, on line:" + ctx.start.line);
        }
    }
    return text;
};

Visitor.prototype.visitTernaryExpression = function (ctx) {
    var condition = this.visit(ctx.expression(0));
    if (typeof condition === 'boolean') {
        return condition ? this.visit(ctx.expression(1)) : this.visit(ctx.expression(2));
    }
    else {
        throw new UserException("Ternanry condiiton result is not boolean, on line:" + ctx.start.line);
    }
};

Visitor.prototype.visitJsonInit = function (ctx) {
    var object = {};
    if (ctx.objValues() !== null) {
        for (var i = 0; i < ctx.objValues().expression().length; i++) {
            object[ctx.objValues().StringVar(i).getText().slice(1, -1)] = this.visit(ctx.objValues().expression(i));
        }
    }
    return object;
};


Visitor.prototype.visitListExpression = function (ctx) {
    var val = this.visit(ctx.list());
    if (ctx.indexes() !== null) {
        var index = this.visit(ctx.indexes().expression(0));
        if (typeof index === 'number') {
            return val[parseInt(index)];
        }
        else {
            throw new UserException("Index must be number, on line:" + ctx.start.line);
        }
    }
    return val;
};

Visitor.prototype.visitJsonCall = function (ctx) {
    var id = ctx.Identifier(0).getText();
    var val = this.scope.resolve(id);
    if (val == null) throw new UserException("Undefined variable " + id + " on line " + ctx.start.line);
    val = val[0];
    for (var i = 1; i < ctx.Identifier().length; i++) {
        val = val[ctx.Identifier(i).getText()];
        if (val == null) throw new UserException("Undefined key " + key + " on line " + ctx.start.line);
    }
    //console.log(val);
    return val;
};

Visitor.prototype.visitIdentifierExpression = function (ctx) {

    var id = ctx.Identifier().getText();
    var val = this.scope.resolve(id);
    if (val == null) throw new UserException("Undefined variable " + id + " on line " + ctx.start.line);
    val = val[0];
    if (ctx.indexes() !== null) {
        var index = this.visit(ctx.indexes().expression(0));
        if (typeof index === 'number') {
            return val[parseInt(index)];
        }
        else {
            throw new UserException("Index must be number, on line:" + ctx.start.line);
        }
    }
    return val;
};

Visitor.prototype.visitListPushExpresion = function (ctx) {
    var id = ctx.Identifier().getText();
    var oldVal = this.scope.resolve(id);
    if(oldVal == null) throw new UserException("Undefined list. Line: " + ctx.start.line);
    if(oldVal[1] !== 'List') throw new UserException("Variable is not list. Line: " + ctx.start.line);
    var newVal = oldVal[0];
    newVal.push(this.visit(ctx.expression()));
    this.scope.assign(id, newVal, oldVal[1]);
    return newVal.length;
};

Visitor.prototype.visitListPopExpression = function (ctx) {
    var id = ctx.Identifier().getText();
    var oldVal = this.scope.resolve(id);
    if(oldVal == null) throw new UserException("Undefined list. Line: " + ctx.start.line);
    if(oldVal[1] !== 'List') throw new UserException("Variable is not list. Line: " + ctx.start.line);
    if(oldVal[0].length <= 0 ) throw new UserException("List is empty. Cannot pop. Line: " + ctx.start.line);
    var newVal = oldVal[0];
    var ret = newVal.pop();
    this.scope.assign(id, newVal, oldVal[1]);
    return ret;
};

Visitor.prototype.visitNewObjectCall = function (ctx) {
    var id = ctx.Identifier().getText()
    //TODO
    if (this.classes[id] != null) {
    }
};

Visitor.prototype.visitList = function (ctx) {
    var list = [];
    if (ctx.exprList() !== null) {
        for (var i = 0; i < ctx.exprList().expression().length; i++) {
            list.push(this.visit(ctx.exprList().expression(i)));
        }
    }
    return list;
};

Visitor.prototype.visitNewCanvasCall = function (ctx) {
    var width;
    var height;
    var name = 'playground';
    if (ctx.exprList() === null) {
        width = 600;
        height = 600;
    }
    else {
        if (ctx.exprList().expression().length !== 2) {
            throw new UserException("Canvas is expecting two parameters for width and height, or leave blank for default, line " + ctx.start.line);
        }
        width = this.visit(ctx.exprList().expression(0));
        height = this.visit(ctx.exprList().expression(1));
    }
    this.createCanvas(width, height, name, ctx.start.line);
};

Visitor.prototype.visitDrawTextCall = function (ctx) {
    if(ctx.exprList().expression().length < 3 || ctx.exprList().expression().length > 4) throw new UserException("Invalid number of paramters, line " + ctx.start.line);
    var params = this.visit(ctx.exprList().expression());
    var canvas = this.getCanvasCtx();
    var content = canvas.getContext('2d');
    content.font = "30px Arial";
    if(params.length === 4) content.font = params[3];
    content.fillText(params[0],params[1],params[2]);

};

Visitor.prototype.visitLineWidth = function (ctx) {
    console.log(ctx.expression);
    if(ctx.expression() === null) throw  new UserException("Paramter for lineWidth not provided, line " +ctx.start.line);
    var canvas = this.getCanvasCtx();
    var content = canvas.getContext('2d');
    content.lineWidth = this.visit(ctx.expression());
};

Visitor.prototype.visitClearPlaygroundCall = function () {
    var canvas = this.getCanvasCtx();
    var context = canvas.getContext('2d');
    context.clearRect(0,0,canvas.width,canvas.height);
    console.log(canvas.width,canvas.height);
};

Visitor.prototype.visitImageInit = function (ctx) {
    if (ctx.expression().length !== 3) {
        return new UserException("Invalid number of paramters, line " + ctx.start.line);
    }
    var src = this.visit(ctx.expression(0));
    var x = this.visit(ctx.expression(1));
    var y = this.visit(ctx.expression(2));
    console.log(src, x, y);
    this.drawImage(src, x, y);
};

Visitor.prototype.getCanvasCtx = function () {
    var canvas = document.getElementById("playground");
    if (canvas == null) throw new UserException("Cannot draw image, canvas is not initialized");
    return canvas;
};

Visitor.prototype.drawImage = function (src, x, y) {
    var canvas = this.getCanvasCtx();
    var context = canvas.getContext('2d');
    var img = new Image();
    img.src = src;
    img.onload = function () {
        context.drawImage(img, x, y, this.width, this.height);
    };
};

Visitor.prototype.visitDrawLine = function (ctx) {
    if(ctx.expression().length !== 4) throw new UserException("Invalid number of paramters for drawLine, line " + ctx.start.line);
    var canvas = this.getCanvasCtx();
    var content = canvas.getContext('2d');
    content.beginPath();
    content.moveTo(this.visit(ctx.expression(0)),this.visit(ctx.expression(1)));
    content.lineTo(this.visit(ctx.expression(2)),this.visit(ctx.expression(3)));
    content.stroke();

};

Visitor.prototype.visitStrokeStyle = function (ctx) {
    if(ctx.expression() === null) throw  new UserException("Paramter for strokeStyle not provided, line " +ctx.start.line);
    var canvas = this.getCanvasCtx();
    var content = canvas.getContext('2d');
    content.strokeStyle = this.visit(ctx.expression());
};

Visitor.prototype.visitFillStyle = function (ctx) {
    if(ctx.expression() === null) throw  new UserException("Paramter for fillStyle not provided, line " +ctx.start.line);
    var canvas = this.getCanvasCtx();
    var content = canvas.getContext('2d');
    content.fillStyle = this.visit(ctx.expression());
};

Visitor.prototype.visitFillRect = function (ctx) {
    if(ctx.expression().length !== 4) throw  new UserException("Invalid number of paramters for fillRect, line " +ctx.start.line);
    var canvas = this.getCanvasCtx();
    var content = canvas.getContext('2d');
    content.fillRect(this.visit(ctx.expression(0)),this.visit(ctx.expression(1)),this.visit(ctx.expression(2)),this.visit(ctx.expression(3)));
};

Visitor.prototype.visitStrokeRect = function (ctx) {
    if(ctx.expression().length !== 4) throw  new UserException("Invalid number of paramters for strokeRect, line " +ctx.start.line);
    var canvas = this.getCanvasCtx();
    var content = canvas.getContext('2d');
    content.strokeRect(this.visit(ctx.expression(0)),this.visit(ctx.expression(1)),this.visit(ctx.expression(2)),this.visit(ctx.expression(3)));
};

Visitor.prototype.visitButtonInit = function (ctx) {
    if (ctx.expression().length === null || ctx.expression().length < 3) throw new UserException("Invalid number of paramters for button, line " + ctx.start.line);
    var buttonId = this.visit(ctx.expression(0));
    var buttonName = this.visit(ctx.expression(1));
    var paramsCount = ctx.expression().length - 3;
    var params = [];
    var buttonFunction = this.visit(ctx.expression(2)) + paramsCount;
    for(var i=3; i<ctx.expression().length; i++){
        params.push(ctx.expression(i));
    }
    this.createButton(buttonId, buttonName, buttonFunction, params);

};

Visitor.prototype.createButton = function (buttonId, buttonName, buttonFunction, params) {
    if (document.getElementById(buttonId) === null) {
        var button = document.createElement('button');
        button.id = buttonId;
        var visitor = this;
        button.onclick = function () {
            if (buttonFunction in visitor.functions) {
                return visitor.functions[buttonFunction].invoke(params, visitor.functions, visitor.scope);
            }
        };
        button.appendChild(document.createTextNode(buttonName));
        document.getElementById("buttons").appendChild(button);
    }
    else {
        throw new UserException("Button with this id already exists");
    }
};

Visitor.prototype.createCanvas = function (width, height, name, line) {
    var canvas = document.getElementsByTagName('canvas');
    if (canvas.length === 1 && canvas[0].id === name) {
        canvas[0].width = width;
        canvas[0].height = height;
    }
    else if (canvas.length >= 1) {
        throw new UserException("Canvas already exists, cannot create more then 1 canvas, line " + line);
    }
    else {
        canvas = document.createElement('canvas');
        canvas.id = name;
        canvas.width = width;
        canvas.height = height;
        canvas.style.border = "1px solid";
        document.getElementById("output").appendChild(canvas);
    }
};

module.exports = Visitor;
