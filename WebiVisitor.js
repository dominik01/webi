// Generated from Webi.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by WebiParser.

function WebiVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

WebiVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
WebiVisitor.prototype.constructor = WebiVisitor;

// Visit a parse tree produced by WebiParser#parse.
WebiVisitor.prototype.visitParse = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by WebiParser#block.
WebiVisitor.prototype.visitBlock = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by WebiParser#statement.
WebiVisitor.prototype.visitStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by WebiParser#assignment.
WebiVisitor.prototype.visitAssignment = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by WebiParser#identifierFunctionCall.
WebiVisitor.prototype.visitIdentifierFunctionCall = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by WebiParser#printlnFunctionCall.
WebiVisitor.prototype.visitPrintlnFunctionCall = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by WebiParser#printFunctionCall.
WebiVisitor.prototype.visitPrintFunctionCall = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by WebiParser#assertFunctionCall.
WebiVisitor.prototype.visitAssertFunctionCall = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by WebiParser#sizeFunctionCall.
WebiVisitor.prototype.visitSizeFunctionCall = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by WebiParser#listPushExpresion.
WebiVisitor.prototype.visitListPushExpresion = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by WebiParser#listPopExpression.
WebiVisitor.prototype.visitListPopExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by WebiParser#newObjectCall.
WebiVisitor.prototype.visitNewObjectCall = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by WebiParser#newCanvasCall.
WebiVisitor.prototype.visitNewCanvasCall = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by WebiParser#drawTextCall.
WebiVisitor.prototype.visitDrawTextCall = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by WebiParser#clearPlaygroundCall.
WebiVisitor.prototype.visitClearPlaygroundCall = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by WebiParser#drawLine.
WebiVisitor.prototype.visitDrawLine = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by WebiParser#lineWidth.
WebiVisitor.prototype.visitLineWidth = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by WebiParser#strokeStyle.
WebiVisitor.prototype.visitStrokeStyle = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by WebiParser#fillStyle.
WebiVisitor.prototype.visitFillStyle = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by WebiParser#fillRect.
WebiVisitor.prototype.visitFillRect = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by WebiParser#strokeRect.
WebiVisitor.prototype.visitStrokeRect = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by WebiParser#imageInitCall.
WebiVisitor.prototype.visitImageInitCall = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by WebiParser#buttonInitCall.
WebiVisitor.prototype.visitButtonInitCall = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by WebiParser#typeType.
WebiVisitor.prototype.visitTypeType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by WebiParser#ifStatement.
WebiVisitor.prototype.visitIfStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by WebiParser#ifStat.
WebiVisitor.prototype.visitIfStat = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by WebiParser#elseIfStat.
WebiVisitor.prototype.visitElseIfStat = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by WebiParser#elseStat.
WebiVisitor.prototype.visitElseStat = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by WebiParser#functionDecl.
WebiVisitor.prototype.visitFunctionDecl = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by WebiParser#classDecl.
WebiVisitor.prototype.visitClassDecl = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by WebiParser#forStatement.
WebiVisitor.prototype.visitForStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by WebiParser#whileStatement.
WebiVisitor.prototype.visitWhileStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by WebiParser#idList.
WebiVisitor.prototype.visitIdList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by WebiParser#exprList.
WebiVisitor.prototype.visitExprList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by WebiParser#boolExpression.
WebiVisitor.prototype.visitBoolExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by WebiParser#numberExpression.
WebiVisitor.prototype.visitNumberExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by WebiParser#identifierExpression.
WebiVisitor.prototype.visitIdentifierExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by WebiParser#notExpression.
WebiVisitor.prototype.visitNotExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by WebiParser#orExpression.
WebiVisitor.prototype.visitOrExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by WebiParser#unaryMinusExpression.
WebiVisitor.prototype.visitUnaryMinusExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by WebiParser#powerExpression.
WebiVisitor.prototype.visitPowerExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by WebiParser#eqExpression.
WebiVisitor.prototype.visitEqExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by WebiParser#andExpression.
WebiVisitor.prototype.visitAndExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by WebiParser#inExpression.
WebiVisitor.prototype.visitInExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by WebiParser#stringExpression.
WebiVisitor.prototype.visitStringExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by WebiParser#expressionExpression.
WebiVisitor.prototype.visitExpressionExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by WebiParser#addExpression.
WebiVisitor.prototype.visitAddExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by WebiParser#compExpression.
WebiVisitor.prototype.visitCompExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by WebiParser#nullExpression.
WebiVisitor.prototype.visitNullExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by WebiParser#jsonCallExpression.
WebiVisitor.prototype.visitJsonCallExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by WebiParser#functionCallExpression.
WebiVisitor.prototype.visitFunctionCallExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by WebiParser#multExpression.
WebiVisitor.prototype.visitMultExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by WebiParser#listExpression.
WebiVisitor.prototype.visitListExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by WebiParser#ternaryExpression.
WebiVisitor.prototype.visitTernaryExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by WebiParser#inputExpression.
WebiVisitor.prototype.visitInputExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by WebiParser#list.
WebiVisitor.prototype.visitList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by WebiParser#jsonInit.
WebiVisitor.prototype.visitJsonInit = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by WebiParser#imageInit.
WebiVisitor.prototype.visitImageInit = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by WebiParser#buttonInit.
WebiVisitor.prototype.visitButtonInit = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by WebiParser#jsonCall.
WebiVisitor.prototype.visitJsonCall = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by WebiParser#objValues.
WebiVisitor.prototype.visitObjValues = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by WebiParser#indexes.
WebiVisitor.prototype.visitIndexes = function(ctx) {
  return this.visitChildren(ctx);
};



exports.WebiVisitor = WebiVisitor;