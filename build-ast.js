var antlr4 = require('antlr4');
var WebiLexer = require('./WebiLexer').WebiLexer;
var WebiParser = require('./WebiParser').WebiParser;
var Visitor = require('./Visitor');
var SymbolVisitor = require('./SymbolVisitor');
var Scope = require('./Scope');

function buildAst(inputText){
    var chars = new antlr4.InputStream(inputText);
    var lexer = new WebiLexer(chars);
    var tokens = new antlr4.CommonTokenStream(lexer);
    var parser = new WebiParser(tokens);
    parser.buildParseTrees = true;
    var tree = parser.parse();
    console.log(tree);
    var scope = new Scope(null);

    var symbolVisitor = new SymbolVisitor.symbVisitor();
    symbolVisitor.visit(tree);


    var visitor = new Visitor(SymbolVisitor.funct, scope, SymbolVisitor.classes);

    visitor.visit(tree);
    console.log("done");


}


module.exports = buildAst;