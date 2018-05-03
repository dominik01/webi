
Scope.prototype.constructor = Scope;


function Scope(parent) {
    this.parent = parent;
    this.variables = {};

}

Scope.prototype.assignParam = function (id, value, type) {
    this.variables[id] = [value,type];
};

Scope.prototype.assign = function (id, value,type){
    var oldValue = this.resolve(id);
    if(oldValue !== null){
        //there is already variable with this id, re-assign it
        if(type != null){
            //new type is defined, reAssign variable with new type
            this.reAssign(id,value,type);
        }
        // if type is not defined and value is same type as defined, asign just new value
        else if(oldValue[1].toLowerCase() === typeof value){
            //new value is same type as declared
            this.reAssign(id,value,oldValue[1]);
        }
        // trying to assign diffrent type as declared;
        else throw "Variable " + id + " is not same type as declared";
    }
    else{
        if(type == null){
            throw "Variable " + id + " must have its type declared.";
        }
        else if(type.toLowerCase() !== typeof value && !Array.isArray(value)) throw "Variable " + id
        + " declared as " + type + ", " + typeof  value + " given";
        else this.variables[id] = [value,type];
    }
};

Scope.prototype.isGlobalScope = function () {
    return this.parent === null
};

Scope.prototype.getParent = function () {
    return this.parent;
};

Scope.prototype.reAssign = function (id, value, type) {
   if(id in this.variables){
       this.variables[id] = [value,type];
   }
   else{
       var parent = this.getParent();
       if(parent !== null){
           parent.reAssign(id,value, type);
       }
   }
};

Scope.prototype.resolve = function (id) {
    var value  = this.variables[id];
    if(value != null){
        return value;
    }
    else if(!this.isGlobalScope()) return this.parent.resolve(id);
    else return null;
};

module.exports = Scope;