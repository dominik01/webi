var WebiVisitor = require('./WebiVisitor').WebiVisitor;
var Function = require('./Function');
var Class = require('./Class');

SymbolVisitor.prototype = Object.create(WebiVisitor.prototype);
SymbolVisitor.prototype.constructor = SymbolVisitor;

var functions = {};
var classes = {};

function SymbolVisitor() {
    WebiVisitor.call(this);
    return this;
}

SymbolVisitor.prototype.visitBlock = function(ctx){
    if(ctx.functionDecl() !== null) this.visit(ctx.functionDecl());
};

SymbolVisitor.prototype.visitFunctionDecl = function (ctx) {
    var params = [];
    if(ctx.idList() !== null){
        for(var i =0;i<ctx.idList().Identifier().length;i++){
            params.push([ctx.idList().Identifier(i),ctx.idList().typeType(i).getText()]);
        }
    }
    var block = ctx.block();
    var id = ctx.Identifier().getText() + params.length;
    functions[id] = new Function(params,block);
    console.log(functions);
};

SymbolVisitor.prototype.visitClassDecl = function (ctx){
    var paramas = ctx.idList() !== null ? ctx.idList().Identifier() :[];
    var block = ctx.block();
    var id = ctx.Identifier().getText();
    classes[id] = new Class(paramas,block);
};

module.exports = {
    symbVisitor: SymbolVisitor,
    funct: functions,
    classes: classes

};