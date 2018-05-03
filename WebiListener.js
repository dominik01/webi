// Generated from Webi.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by WebiParser.
function WebiListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

WebiListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
WebiListener.prototype.constructor = WebiListener;

// Enter a parse tree produced by WebiParser#parse.
WebiListener.prototype.enterParse = function(ctx) {
};

// Exit a parse tree produced by WebiParser#parse.
WebiListener.prototype.exitParse = function(ctx) {
};


// Enter a parse tree produced by WebiParser#block.
WebiListener.prototype.enterBlock = function(ctx) {
};

// Exit a parse tree produced by WebiParser#block.
WebiListener.prototype.exitBlock = function(ctx) {
};


// Enter a parse tree produced by WebiParser#statement.
WebiListener.prototype.enterStatement = function(ctx) {
};

// Exit a parse tree produced by WebiParser#statement.
WebiListener.prototype.exitStatement = function(ctx) {
};


// Enter a parse tree produced by WebiParser#assignment.
WebiListener.prototype.enterAssignment = function(ctx) {
};

// Exit a parse tree produced by WebiParser#assignment.
WebiListener.prototype.exitAssignment = function(ctx) {
};


// Enter a parse tree produced by WebiParser#identifierFunctionCall.
WebiListener.prototype.enterIdentifierFunctionCall = function(ctx) {
};

// Exit a parse tree produced by WebiParser#identifierFunctionCall.
WebiListener.prototype.exitIdentifierFunctionCall = function(ctx) {
};


// Enter a parse tree produced by WebiParser#printlnFunctionCall.
WebiListener.prototype.enterPrintlnFunctionCall = function(ctx) {
};

// Exit a parse tree produced by WebiParser#printlnFunctionCall.
WebiListener.prototype.exitPrintlnFunctionCall = function(ctx) {
};


// Enter a parse tree produced by WebiParser#printFunctionCall.
WebiListener.prototype.enterPrintFunctionCall = function(ctx) {
};

// Exit a parse tree produced by WebiParser#printFunctionCall.
WebiListener.prototype.exitPrintFunctionCall = function(ctx) {
};


// Enter a parse tree produced by WebiParser#assertFunctionCall.
WebiListener.prototype.enterAssertFunctionCall = function(ctx) {
};

// Exit a parse tree produced by WebiParser#assertFunctionCall.
WebiListener.prototype.exitAssertFunctionCall = function(ctx) {
};


// Enter a parse tree produced by WebiParser#sizeFunctionCall.
WebiListener.prototype.enterSizeFunctionCall = function(ctx) {
};

// Exit a parse tree produced by WebiParser#sizeFunctionCall.
WebiListener.prototype.exitSizeFunctionCall = function(ctx) {
};


// Enter a parse tree produced by WebiParser#listPushExpresion.
WebiListener.prototype.enterListPushExpresion = function(ctx) {
};

// Exit a parse tree produced by WebiParser#listPushExpresion.
WebiListener.prototype.exitListPushExpresion = function(ctx) {
};


// Enter a parse tree produced by WebiParser#listPopExpression.
WebiListener.prototype.enterListPopExpression = function(ctx) {
};

// Exit a parse tree produced by WebiParser#listPopExpression.
WebiListener.prototype.exitListPopExpression = function(ctx) {
};


// Enter a parse tree produced by WebiParser#newObjectCall.
WebiListener.prototype.enterNewObjectCall = function(ctx) {
};

// Exit a parse tree produced by WebiParser#newObjectCall.
WebiListener.prototype.exitNewObjectCall = function(ctx) {
};


// Enter a parse tree produced by WebiParser#newCanvasCall.
WebiListener.prototype.enterNewCanvasCall = function(ctx) {
};

// Exit a parse tree produced by WebiParser#newCanvasCall.
WebiListener.prototype.exitNewCanvasCall = function(ctx) {
};


// Enter a parse tree produced by WebiParser#drawTextCall.
WebiListener.prototype.enterDrawTextCall = function(ctx) {
};

// Exit a parse tree produced by WebiParser#drawTextCall.
WebiListener.prototype.exitDrawTextCall = function(ctx) {
};


// Enter a parse tree produced by WebiParser#clearPlaygroundCall.
WebiListener.prototype.enterClearPlaygroundCall = function(ctx) {
};

// Exit a parse tree produced by WebiParser#clearPlaygroundCall.
WebiListener.prototype.exitClearPlaygroundCall = function(ctx) {
};


// Enter a parse tree produced by WebiParser#drawLine.
WebiListener.prototype.enterDrawLine = function(ctx) {
};

// Exit a parse tree produced by WebiParser#drawLine.
WebiListener.prototype.exitDrawLine = function(ctx) {
};


// Enter a parse tree produced by WebiParser#lineWidth.
WebiListener.prototype.enterLineWidth = function(ctx) {
};

// Exit a parse tree produced by WebiParser#lineWidth.
WebiListener.prototype.exitLineWidth = function(ctx) {
};


// Enter a parse tree produced by WebiParser#strokeStyle.
WebiListener.prototype.enterStrokeStyle = function(ctx) {
};

// Exit a parse tree produced by WebiParser#strokeStyle.
WebiListener.prototype.exitStrokeStyle = function(ctx) {
};


// Enter a parse tree produced by WebiParser#fillStyle.
WebiListener.prototype.enterFillStyle = function(ctx) {
};

// Exit a parse tree produced by WebiParser#fillStyle.
WebiListener.prototype.exitFillStyle = function(ctx) {
};


// Enter a parse tree produced by WebiParser#fillRect.
WebiListener.prototype.enterFillRect = function(ctx) {
};

// Exit a parse tree produced by WebiParser#fillRect.
WebiListener.prototype.exitFillRect = function(ctx) {
};


// Enter a parse tree produced by WebiParser#strokeRect.
WebiListener.prototype.enterStrokeRect = function(ctx) {
};

// Exit a parse tree produced by WebiParser#strokeRect.
WebiListener.prototype.exitStrokeRect = function(ctx) {
};


// Enter a parse tree produced by WebiParser#imageInitCall.
WebiListener.prototype.enterImageInitCall = function(ctx) {
};

// Exit a parse tree produced by WebiParser#imageInitCall.
WebiListener.prototype.exitImageInitCall = function(ctx) {
};


// Enter a parse tree produced by WebiParser#buttonInitCall.
WebiListener.prototype.enterButtonInitCall = function(ctx) {
};

// Exit a parse tree produced by WebiParser#buttonInitCall.
WebiListener.prototype.exitButtonInitCall = function(ctx) {
};


// Enter a parse tree produced by WebiParser#typeType.
WebiListener.prototype.enterTypeType = function(ctx) {
};

// Exit a parse tree produced by WebiParser#typeType.
WebiListener.prototype.exitTypeType = function(ctx) {
};


// Enter a parse tree produced by WebiParser#ifStatement.
WebiListener.prototype.enterIfStatement = function(ctx) {
};

// Exit a parse tree produced by WebiParser#ifStatement.
WebiListener.prototype.exitIfStatement = function(ctx) {
};


// Enter a parse tree produced by WebiParser#ifStat.
WebiListener.prototype.enterIfStat = function(ctx) {
};

// Exit a parse tree produced by WebiParser#ifStat.
WebiListener.prototype.exitIfStat = function(ctx) {
};


// Enter a parse tree produced by WebiParser#elseIfStat.
WebiListener.prototype.enterElseIfStat = function(ctx) {
};

// Exit a parse tree produced by WebiParser#elseIfStat.
WebiListener.prototype.exitElseIfStat = function(ctx) {
};


// Enter a parse tree produced by WebiParser#elseStat.
WebiListener.prototype.enterElseStat = function(ctx) {
};

// Exit a parse tree produced by WebiParser#elseStat.
WebiListener.prototype.exitElseStat = function(ctx) {
};


// Enter a parse tree produced by WebiParser#functionDecl.
WebiListener.prototype.enterFunctionDecl = function(ctx) {
};

// Exit a parse tree produced by WebiParser#functionDecl.
WebiListener.prototype.exitFunctionDecl = function(ctx) {
};


// Enter a parse tree produced by WebiParser#classDecl.
WebiListener.prototype.enterClassDecl = function(ctx) {
};

// Exit a parse tree produced by WebiParser#classDecl.
WebiListener.prototype.exitClassDecl = function(ctx) {
};


// Enter a parse tree produced by WebiParser#forStatement.
WebiListener.prototype.enterForStatement = function(ctx) {
};

// Exit a parse tree produced by WebiParser#forStatement.
WebiListener.prototype.exitForStatement = function(ctx) {
};


// Enter a parse tree produced by WebiParser#whileStatement.
WebiListener.prototype.enterWhileStatement = function(ctx) {
};

// Exit a parse tree produced by WebiParser#whileStatement.
WebiListener.prototype.exitWhileStatement = function(ctx) {
};


// Enter a parse tree produced by WebiParser#idList.
WebiListener.prototype.enterIdList = function(ctx) {
};

// Exit a parse tree produced by WebiParser#idList.
WebiListener.prototype.exitIdList = function(ctx) {
};


// Enter a parse tree produced by WebiParser#exprList.
WebiListener.prototype.enterExprList = function(ctx) {
};

// Exit a parse tree produced by WebiParser#exprList.
WebiListener.prototype.exitExprList = function(ctx) {
};


// Enter a parse tree produced by WebiParser#boolExpression.
WebiListener.prototype.enterBoolExpression = function(ctx) {
};

// Exit a parse tree produced by WebiParser#boolExpression.
WebiListener.prototype.exitBoolExpression = function(ctx) {
};


// Enter a parse tree produced by WebiParser#numberExpression.
WebiListener.prototype.enterNumberExpression = function(ctx) {
};

// Exit a parse tree produced by WebiParser#numberExpression.
WebiListener.prototype.exitNumberExpression = function(ctx) {
};


// Enter a parse tree produced by WebiParser#identifierExpression.
WebiListener.prototype.enterIdentifierExpression = function(ctx) {
};

// Exit a parse tree produced by WebiParser#identifierExpression.
WebiListener.prototype.exitIdentifierExpression = function(ctx) {
};


// Enter a parse tree produced by WebiParser#notExpression.
WebiListener.prototype.enterNotExpression = function(ctx) {
};

// Exit a parse tree produced by WebiParser#notExpression.
WebiListener.prototype.exitNotExpression = function(ctx) {
};


// Enter a parse tree produced by WebiParser#orExpression.
WebiListener.prototype.enterOrExpression = function(ctx) {
};

// Exit a parse tree produced by WebiParser#orExpression.
WebiListener.prototype.exitOrExpression = function(ctx) {
};


// Enter a parse tree produced by WebiParser#unaryMinusExpression.
WebiListener.prototype.enterUnaryMinusExpression = function(ctx) {
};

// Exit a parse tree produced by WebiParser#unaryMinusExpression.
WebiListener.prototype.exitUnaryMinusExpression = function(ctx) {
};


// Enter a parse tree produced by WebiParser#powerExpression.
WebiListener.prototype.enterPowerExpression = function(ctx) {
};

// Exit a parse tree produced by WebiParser#powerExpression.
WebiListener.prototype.exitPowerExpression = function(ctx) {
};


// Enter a parse tree produced by WebiParser#eqExpression.
WebiListener.prototype.enterEqExpression = function(ctx) {
};

// Exit a parse tree produced by WebiParser#eqExpression.
WebiListener.prototype.exitEqExpression = function(ctx) {
};


// Enter a parse tree produced by WebiParser#andExpression.
WebiListener.prototype.enterAndExpression = function(ctx) {
};

// Exit a parse tree produced by WebiParser#andExpression.
WebiListener.prototype.exitAndExpression = function(ctx) {
};


// Enter a parse tree produced by WebiParser#inExpression.
WebiListener.prototype.enterInExpression = function(ctx) {
};

// Exit a parse tree produced by WebiParser#inExpression.
WebiListener.prototype.exitInExpression = function(ctx) {
};


// Enter a parse tree produced by WebiParser#stringExpression.
WebiListener.prototype.enterStringExpression = function(ctx) {
};

// Exit a parse tree produced by WebiParser#stringExpression.
WebiListener.prototype.exitStringExpression = function(ctx) {
};


// Enter a parse tree produced by WebiParser#expressionExpression.
WebiListener.prototype.enterExpressionExpression = function(ctx) {
};

// Exit a parse tree produced by WebiParser#expressionExpression.
WebiListener.prototype.exitExpressionExpression = function(ctx) {
};


// Enter a parse tree produced by WebiParser#addExpression.
WebiListener.prototype.enterAddExpression = function(ctx) {
};

// Exit a parse tree produced by WebiParser#addExpression.
WebiListener.prototype.exitAddExpression = function(ctx) {
};


// Enter a parse tree produced by WebiParser#compExpression.
WebiListener.prototype.enterCompExpression = function(ctx) {
};

// Exit a parse tree produced by WebiParser#compExpression.
WebiListener.prototype.exitCompExpression = function(ctx) {
};


// Enter a parse tree produced by WebiParser#nullExpression.
WebiListener.prototype.enterNullExpression = function(ctx) {
};

// Exit a parse tree produced by WebiParser#nullExpression.
WebiListener.prototype.exitNullExpression = function(ctx) {
};


// Enter a parse tree produced by WebiParser#jsonCallExpression.
WebiListener.prototype.enterJsonCallExpression = function(ctx) {
};

// Exit a parse tree produced by WebiParser#jsonCallExpression.
WebiListener.prototype.exitJsonCallExpression = function(ctx) {
};


// Enter a parse tree produced by WebiParser#functionCallExpression.
WebiListener.prototype.enterFunctionCallExpression = function(ctx) {
};

// Exit a parse tree produced by WebiParser#functionCallExpression.
WebiListener.prototype.exitFunctionCallExpression = function(ctx) {
};


// Enter a parse tree produced by WebiParser#multExpression.
WebiListener.prototype.enterMultExpression = function(ctx) {
};

// Exit a parse tree produced by WebiParser#multExpression.
WebiListener.prototype.exitMultExpression = function(ctx) {
};


// Enter a parse tree produced by WebiParser#listExpression.
WebiListener.prototype.enterListExpression = function(ctx) {
};

// Exit a parse tree produced by WebiParser#listExpression.
WebiListener.prototype.exitListExpression = function(ctx) {
};


// Enter a parse tree produced by WebiParser#ternaryExpression.
WebiListener.prototype.enterTernaryExpression = function(ctx) {
};

// Exit a parse tree produced by WebiParser#ternaryExpression.
WebiListener.prototype.exitTernaryExpression = function(ctx) {
};


// Enter a parse tree produced by WebiParser#inputExpression.
WebiListener.prototype.enterInputExpression = function(ctx) {
};

// Exit a parse tree produced by WebiParser#inputExpression.
WebiListener.prototype.exitInputExpression = function(ctx) {
};


// Enter a parse tree produced by WebiParser#list.
WebiListener.prototype.enterList = function(ctx) {
};

// Exit a parse tree produced by WebiParser#list.
WebiListener.prototype.exitList = function(ctx) {
};


// Enter a parse tree produced by WebiParser#jsonInit.
WebiListener.prototype.enterJsonInit = function(ctx) {
};

// Exit a parse tree produced by WebiParser#jsonInit.
WebiListener.prototype.exitJsonInit = function(ctx) {
};


// Enter a parse tree produced by WebiParser#imageInit.
WebiListener.prototype.enterImageInit = function(ctx) {
};

// Exit a parse tree produced by WebiParser#imageInit.
WebiListener.prototype.exitImageInit = function(ctx) {
};


// Enter a parse tree produced by WebiParser#buttonInit.
WebiListener.prototype.enterButtonInit = function(ctx) {
};

// Exit a parse tree produced by WebiParser#buttonInit.
WebiListener.prototype.exitButtonInit = function(ctx) {
};


// Enter a parse tree produced by WebiParser#jsonCall.
WebiListener.prototype.enterJsonCall = function(ctx) {
};

// Exit a parse tree produced by WebiParser#jsonCall.
WebiListener.prototype.exitJsonCall = function(ctx) {
};


// Enter a parse tree produced by WebiParser#objValues.
WebiListener.prototype.enterObjValues = function(ctx) {
};

// Exit a parse tree produced by WebiParser#objValues.
WebiListener.prototype.exitObjValues = function(ctx) {
};


// Enter a parse tree produced by WebiParser#indexes.
WebiListener.prototype.enterIndexes = function(ctx) {
};

// Exit a parse tree produced by WebiParser#indexes.
WebiListener.prototype.exitIndexes = function(ctx) {
};



exports.WebiListener = WebiListener;