var Visitor = require('./Visitor');
var Scope = require('./Scope');

Class.prototype.constructor = Class;

function Class(params,block){
    this.params = params;
    this.block = block;
}

Class.prototype.invoke = function(params,functions, scope){
    //console.log("inovokujeme");
    //console.log(params);

};

module.exports =  Class;