grammar Webi;

parse
 : block EOF
 ;

block
 : ( statement | functionDecl | classDecl )* ( Return expression )?
 ;

statement
 : assignment
 | functionCall
 | ifStatement
 | forStatement
 | whileStatement
 ;

assignment
 : typeType? Identifier indexes? '=' (expression|jsonInit)
 ;

functionCall
 : Identifier '(' exprList? ')'                                                 #identifierFunctionCall
 | Println '(' expression? ')'                                                  #printlnFunctionCall
 | Print '(' expression ')'                                                     #printFunctionCall
 | Assert '(' expression ')'                                                    #assertFunctionCall
 | Size '(' expression ')'                                                      #sizeFunctionCall
 | Identifier '.' Push '(' expression ')'                                       #listPushExpresion
 | Identifier '.' Pop '()'                                                      #listPopExpression
 | 'new' Identifier '(' exprList? ')'                                           #newObjectCall
 | 'initPlayground' '(' exprList? ')'                                           #newCanvasCall
 | 'drawText' '(' exprList? ')'                                                 #drawTextCall
 | 'clearPlayground()'                                                          #clearPlaygroundCall
 | 'drawLine' '(' expression ',' expression ',' expression ',' expression ')'   #drawLine
 | 'lineWidth(' expression ')'                                                  #lineWidth
 | 'strokeStyle(' expression ')'                                                #strokeStyle
 | 'fillStyle(' expression ')'                                                  #fillStyle
 | 'fillRect(' expression ',' expression ',' expression ',' expression ')'      #fillRect
 | 'strokeRect(' expression ',' expression ',' expression ',' expression ')'    #strokeRect
 | imageInit                                                                    #imageInitCall
 | buttonInit                                                                   #buttonInitCall


 ;

typeType
 : Number
 | String
 | Boolean
 | List
 | Image
 | Json
 ;

ifStatement
 : ifStat elseIfStat* elseStat? End
 ;

ifStat
 : If expression Do block
 ;

elseIfStat
 : Else If expression Do block
 ;

elseStat
 : Else Do block
 ;

functionDecl
 : Def Identifier '(' idList? ')' block End
 ;

classDecl
  : Class Identifier '(' idList? ')' block End
  ;


forStatement
 : For Identifier '=' expression To expression Do block End
 ;

whileStatement
 : While expression Do block End
 ;

idList
 : typeType Identifier ( ',' typeType Identifier )*
 ;

exprList
 : expression ( ',' expression )*
 ;

expression
 : '-' expression                                       #unaryMinusExpression
 | '!' expression                                       #notExpression
 | <assoc=right> expression '^' expression              #powerExpression
 | expression op=( '*' | '/' | '%' ) expression         #multExpression
 | expression op=( '+' | '-' ) expression               #addExpression
 | expression op=( '>=' | '<=' | '>' | '<' ) expression #compExpression
 | expression op=( '==' | '!=' ) expression             #eqExpression
 | expression '&&' expression                           #andExpression
 | expression '||' expression                           #orExpression
 | expression '?' expression ':' expression             #ternaryExpression
 | expression In expression                             #inExpression
 | NumberVar                                            #numberExpression
 | BoolVar                                              #boolExpression
 | Null                                                 #nullExpression
 | functionCall indexes?                                #functionCallExpression
 | list indexes?                                        #listExpression
 | jsonCall                                             #jsonCallExpression
 | Identifier indexes?                                  #identifierExpression
 | StringVar indexes?                                   #stringExpression
 | '(' expression ')' indexes?                          #expressionExpression
 | Input '(' StringVar? ')'                             #inputExpression
 ;

list
 : '[' exprList? ']'
 ;

 jsonInit
 : '{' objValues? '}'
 ;

 // image with src,x,y
 imageInit
 : 'createImage' '(' expression ',' expression ',' expression ')'
 ;

 //button with id, label, assignedFunction and parameters
 buttonInit
 : 'createButton' '(' expression ',' expression ',' expression ( ',' expression )* ')'
 ;


 jsonCall
 : Identifier '.' Identifier ( '.' Identifier)*
 ;

 objValues
 : StringVar ':' expression ( ',' StringVar ':' expression )*
 ;

indexes
 : ( '[' expression ']' )+
 ;

Println  : 'println';
Print    : 'print';
Input    : 'input';
Assert   : 'assert';
Size     : 'size';
Def      : 'def';
If       : 'if';
Else     : 'else';
Return   : 'return';
For      : 'for';
While    : 'while';
To       : 'to';
Do       : 'do';
End      : 'end';
In       : 'in';
Null     : 'null';
Number   : 'Number';
String   : 'String';
List     : 'List';
Boolean  : 'Boolean';
Image    : 'Image';
Json     : 'Object';
Class    : 'class';
New      : 'new';
Playground: 'Playground';
Button:     'Button';
Push:       'push';
Pop:        'pop';

Or       : '||';
And      : '&&';
Equals   : '==';
NEquals  : '!=';
GTEquals : '>=';
LTEquals : '<=';
Pow      : '^';
Excl     : '!';
GT       : '>';
LT       : '<';
Add      : '+';
Subtract : '-';
Multiply : '*';
Divide   : '/';
Modulus  : '%';
OBrace   : '{';
CBrace   : '}';
OBracket : '[';
CBracket : ']';
OParen   : '(';
CParen   : ')';
SColon   : ';';
Assign   : '=';
Comma    : ',';
QMark    : '?';
Colon    : ':';

BoolVar
 : 'true' 
 | 'false'
 ;

NumberVar
 : Int ( '.' Digit* )?
 ;

Identifier
 : [a-zA-Z_] [a-zA-Z_0-9]*
 ;



StringVar
 : ["] ( ~["\r\n\\] | '\\' ~[\r\n] )* ["]
 | ['] ( ~['\r\n\\] | '\\' ~[\r\n] )* [']
 ;

Comment
 : ( '//' ~[\r\n]* | '/*' .*? '*/' ) -> skip
 ;

Space
 : [ \t\r\n\u000C] -> skip
 ;

fragment Int
 : [1-9] Digit*
 | '0'
 ;
  
fragment Digit 
 : [0-9]
 ;