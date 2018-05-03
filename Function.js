var Visitor = require('./Visitor');
var Scope = require('./Scope');

Function.prototype.constructor = Function;

function Function(params,block){
    this.params = params;
    this.block = block;
}

Function.prototype.invoke = function(params,functions, scope, id, errorLine){
    if (params.length !== this.params.length) throw "Illegal function call";
    var newScope = new Scope(scope);
    var visitor = new Visitor(functions,newScope);
    for(var i=0; i<this.params.length; i++){
        var value = visitor.visit(params[i]);
        if(typeof value !== this.params[i][1].toLowerCase() && !Array.isArray(value)){
            throw "Function " + id + " excepts paramter "
            + this.params[i][0].getText() + " to be " + this.params[i][1]
            + ", " + typeof value + " was given. Line: " + errorLine;
        }
        newScope.assignParam(this.params[i][0].getText(),value,this.params[i][1]);
    }
    var ret = null;
    try{
        visitor.visit(this.block);
    }
    catch(returnValue){
        ret = returnValue;
    }
    return ret;
};

module.exports =  Function;