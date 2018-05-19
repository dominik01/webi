// Generated from Webi.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');
var WebiListener = require('./WebiListener').WebiListener;
var WebiVisitor = require('./WebiVisitor').WebiVisitor;

var grammarFileName = "Webi.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003J\u01a0\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0003\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0007\u00039\n\u0003\f\u0003\u000e",
    "\u0003<\u000b\u0003\u0003\u0003\u0003\u0003\u0005\u0003@\n\u0003\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u0004G",
    "\n\u0004\u0003\u0005\u0005\u0005J\n\u0005\u0003\u0005\u0003\u0005\u0005",
    "\u0005N\n\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0005\u0005S\n\u0005",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0005\u0006X\n\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0005\u0006^\n\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0005\u0006\u0080\n\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0005\u0006\u0086\n\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0005\u0006\u008c\n\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0005\u0006\u00bd\n\u0006",
    "\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0007\b\u00c3\n\b\f\b\u000e",
    "\b\u00c6\u000b\b\u0003\b\u0005\b\u00c9\n\b\u0003\b\u0003\b\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003",
    "\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0005\f\u00e0\n\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\r",
    "\u0003\r\u0003\r\u0003\r\u0005\r\u00ea\n\r\u0003\r\u0003\r\u0003\r\u0003",
    "\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u0010\u0003",
    "\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0007\u0010\u0106",
    "\n\u0010\f\u0010\u000e\u0010\u0109\u000b\u0010\u0003\u0011\u0003\u0011",
    "\u0003\u0011\u0007\u0011\u010e\n\u0011\f\u0011\u000e\u0011\u0111\u000b",
    "\u0011\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003",
    "\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0005\u0012\u011d",
    "\n\u0012\u0003\u0012\u0003\u0012\u0005\u0012\u0121\n\u0012\u0003\u0012",
    "\u0003\u0012\u0003\u0012\u0005\u0012\u0126\n\u0012\u0003\u0012\u0003",
    "\u0012\u0005\u0012\u012a\n\u0012\u0003\u0012\u0003\u0012\u0003\u0012",
    "\u0003\u0012\u0005\u0012\u0130\n\u0012\u0003\u0012\u0003\u0012\u0003",
    "\u0012\u0005\u0012\u0135\n\u0012\u0003\u0012\u0005\u0012\u0138\n\u0012",
    "\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012",
    "\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012",
    "\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012",
    "\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012",
    "\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012",
    "\u0007\u0012\u0158\n\u0012\f\u0012\u000e\u0012\u015b\u000b\u0012\u0003",
    "\u0013\u0003\u0013\u0005\u0013\u015f\n\u0013\u0003\u0013\u0003\u0013",
    "\u0003\u0014\u0003\u0014\u0005\u0014\u0165\n\u0014\u0003\u0014\u0003",
    "\u0014\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003",
    "\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0016\u0003\u0016\u0003",
    "\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003",
    "\u0016\u0007\u0016\u017b\n\u0016\f\u0016\u000e\u0016\u017e\u000b\u0016",
    "\u0003\u0016\u0003\u0016\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017",
    "\u0003\u0017\u0007\u0017\u0187\n\u0017\f\u0017\u000e\u0017\u018a\u000b",
    "\u0017\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003",
    "\u0018\u0003\u0018\u0007\u0018\u0193\n\u0018\f\u0018\u000e\u0018\u0196",
    "\u000b\u0018\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0006\u0019",
    "\u019c\n\u0019\r\u0019\u000e\u0019\u019d\u0003\u0019\u0002\u0003\"\u001a",
    "\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c",
    "\u001e \"$&(*,.0\u0002\u0007\u0003\u0002\u001f$\u0003\u000279\u0003",
    "\u000256\u0004\u0002/034\u0003\u0002-.\u0002\u01cf\u00022\u0003\u0002",
    "\u0002\u0002\u0004:\u0003\u0002\u0002\u0002\u0006F\u0003\u0002\u0002",
    "\u0002\bI\u0003\u0002\u0002\u0002\n\u00bc\u0003\u0002\u0002\u0002\f",
    "\u00be\u0003\u0002\u0002\u0002\u000e\u00c0\u0003\u0002\u0002\u0002\u0010",
    "\u00cc\u0003\u0002\u0002\u0002\u0012\u00d1\u0003\u0002\u0002\u0002\u0014",
    "\u00d7\u0003\u0002\u0002\u0002\u0016\u00db\u0003\u0002\u0002\u0002\u0018",
    "\u00e5\u0003\u0002\u0002\u0002\u001a\u00ef\u0003\u0002\u0002\u0002\u001c",
    "\u00f9\u0003\u0002\u0002\u0002\u001e\u00ff\u0003\u0002\u0002\u0002 ",
    "\u010a\u0003\u0002\u0002\u0002\"\u0137\u0003\u0002\u0002\u0002$\u015c",
    "\u0003\u0002\u0002\u0002&\u0162\u0003\u0002\u0002\u0002(\u0168\u0003",
    "\u0002\u0002\u0002*\u0171\u0003\u0002\u0002\u0002,\u0181\u0003\u0002",
    "\u0002\u0002.\u018b\u0003\u0002\u0002\u00020\u019b\u0003\u0002\u0002",
    "\u000223\u0005\u0004\u0003\u000234\u0007\u0002\u0002\u00034\u0003\u0003",
    "\u0002\u0002\u000259\u0005\u0006\u0004\u000269\u0005\u0016\f\u00027",
    "9\u0005\u0018\r\u000285\u0003\u0002\u0002\u000286\u0003\u0002\u0002",
    "\u000287\u0003\u0002\u0002\u00029<\u0003\u0002\u0002\u0002:8\u0003\u0002",
    "\u0002\u0002:;\u0003\u0002\u0002\u0002;?\u0003\u0002\u0002\u0002<:\u0003",
    "\u0002\u0002\u0002=>\u0007\u0017\u0002\u0002>@\u0005\"\u0012\u0002?",
    "=\u0003\u0002\u0002\u0002?@\u0003\u0002\u0002\u0002@\u0005\u0003\u0002",
    "\u0002\u0002AG\u0005\b\u0005\u0002BG\u0005\n\u0006\u0002CG\u0005\u000e",
    "\b\u0002DG\u0005\u001a\u000e\u0002EG\u0005\u001c\u000f\u0002FA\u0003",
    "\u0002\u0002\u0002FB\u0003\u0002\u0002\u0002FC\u0003\u0002\u0002\u0002",
    "FD\u0003\u0002\u0002\u0002FE\u0003\u0002\u0002\u0002G\u0007\u0003\u0002",
    "\u0002\u0002HJ\u0005\f\u0007\u0002IH\u0003\u0002\u0002\u0002IJ\u0003",
    "\u0002\u0002\u0002JK\u0003\u0002\u0002\u0002KM\u0007G\u0002\u0002LN",
    "\u00050\u0019\u0002ML\u0003\u0002\u0002\u0002MN\u0003\u0002\u0002\u0002",
    "NO\u0003\u0002\u0002\u0002OR\u0007A\u0002\u0002PS\u0005\"\u0012\u0002",
    "QS\u0005&\u0014\u0002RP\u0003\u0002\u0002\u0002RQ\u0003\u0002\u0002",
    "\u0002S\t\u0003\u0002\u0002\u0002TU\u0007G\u0002\u0002UW\u0007>\u0002",
    "\u0002VX\u0005 \u0011\u0002WV\u0003\u0002\u0002\u0002WX\u0003\u0002",
    "\u0002\u0002XY\u0003\u0002\u0002\u0002Y\u00bd\u0007?\u0002\u0002Z[\u0007",
    "\u000f\u0002\u0002[]\u0007>\u0002\u0002\\^\u0005\"\u0012\u0002]\\\u0003",
    "\u0002\u0002\u0002]^\u0003\u0002\u0002\u0002^_\u0003\u0002\u0002\u0002",
    "_\u00bd\u0007?\u0002\u0002`a\u0007\u0010\u0002\u0002ab\u0007>\u0002",
    "\u0002bc\u0005\"\u0012\u0002cd\u0007?\u0002\u0002d\u00bd\u0003\u0002",
    "\u0002\u0002ef\u0007\u0012\u0002\u0002fg\u0007>\u0002\u0002gh\u0005",
    "\"\u0012\u0002hi\u0007?\u0002\u0002i\u00bd\u0003\u0002\u0002\u0002j",
    "k\u0007\u0013\u0002\u0002kl\u0007>\u0002\u0002lm\u0005\"\u0012\u0002",
    "mn\u0007?\u0002\u0002n\u00bd\u0003\u0002\u0002\u0002op\u0007G\u0002",
    "\u0002pq\u0007\u0003\u0002\u0002qr\u0007)\u0002\u0002rs\u0007>\u0002",
    "\u0002st\u0005\"\u0012\u0002tu\u0007?\u0002\u0002u\u00bd\u0003\u0002",
    "\u0002\u0002vw\u0007G\u0002\u0002wx\u0007\u0003\u0002\u0002xy\u0007",
    "*\u0002\u0002yz\u0007>\u0002\u0002z\u00bd\u0007?\u0002\u0002{|\u0007",
    "&\u0002\u0002|}\u0007G\u0002\u0002}\u007f\u0007>\u0002\u0002~\u0080",
    "\u0005 \u0011\u0002\u007f~\u0003\u0002\u0002\u0002\u007f\u0080\u0003",
    "\u0002\u0002\u0002\u0080\u0081\u0003\u0002\u0002\u0002\u0081\u00bd\u0007",
    "?\u0002\u0002\u0082\u0083\u0007\u0004\u0002\u0002\u0083\u0085\u0007",
    ">\u0002\u0002\u0084\u0086\u0005 \u0011\u0002\u0085\u0084\u0003\u0002",
    "\u0002\u0002\u0085\u0086\u0003\u0002\u0002\u0002\u0086\u0087\u0003\u0002",
    "\u0002\u0002\u0087\u00bd\u0007?\u0002\u0002\u0088\u0089\u0007\u0005",
    "\u0002\u0002\u0089\u008b\u0007>\u0002\u0002\u008a\u008c\u0005 \u0011",
    "\u0002\u008b\u008a\u0003\u0002\u0002\u0002\u008b\u008c\u0003\u0002\u0002",
    "\u0002\u008c\u008d\u0003\u0002\u0002\u0002\u008d\u00bd\u0007?\u0002",
    "\u0002\u008e\u00bd\u0007\u0006\u0002\u0002\u008f\u0090\u0007\u0007\u0002",
    "\u0002\u0090\u0091\u0007>\u0002\u0002\u0091\u0092\u0005\"\u0012\u0002",
    "\u0092\u0093\u0007B\u0002\u0002\u0093\u0094\u0005\"\u0012\u0002\u0094",
    "\u0095\u0007B\u0002\u0002\u0095\u0096\u0005\"\u0012\u0002\u0096\u0097",
    "\u0007B\u0002\u0002\u0097\u0098\u0005\"\u0012\u0002\u0098\u0099\u0007",
    "?\u0002\u0002\u0099\u00bd\u0003\u0002\u0002\u0002\u009a\u009b\u0007",
    "\b\u0002\u0002\u009b\u009c\u0005\"\u0012\u0002\u009c\u009d\u0007?\u0002",
    "\u0002\u009d\u00bd\u0003\u0002\u0002\u0002\u009e\u009f\u0007\t\u0002",
    "\u0002\u009f\u00a0\u0005\"\u0012\u0002\u00a0\u00a1\u0007?\u0002\u0002",
    "\u00a1\u00bd\u0003\u0002\u0002\u0002\u00a2\u00a3\u0007\n\u0002\u0002",
    "\u00a3\u00a4\u0005\"\u0012\u0002\u00a4\u00a5\u0007?\u0002\u0002\u00a5",
    "\u00bd\u0003\u0002\u0002\u0002\u00a6\u00a7\u0007\u000b\u0002\u0002\u00a7",
    "\u00a8\u0005\"\u0012\u0002\u00a8\u00a9\u0007B\u0002\u0002\u00a9\u00aa",
    "\u0005\"\u0012\u0002\u00aa\u00ab\u0007B\u0002\u0002\u00ab\u00ac\u0005",
    "\"\u0012\u0002\u00ac\u00ad\u0007B\u0002\u0002\u00ad\u00ae\u0005\"\u0012",
    "\u0002\u00ae\u00af\u0007?\u0002\u0002\u00af\u00bd\u0003\u0002\u0002",
    "\u0002\u00b0\u00b1\u0007\f\u0002\u0002\u00b1\u00b2\u0005\"\u0012\u0002",
    "\u00b2\u00b3\u0007B\u0002\u0002\u00b3\u00b4\u0005\"\u0012\u0002\u00b4",
    "\u00b5\u0007B\u0002\u0002\u00b5\u00b6\u0005\"\u0012\u0002\u00b6\u00b7",
    "\u0007B\u0002\u0002\u00b7\u00b8\u0005\"\u0012\u0002\u00b8\u00b9\u0007",
    "?\u0002\u0002\u00b9\u00bd\u0003\u0002\u0002\u0002\u00ba\u00bd\u0005",
    "(\u0015\u0002\u00bb\u00bd\u0005*\u0016\u0002\u00bcT\u0003\u0002\u0002",
    "\u0002\u00bcZ\u0003\u0002\u0002\u0002\u00bc`\u0003\u0002\u0002\u0002",
    "\u00bce\u0003\u0002\u0002\u0002\u00bcj\u0003\u0002\u0002\u0002\u00bc",
    "o\u0003\u0002\u0002\u0002\u00bcv\u0003\u0002\u0002\u0002\u00bc{\u0003",
    "\u0002\u0002\u0002\u00bc\u0082\u0003\u0002\u0002\u0002\u00bc\u0088\u0003",
    "\u0002\u0002\u0002\u00bc\u008e\u0003\u0002\u0002\u0002\u00bc\u008f\u0003",
    "\u0002\u0002\u0002\u00bc\u009a\u0003\u0002\u0002\u0002\u00bc\u009e\u0003",
    "\u0002\u0002\u0002\u00bc\u00a2\u0003\u0002\u0002\u0002\u00bc\u00a6\u0003",
    "\u0002\u0002\u0002\u00bc\u00b0\u0003\u0002\u0002\u0002\u00bc\u00ba\u0003",
    "\u0002\u0002\u0002\u00bc\u00bb\u0003\u0002\u0002\u0002\u00bd\u000b\u0003",
    "\u0002\u0002\u0002\u00be\u00bf\t\u0002\u0002\u0002\u00bf\r\u0003\u0002",
    "\u0002\u0002\u00c0\u00c4\u0005\u0010\t\u0002\u00c1\u00c3\u0005\u0012",
    "\n\u0002\u00c2\u00c1\u0003\u0002\u0002\u0002\u00c3\u00c6\u0003\u0002",
    "\u0002\u0002\u00c4\u00c2\u0003\u0002\u0002\u0002\u00c4\u00c5\u0003\u0002",
    "\u0002\u0002\u00c5\u00c8\u0003\u0002\u0002\u0002\u00c6\u00c4\u0003\u0002",
    "\u0002\u0002\u00c7\u00c9\u0005\u0014\u000b\u0002\u00c8\u00c7\u0003\u0002",
    "\u0002\u0002\u00c8\u00c9\u0003\u0002\u0002\u0002\u00c9\u00ca\u0003\u0002",
    "\u0002\u0002\u00ca\u00cb\u0007\u001c\u0002\u0002\u00cb\u000f\u0003\u0002",
    "\u0002\u0002\u00cc\u00cd\u0007\u0015\u0002\u0002\u00cd\u00ce\u0005\"",
    "\u0012\u0002\u00ce\u00cf\u0007\u001b\u0002\u0002\u00cf\u00d0\u0005\u0004",
    "\u0003\u0002\u00d0\u0011\u0003\u0002\u0002\u0002\u00d1\u00d2\u0007\u0016",
    "\u0002\u0002\u00d2\u00d3\u0007\u0015\u0002\u0002\u00d3\u00d4\u0005\"",
    "\u0012\u0002\u00d4\u00d5\u0007\u001b\u0002\u0002\u00d5\u00d6\u0005\u0004",
    "\u0003\u0002\u00d6\u0013\u0003\u0002\u0002\u0002\u00d7\u00d8\u0007\u0016",
    "\u0002\u0002\u00d8\u00d9\u0007\u001b\u0002\u0002\u00d9\u00da\u0005\u0004",
    "\u0003\u0002\u00da\u0015\u0003\u0002\u0002\u0002\u00db\u00dc\u0007\u0014",
    "\u0002\u0002\u00dc\u00dd\u0007G\u0002\u0002\u00dd\u00df\u0007>\u0002",
    "\u0002\u00de\u00e0\u0005\u001e\u0010\u0002\u00df\u00de\u0003\u0002\u0002",
    "\u0002\u00df\u00e0\u0003\u0002\u0002\u0002\u00e0\u00e1\u0003\u0002\u0002",
    "\u0002\u00e1\u00e2\u0007?\u0002\u0002\u00e2\u00e3\u0005\u0004\u0003",
    "\u0002\u00e3\u00e4\u0007\u001c\u0002\u0002\u00e4\u0017\u0003\u0002\u0002",
    "\u0002\u00e5\u00e6\u0007%\u0002\u0002\u00e6\u00e7\u0007G\u0002\u0002",
    "\u00e7\u00e9\u0007>\u0002\u0002\u00e8\u00ea\u0005\u001e\u0010\u0002",
    "\u00e9\u00e8\u0003\u0002\u0002\u0002\u00e9\u00ea\u0003\u0002\u0002\u0002",
    "\u00ea\u00eb\u0003\u0002\u0002\u0002\u00eb\u00ec\u0007?\u0002\u0002",
    "\u00ec\u00ed\u0005\u0004\u0003\u0002\u00ed\u00ee\u0007\u001c\u0002\u0002",
    "\u00ee\u0019\u0003\u0002\u0002\u0002\u00ef\u00f0\u0007\u0018\u0002\u0002",
    "\u00f0\u00f1\u0007G\u0002\u0002\u00f1\u00f2\u0007A\u0002\u0002\u00f2",
    "\u00f3\u0005\"\u0012\u0002\u00f3\u00f4\u0007\u001a\u0002\u0002\u00f4",
    "\u00f5\u0005\"\u0012\u0002\u00f5\u00f6\u0007\u001b\u0002\u0002\u00f6",
    "\u00f7\u0005\u0004\u0003\u0002\u00f7\u00f8\u0007\u001c\u0002\u0002\u00f8",
    "\u001b\u0003\u0002\u0002\u0002\u00f9\u00fa\u0007\u0019\u0002\u0002\u00fa",
    "\u00fb\u0005\"\u0012\u0002\u00fb\u00fc\u0007\u001b\u0002\u0002\u00fc",
    "\u00fd\u0005\u0004\u0003\u0002\u00fd\u00fe\u0007\u001c\u0002\u0002\u00fe",
    "\u001d\u0003\u0002\u0002\u0002\u00ff\u0100\u0005\f\u0007\u0002\u0100",
    "\u0107\u0007G\u0002\u0002\u0101\u0102\u0007B\u0002\u0002\u0102\u0103",
    "\u0005\f\u0007\u0002\u0103\u0104\u0007G\u0002\u0002\u0104\u0106\u0003",
    "\u0002\u0002\u0002\u0105\u0101\u0003\u0002\u0002\u0002\u0106\u0109\u0003",
    "\u0002\u0002\u0002\u0107\u0105\u0003\u0002\u0002\u0002\u0107\u0108\u0003",
    "\u0002\u0002\u0002\u0108\u001f\u0003\u0002\u0002\u0002\u0109\u0107\u0003",
    "\u0002\u0002\u0002\u010a\u010f\u0005\"\u0012\u0002\u010b\u010c\u0007",
    "B\u0002\u0002\u010c\u010e\u0005\"\u0012\u0002\u010d\u010b\u0003\u0002",
    "\u0002\u0002\u010e\u0111\u0003\u0002\u0002\u0002\u010f\u010d\u0003\u0002",
    "\u0002\u0002\u010f\u0110\u0003\u0002\u0002\u0002\u0110!\u0003\u0002",
    "\u0002\u0002\u0111\u010f\u0003\u0002\u0002\u0002\u0112\u0113\b\u0012",
    "\u0001\u0002\u0113\u0114\u00076\u0002\u0002\u0114\u0138\u0005\"\u0012",
    "\u0017\u0115\u0116\u00072\u0002\u0002\u0116\u0138\u0005\"\u0012\u0016",
    "\u0117\u0138\u0007F\u0002\u0002\u0118\u0138\u0007E\u0002\u0002\u0119",
    "\u0138\u0007\u001e\u0002\u0002\u011a\u011c\u0005\n\u0006\u0002\u011b",
    "\u011d\u00050\u0019\u0002\u011c\u011b\u0003\u0002\u0002\u0002\u011c",
    "\u011d\u0003\u0002\u0002\u0002\u011d\u0138\u0003\u0002\u0002\u0002\u011e",
    "\u0120\u0005$\u0013\u0002\u011f\u0121\u00050\u0019\u0002\u0120\u011f",
    "\u0003\u0002\u0002\u0002\u0120\u0121\u0003\u0002\u0002\u0002\u0121\u0138",
    "\u0003\u0002\u0002\u0002\u0122\u0138\u0005,\u0017\u0002\u0123\u0125",
    "\u0007G\u0002\u0002\u0124\u0126\u00050\u0019\u0002\u0125\u0124\u0003",
    "\u0002\u0002\u0002\u0125\u0126\u0003\u0002\u0002\u0002\u0126\u0138\u0003",
    "\u0002\u0002\u0002\u0127\u0129\u0007H\u0002\u0002\u0128\u012a\u0005",
    "0\u0019\u0002\u0129\u0128\u0003\u0002\u0002\u0002\u0129\u012a\u0003",
    "\u0002\u0002\u0002\u012a\u0138\u0003\u0002\u0002\u0002\u012b\u012c\u0007",
    ">\u0002\u0002\u012c\u012d\u0005\"\u0012\u0002\u012d\u012f\u0007?\u0002",
    "\u0002\u012e\u0130\u00050\u0019\u0002\u012f\u012e\u0003\u0002\u0002",
    "\u0002\u012f\u0130\u0003\u0002\u0002\u0002\u0130\u0138\u0003\u0002\u0002",
    "\u0002\u0131\u0132\u0007\u0011\u0002\u0002\u0132\u0134\u0007>\u0002",
    "\u0002\u0133\u0135\u0007H\u0002\u0002\u0134\u0133\u0003\u0002\u0002",
    "\u0002\u0134\u0135\u0003\u0002\u0002\u0002\u0135\u0136\u0003\u0002\u0002",
    "\u0002\u0136\u0138\u0007?\u0002\u0002\u0137\u0112\u0003\u0002\u0002",
    "\u0002\u0137\u0115\u0003\u0002\u0002\u0002\u0137\u0117\u0003\u0002\u0002",
    "\u0002\u0137\u0118\u0003\u0002\u0002\u0002\u0137\u0119\u0003\u0002\u0002",
    "\u0002\u0137\u011a\u0003\u0002\u0002\u0002\u0137\u011e\u0003\u0002\u0002",
    "\u0002\u0137\u0122\u0003\u0002\u0002\u0002\u0137\u0123\u0003\u0002\u0002",
    "\u0002\u0137\u0127\u0003\u0002\u0002\u0002\u0137\u012b\u0003\u0002\u0002",
    "\u0002\u0137\u0131\u0003\u0002\u0002\u0002\u0138\u0159\u0003\u0002\u0002",
    "\u0002\u0139\u013a\f\u0015\u0002\u0002\u013a\u013b\u00071\u0002\u0002",
    "\u013b\u0158\u0005\"\u0012\u0015\u013c\u013d\f\u0014\u0002\u0002\u013d",
    "\u013e\t\u0003\u0002\u0002\u013e\u0158\u0005\"\u0012\u0015\u013f\u0140",
    "\f\u0013\u0002\u0002\u0140\u0141\t\u0004\u0002\u0002\u0141\u0158\u0005",
    "\"\u0012\u0014\u0142\u0143\f\u0012\u0002\u0002\u0143\u0144\t\u0005\u0002",
    "\u0002\u0144\u0158\u0005\"\u0012\u0013\u0145\u0146\f\u0011\u0002\u0002",
    "\u0146\u0147\t\u0006\u0002\u0002\u0147\u0158\u0005\"\u0012\u0012\u0148",
    "\u0149\f\u0010\u0002\u0002\u0149\u014a\u0007,\u0002\u0002\u014a\u0158",
    "\u0005\"\u0012\u0011\u014b\u014c\f\u000f\u0002\u0002\u014c\u014d\u0007",
    "+\u0002\u0002\u014d\u0158\u0005\"\u0012\u0010\u014e\u014f\f\u000e\u0002",
    "\u0002\u014f\u0150\u0007C\u0002\u0002\u0150\u0151\u0005\"\u0012\u0002",
    "\u0151\u0152\u0007D\u0002\u0002\u0152\u0153\u0005\"\u0012\u000f\u0153",
    "\u0158\u0003\u0002\u0002\u0002\u0154\u0155\f\r\u0002\u0002\u0155\u0156",
    "\u0007\u001d\u0002\u0002\u0156\u0158\u0005\"\u0012\u000e\u0157\u0139",
    "\u0003\u0002\u0002\u0002\u0157\u013c\u0003\u0002\u0002\u0002\u0157\u013f",
    "\u0003\u0002\u0002\u0002\u0157\u0142\u0003\u0002\u0002\u0002\u0157\u0145",
    "\u0003\u0002\u0002\u0002\u0157\u0148\u0003\u0002\u0002\u0002\u0157\u014b",
    "\u0003\u0002\u0002\u0002\u0157\u014e\u0003\u0002\u0002\u0002\u0157\u0154",
    "\u0003\u0002\u0002\u0002\u0158\u015b\u0003\u0002\u0002\u0002\u0159\u0157",
    "\u0003\u0002\u0002\u0002\u0159\u015a\u0003\u0002\u0002\u0002\u015a#",
    "\u0003\u0002\u0002\u0002\u015b\u0159\u0003\u0002\u0002\u0002\u015c\u015e",
    "\u0007<\u0002\u0002\u015d\u015f\u0005 \u0011\u0002\u015e\u015d\u0003",
    "\u0002\u0002\u0002\u015e\u015f\u0003\u0002\u0002\u0002\u015f\u0160\u0003",
    "\u0002\u0002\u0002\u0160\u0161\u0007=\u0002\u0002\u0161%\u0003\u0002",
    "\u0002\u0002\u0162\u0164\u0007:\u0002\u0002\u0163\u0165\u0005.\u0018",
    "\u0002\u0164\u0163\u0003\u0002\u0002\u0002\u0164\u0165\u0003\u0002\u0002",
    "\u0002\u0165\u0166\u0003\u0002\u0002\u0002\u0166\u0167\u0007;\u0002",
    "\u0002\u0167\'\u0003\u0002\u0002\u0002\u0168\u0169\u0007\r\u0002\u0002",
    "\u0169\u016a\u0007>\u0002\u0002\u016a\u016b\u0005\"\u0012\u0002\u016b",
    "\u016c\u0007B\u0002\u0002\u016c\u016d\u0005\"\u0012\u0002\u016d\u016e",
    "\u0007B\u0002\u0002\u016e\u016f\u0005\"\u0012\u0002\u016f\u0170\u0007",
    "?\u0002\u0002\u0170)\u0003\u0002\u0002\u0002\u0171\u0172\u0007\u000e",
    "\u0002\u0002\u0172\u0173\u0007>\u0002\u0002\u0173\u0174\u0005\"\u0012",
    "\u0002\u0174\u0175\u0007B\u0002\u0002\u0175\u0176\u0005\"\u0012\u0002",
    "\u0176\u0177\u0007B\u0002\u0002\u0177\u017c\u0005\"\u0012\u0002\u0178",
    "\u0179\u0007B\u0002\u0002\u0179\u017b\u0005\"\u0012\u0002\u017a\u0178",
    "\u0003\u0002\u0002\u0002\u017b\u017e\u0003\u0002\u0002\u0002\u017c\u017a",
    "\u0003\u0002\u0002\u0002\u017c\u017d\u0003\u0002\u0002\u0002\u017d\u017f",
    "\u0003\u0002\u0002\u0002\u017e\u017c\u0003\u0002\u0002\u0002\u017f\u0180",
    "\u0007?\u0002\u0002\u0180+\u0003\u0002\u0002\u0002\u0181\u0182\u0007",
    "G\u0002\u0002\u0182\u0183\u0007\u0003\u0002\u0002\u0183\u0188\u0007",
    "G\u0002\u0002\u0184\u0185\u0007\u0003\u0002\u0002\u0185\u0187\u0007",
    "G\u0002\u0002\u0186\u0184\u0003\u0002\u0002\u0002\u0187\u018a\u0003",
    "\u0002\u0002\u0002\u0188\u0186\u0003\u0002\u0002\u0002\u0188\u0189\u0003",
    "\u0002\u0002\u0002\u0189-\u0003\u0002\u0002\u0002\u018a\u0188\u0003",
    "\u0002\u0002\u0002\u018b\u018c\u0007H\u0002\u0002\u018c\u018d\u0007",
    "D\u0002\u0002\u018d\u0194\u0005\"\u0012\u0002\u018e\u018f\u0007B\u0002",
    "\u0002\u018f\u0190\u0007H\u0002\u0002\u0190\u0191\u0007D\u0002\u0002",
    "\u0191\u0193\u0005\"\u0012\u0002\u0192\u018e\u0003\u0002\u0002\u0002",
    "\u0193\u0196\u0003\u0002\u0002\u0002\u0194\u0192\u0003\u0002\u0002\u0002",
    "\u0194\u0195\u0003\u0002\u0002\u0002\u0195/\u0003\u0002\u0002\u0002",
    "\u0196\u0194\u0003\u0002\u0002\u0002\u0197\u0198\u0007<\u0002\u0002",
    "\u0198\u0199\u0005\"\u0012\u0002\u0199\u019a\u0007=\u0002\u0002\u019a",
    "\u019c\u0003\u0002\u0002\u0002\u019b\u0197\u0003\u0002\u0002\u0002\u019c",
    "\u019d\u0003\u0002\u0002\u0002\u019d\u019b\u0003\u0002\u0002\u0002\u019d",
    "\u019e\u0003\u0002\u0002\u0002\u019e1\u0003\u0002\u0002\u0002$8:?FI",
    "MRW]\u007f\u0085\u008b\u00bc\u00c4\u00c8\u00df\u00e9\u0107\u010f\u011c",
    "\u0120\u0125\u0129\u012f\u0134\u0137\u0157\u0159\u015e\u0164\u017c\u0188",
    "\u0194\u019d"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'.'", "'initPlayground'", "'drawText'", "'clearPlayground()'", 
                     "'drawLine'", "'lineWidth('", "'strokeStyle('", "'fillStyle('", 
                     "'fillRect('", "'strokeRect('", "'createImage'", "'createButton'", 
                     "'println'", "'print'", "'input'", "'assert'", "'size'", 
                     "'def'", "'if'", "'else'", "'return'", "'for'", "'while'", 
                     "'to'", "'do'", "'end'", "'in'", "'null'", "'Number'", 
                     "'String'", "'List'", "'Boolean'", "'Image'", "'Object'", 
                     "'class'", "'new'", "'Playground'", "'Button'", "'push'", 
                     "'pop'", "'||'", "'&&'", "'=='", "'!='", "'>='", "'<='", 
                     "'^'", "'!'", "'>'", "'<'", "'+'", "'-'", "'*'", "'/'", 
                     "'%'", "'{'", "'}'", "'['", "']'", "'('", "')'", "';'", 
                     "'='", "','", "'?'", "':'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, "Println", "Print", "Input", 
                      "Assert", "Size", "Def", "If", "Else", "Return", "For", 
                      "While", "To", "Do", "End", "In", "Null", "Number", 
                      "String", "List", "Boolean", "Image", "Json", "Class", 
                      "New", "Playground", "Button", "Push", "Pop", "Or", 
                      "And", "Equals", "NEquals", "GTEquals", "LTEquals", 
                      "Pow", "Excl", "GT", "LT", "Add", "Subtract", "Multiply", 
                      "Divide", "Modulus", "OBrace", "CBrace", "OBracket", 
                      "CBracket", "OParen", "CParen", "SColon", "Assign", 
                      "Comma", "QMark", "Colon", "BoolVar", "NumberVar", 
                      "Identifier", "StringVar", "Comment", "Space" ];

var ruleNames =  [ "parse", "block", "statement", "assignment", "functionCall", 
                   "typeType", "ifStatement", "ifStat", "elseIfStat", "elseStat", 
                   "functionDecl", "classDecl", "forStatement", "whileStatement", 
                   "idList", "exprList", "expression", "list", "jsonInit", 
                   "imageInit", "buttonInit", "jsonCall", "objValues", "indexes" ];

function WebiParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

WebiParser.prototype = Object.create(antlr4.Parser.prototype);
WebiParser.prototype.constructor = WebiParser;

Object.defineProperty(WebiParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

WebiParser.EOF = antlr4.Token.EOF;
WebiParser.T__0 = 1;
WebiParser.T__1 = 2;
WebiParser.T__2 = 3;
WebiParser.T__3 = 4;
WebiParser.T__4 = 5;
WebiParser.T__5 = 6;
WebiParser.T__6 = 7;
WebiParser.T__7 = 8;
WebiParser.T__8 = 9;
WebiParser.T__9 = 10;
WebiParser.T__10 = 11;
WebiParser.T__11 = 12;
WebiParser.Println = 13;
WebiParser.Print = 14;
WebiParser.Input = 15;
WebiParser.Assert = 16;
WebiParser.Size = 17;
WebiParser.Def = 18;
WebiParser.If = 19;
WebiParser.Else = 20;
WebiParser.Return = 21;
WebiParser.For = 22;
WebiParser.While = 23;
WebiParser.To = 24;
WebiParser.Do = 25;
WebiParser.End = 26;
WebiParser.In = 27;
WebiParser.Null = 28;
WebiParser.Number = 29;
WebiParser.String = 30;
WebiParser.List = 31;
WebiParser.Boolean = 32;
WebiParser.Image = 33;
WebiParser.Json = 34;
WebiParser.Class = 35;
WebiParser.New = 36;
WebiParser.Playground = 37;
WebiParser.Button = 38;
WebiParser.Push = 39;
WebiParser.Pop = 40;
WebiParser.Or = 41;
WebiParser.And = 42;
WebiParser.Equals = 43;
WebiParser.NEquals = 44;
WebiParser.GTEquals = 45;
WebiParser.LTEquals = 46;
WebiParser.Pow = 47;
WebiParser.Excl = 48;
WebiParser.GT = 49;
WebiParser.LT = 50;
WebiParser.Add = 51;
WebiParser.Subtract = 52;
WebiParser.Multiply = 53;
WebiParser.Divide = 54;
WebiParser.Modulus = 55;
WebiParser.OBrace = 56;
WebiParser.CBrace = 57;
WebiParser.OBracket = 58;
WebiParser.CBracket = 59;
WebiParser.OParen = 60;
WebiParser.CParen = 61;
WebiParser.SColon = 62;
WebiParser.Assign = 63;
WebiParser.Comma = 64;
WebiParser.QMark = 65;
WebiParser.Colon = 66;
WebiParser.BoolVar = 67;
WebiParser.NumberVar = 68;
WebiParser.Identifier = 69;
WebiParser.StringVar = 70;
WebiParser.Comment = 71;
WebiParser.Space = 72;

WebiParser.RULE_parse = 0;
WebiParser.RULE_block = 1;
WebiParser.RULE_statement = 2;
WebiParser.RULE_assignment = 3;
WebiParser.RULE_functionCall = 4;
WebiParser.RULE_typeType = 5;
WebiParser.RULE_ifStatement = 6;
WebiParser.RULE_ifStat = 7;
WebiParser.RULE_elseIfStat = 8;
WebiParser.RULE_elseStat = 9;
WebiParser.RULE_functionDecl = 10;
WebiParser.RULE_classDecl = 11;
WebiParser.RULE_forStatement = 12;
WebiParser.RULE_whileStatement = 13;
WebiParser.RULE_idList = 14;
WebiParser.RULE_exprList = 15;
WebiParser.RULE_expression = 16;
WebiParser.RULE_list = 17;
WebiParser.RULE_jsonInit = 18;
WebiParser.RULE_imageInit = 19;
WebiParser.RULE_buttonInit = 20;
WebiParser.RULE_jsonCall = 21;
WebiParser.RULE_objValues = 22;
WebiParser.RULE_indexes = 23;

function ParseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = WebiParser.RULE_parse;
    return this;
}

ParseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParseContext.prototype.constructor = ParseContext;

ParseContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

ParseContext.prototype.EOF = function() {
    return this.getToken(WebiParser.EOF, 0);
};

ParseContext.prototype.enterRule = function(listener) {
    if(listener instanceof WebiListener ) {
        listener.enterParse(this);
	}
};

ParseContext.prototype.exitRule = function(listener) {
    if(listener instanceof WebiListener ) {
        listener.exitParse(this);
	}
};

ParseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof WebiVisitor ) {
        return visitor.visitParse(this);
    } else {
        return visitor.visitChildren(this);
    }
};




WebiParser.ParseContext = ParseContext;

WebiParser.prototype.parse = function() {

    var localctx = new ParseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, WebiParser.RULE_parse);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 48;
        this.block();
        this.state = 49;
        this.match(WebiParser.EOF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function BlockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = WebiParser.RULE_block;
    return this;
}

BlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BlockContext.prototype.constructor = BlockContext;

BlockContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

BlockContext.prototype.functionDecl = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FunctionDeclContext);
    } else {
        return this.getTypedRuleContext(FunctionDeclContext,i);
    }
};

BlockContext.prototype.classDecl = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ClassDeclContext);
    } else {
        return this.getTypedRuleContext(ClassDeclContext,i);
    }
};

BlockContext.prototype.Return = function() {
    return this.getToken(WebiParser.Return, 0);
};

BlockContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

BlockContext.prototype.enterRule = function(listener) {
    if(listener instanceof WebiListener ) {
        listener.enterBlock(this);
	}
};

BlockContext.prototype.exitRule = function(listener) {
    if(listener instanceof WebiListener ) {
        listener.exitBlock(this);
	}
};

BlockContext.prototype.accept = function(visitor) {
    if ( visitor instanceof WebiVisitor ) {
        return visitor.visitBlock(this);
    } else {
        return visitor.visitChildren(this);
    }
};




WebiParser.BlockContext = BlockContext;

WebiParser.prototype.block = function() {

    var localctx = new BlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, WebiParser.RULE_block);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 56;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << WebiParser.T__1) | (1 << WebiParser.T__2) | (1 << WebiParser.T__3) | (1 << WebiParser.T__4) | (1 << WebiParser.T__5) | (1 << WebiParser.T__6) | (1 << WebiParser.T__7) | (1 << WebiParser.T__8) | (1 << WebiParser.T__9) | (1 << WebiParser.T__10) | (1 << WebiParser.T__11) | (1 << WebiParser.Println) | (1 << WebiParser.Print) | (1 << WebiParser.Assert) | (1 << WebiParser.Size) | (1 << WebiParser.Def) | (1 << WebiParser.If) | (1 << WebiParser.For) | (1 << WebiParser.While) | (1 << WebiParser.Number) | (1 << WebiParser.String) | (1 << WebiParser.List))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (WebiParser.Boolean - 32)) | (1 << (WebiParser.Image - 32)) | (1 << (WebiParser.Json - 32)) | (1 << (WebiParser.Class - 32)) | (1 << (WebiParser.New - 32)))) !== 0) || _la===WebiParser.Identifier) {
            this.state = 54;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case WebiParser.T__1:
            case WebiParser.T__2:
            case WebiParser.T__3:
            case WebiParser.T__4:
            case WebiParser.T__5:
            case WebiParser.T__6:
            case WebiParser.T__7:
            case WebiParser.T__8:
            case WebiParser.T__9:
            case WebiParser.T__10:
            case WebiParser.T__11:
            case WebiParser.Println:
            case WebiParser.Print:
            case WebiParser.Assert:
            case WebiParser.Size:
            case WebiParser.If:
            case WebiParser.For:
            case WebiParser.While:
            case WebiParser.Number:
            case WebiParser.String:
            case WebiParser.List:
            case WebiParser.Boolean:
            case WebiParser.Image:
            case WebiParser.Json:
            case WebiParser.New:
            case WebiParser.Identifier:
                this.state = 51;
                this.statement();
                break;
            case WebiParser.Def:
                this.state = 52;
                this.functionDecl();
                break;
            case WebiParser.Class:
                this.state = 53;
                this.classDecl();
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 58;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 61;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===WebiParser.Return) {
            this.state = 59;
            this.match(WebiParser.Return);
            this.state = 60;
            this.expression(0);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = WebiParser.RULE_statement;
    return this;
}

StatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatementContext.prototype.constructor = StatementContext;

StatementContext.prototype.assignment = function() {
    return this.getTypedRuleContext(AssignmentContext,0);
};

StatementContext.prototype.functionCall = function() {
    return this.getTypedRuleContext(FunctionCallContext,0);
};

StatementContext.prototype.ifStatement = function() {
    return this.getTypedRuleContext(IfStatementContext,0);
};

StatementContext.prototype.forStatement = function() {
    return this.getTypedRuleContext(ForStatementContext,0);
};

StatementContext.prototype.whileStatement = function() {
    return this.getTypedRuleContext(WhileStatementContext,0);
};

StatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof WebiListener ) {
        listener.enterStatement(this);
	}
};

StatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof WebiListener ) {
        listener.exitStatement(this);
	}
};

StatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof WebiVisitor ) {
        return visitor.visitStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




WebiParser.StatementContext = StatementContext;

WebiParser.prototype.statement = function() {

    var localctx = new StatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, WebiParser.RULE_statement);
    try {
        this.state = 68;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 63;
            this.assignment();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 64;
            this.functionCall();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 65;
            this.ifStatement();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 66;
            this.forStatement();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 67;
            this.whileStatement();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AssignmentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = WebiParser.RULE_assignment;
    return this;
}

AssignmentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AssignmentContext.prototype.constructor = AssignmentContext;

AssignmentContext.prototype.Identifier = function() {
    return this.getToken(WebiParser.Identifier, 0);
};

AssignmentContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

AssignmentContext.prototype.jsonInit = function() {
    return this.getTypedRuleContext(JsonInitContext,0);
};

AssignmentContext.prototype.typeType = function() {
    return this.getTypedRuleContext(TypeTypeContext,0);
};

AssignmentContext.prototype.indexes = function() {
    return this.getTypedRuleContext(IndexesContext,0);
};

AssignmentContext.prototype.enterRule = function(listener) {
    if(listener instanceof WebiListener ) {
        listener.enterAssignment(this);
	}
};

AssignmentContext.prototype.exitRule = function(listener) {
    if(listener instanceof WebiListener ) {
        listener.exitAssignment(this);
	}
};

AssignmentContext.prototype.accept = function(visitor) {
    if ( visitor instanceof WebiVisitor ) {
        return visitor.visitAssignment(this);
    } else {
        return visitor.visitChildren(this);
    }
};




WebiParser.AssignmentContext = AssignmentContext;

WebiParser.prototype.assignment = function() {

    var localctx = new AssignmentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, WebiParser.RULE_assignment);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 71;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(((((_la - 29)) & ~0x1f) == 0 && ((1 << (_la - 29)) & ((1 << (WebiParser.Number - 29)) | (1 << (WebiParser.String - 29)) | (1 << (WebiParser.List - 29)) | (1 << (WebiParser.Boolean - 29)) | (1 << (WebiParser.Image - 29)) | (1 << (WebiParser.Json - 29)))) !== 0)) {
            this.state = 70;
            this.typeType();
        }

        this.state = 73;
        this.match(WebiParser.Identifier);
        this.state = 75;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===WebiParser.OBracket) {
            this.state = 74;
            this.indexes();
        }

        this.state = 77;
        this.match(WebiParser.Assign);
        this.state = 80;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case WebiParser.T__1:
        case WebiParser.T__2:
        case WebiParser.T__3:
        case WebiParser.T__4:
        case WebiParser.T__5:
        case WebiParser.T__6:
        case WebiParser.T__7:
        case WebiParser.T__8:
        case WebiParser.T__9:
        case WebiParser.T__10:
        case WebiParser.T__11:
        case WebiParser.Println:
        case WebiParser.Print:
        case WebiParser.Input:
        case WebiParser.Assert:
        case WebiParser.Size:
        case WebiParser.Null:
        case WebiParser.New:
        case WebiParser.Excl:
        case WebiParser.Subtract:
        case WebiParser.OBracket:
        case WebiParser.OParen:
        case WebiParser.BoolVar:
        case WebiParser.NumberVar:
        case WebiParser.Identifier:
        case WebiParser.StringVar:
            this.state = 78;
            this.expression(0);
            break;
        case WebiParser.OBrace:
            this.state = 79;
            this.jsonInit();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FunctionCallContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = WebiParser.RULE_functionCall;
    return this;
}

FunctionCallContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunctionCallContext.prototype.constructor = FunctionCallContext;


 
FunctionCallContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function AssertFunctionCallContext(parser, ctx) {
	FunctionCallContext.call(this, parser);
    FunctionCallContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AssertFunctionCallContext.prototype = Object.create(FunctionCallContext.prototype);
AssertFunctionCallContext.prototype.constructor = AssertFunctionCallContext;

WebiParser.AssertFunctionCallContext = AssertFunctionCallContext;

AssertFunctionCallContext.prototype.Assert = function() {
    return this.getToken(WebiParser.Assert, 0);
};

AssertFunctionCallContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
AssertFunctionCallContext.prototype.enterRule = function(listener) {
    if(listener instanceof WebiListener ) {
        listener.enterAssertFunctionCall(this);
	}
};

AssertFunctionCallContext.prototype.exitRule = function(listener) {
    if(listener instanceof WebiListener ) {
        listener.exitAssertFunctionCall(this);
	}
};

AssertFunctionCallContext.prototype.accept = function(visitor) {
    if ( visitor instanceof WebiVisitor ) {
        return visitor.visitAssertFunctionCall(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function SizeFunctionCallContext(parser, ctx) {
	FunctionCallContext.call(this, parser);
    FunctionCallContext.prototype.copyFrom.call(this, ctx);
    return this;
}

SizeFunctionCallContext.prototype = Object.create(FunctionCallContext.prototype);
SizeFunctionCallContext.prototype.constructor = SizeFunctionCallContext;

WebiParser.SizeFunctionCallContext = SizeFunctionCallContext;

SizeFunctionCallContext.prototype.Size = function() {
    return this.getToken(WebiParser.Size, 0);
};

SizeFunctionCallContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
SizeFunctionCallContext.prototype.enterRule = function(listener) {
    if(listener instanceof WebiListener ) {
        listener.enterSizeFunctionCall(this);
	}
};

SizeFunctionCallContext.prototype.exitRule = function(listener) {
    if(listener instanceof WebiListener ) {
        listener.exitSizeFunctionCall(this);
	}
};

SizeFunctionCallContext.prototype.accept = function(visitor) {
    if ( visitor instanceof WebiVisitor ) {
        return visitor.visitSizeFunctionCall(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function StrokeStyleContext(parser, ctx) {
	FunctionCallContext.call(this, parser);
    FunctionCallContext.prototype.copyFrom.call(this, ctx);
    return this;
}

StrokeStyleContext.prototype = Object.create(FunctionCallContext.prototype);
StrokeStyleContext.prototype.constructor = StrokeStyleContext;

WebiParser.StrokeStyleContext = StrokeStyleContext;

StrokeStyleContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
StrokeStyleContext.prototype.enterRule = function(listener) {
    if(listener instanceof WebiListener ) {
        listener.enterStrokeStyle(this);
	}
};

StrokeStyleContext.prototype.exitRule = function(listener) {
    if(listener instanceof WebiListener ) {
        listener.exitStrokeStyle(this);
	}
};

StrokeStyleContext.prototype.accept = function(visitor) {
    if ( visitor instanceof WebiVisitor ) {
        return visitor.visitStrokeStyle(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ListPushExpresionContext(parser, ctx) {
	FunctionCallContext.call(this, parser);
    FunctionCallContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ListPushExpresionContext.prototype = Object.create(FunctionCallContext.prototype);
ListPushExpresionContext.prototype.constructor = ListPushExpresionContext;

WebiParser.ListPushExpresionContext = ListPushExpresionContext;

ListPushExpresionContext.prototype.Identifier = function() {
    return this.getToken(WebiParser.Identifier, 0);
};

ListPushExpresionContext.prototype.Push = function() {
    return this.getToken(WebiParser.Push, 0);
};

ListPushExpresionContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
ListPushExpresionContext.prototype.enterRule = function(listener) {
    if(listener instanceof WebiListener ) {
        listener.enterListPushExpresion(this);
	}
};

ListPushExpresionContext.prototype.exitRule = function(listener) {
    if(listener instanceof WebiListener ) {
        listener.exitListPushExpresion(this);
	}
};

ListPushExpresionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof WebiVisitor ) {
        return visitor.visitListPushExpresion(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function NewCanvasCallContext(parser, ctx) {
	FunctionCallContext.call(this, parser);
    FunctionCallContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NewCanvasCallContext.prototype = Object.create(FunctionCallContext.prototype);
NewCanvasCallContext.prototype.constructor = NewCanvasCallContext;

WebiParser.NewCanvasCallContext = NewCanvasCallContext;

NewCanvasCallContext.prototype.exprList = function() {
    return this.getTypedRuleContext(ExprListContext,0);
};
NewCanvasCallContext.prototype.enterRule = function(listener) {
    if(listener instanceof WebiListener ) {
        listener.enterNewCanvasCall(this);
	}
};

NewCanvasCallContext.prototype.exitRule = function(listener) {
    if(listener instanceof WebiListener ) {
        listener.exitNewCanvasCall(this);
	}
};

NewCanvasCallContext.prototype.accept = function(visitor) {
    if ( visitor instanceof WebiVisitor ) {
        return visitor.visitNewCanvasCall(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ClearPlaygroundCallContext(parser, ctx) {
	FunctionCallContext.call(this, parser);
    FunctionCallContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ClearPlaygroundCallContext.prototype = Object.create(FunctionCallContext.prototype);
ClearPlaygroundCallContext.prototype.constructor = ClearPlaygroundCallContext;

WebiParser.ClearPlaygroundCallContext = ClearPlaygroundCallContext;

ClearPlaygroundCallContext.prototype.enterRule = function(listener) {
    if(listener instanceof WebiListener ) {
        listener.enterClearPlaygroundCall(this);
	}
};

ClearPlaygroundCallContext.prototype.exitRule = function(listener) {
    if(listener instanceof WebiListener ) {
        listener.exitClearPlaygroundCall(this);
	}
};

ClearPlaygroundCallContext.prototype.accept = function(visitor) {
    if ( visitor instanceof WebiVisitor ) {
        return visitor.visitClearPlaygroundCall(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ListPopExpressionContext(parser, ctx) {
	FunctionCallContext.call(this, parser);
    FunctionCallContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ListPopExpressionContext.prototype = Object.create(FunctionCallContext.prototype);
ListPopExpressionContext.prototype.constructor = ListPopExpressionContext;

WebiParser.ListPopExpressionContext = ListPopExpressionContext;

ListPopExpressionContext.prototype.Identifier = function() {
    return this.getToken(WebiParser.Identifier, 0);
};

ListPopExpressionContext.prototype.Pop = function() {
    return this.getToken(WebiParser.Pop, 0);
};
ListPopExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof WebiListener ) {
        listener.enterListPopExpression(this);
	}
};

ListPopExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof WebiListener ) {
        listener.exitListPopExpression(this);
	}
};

ListPopExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof WebiVisitor ) {
        return visitor.visitListPopExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function DrawLineContext(parser, ctx) {
	FunctionCallContext.call(this, parser);
    FunctionCallContext.prototype.copyFrom.call(this, ctx);
    return this;
}

DrawLineContext.prototype = Object.create(FunctionCallContext.prototype);
DrawLineContext.prototype.constructor = DrawLineContext;

WebiParser.DrawLineContext = DrawLineContext;

DrawLineContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
DrawLineContext.prototype.enterRule = function(listener) {
    if(listener instanceof WebiListener ) {
        listener.enterDrawLine(this);
	}
};

DrawLineContext.prototype.exitRule = function(listener) {
    if(listener instanceof WebiListener ) {
        listener.exitDrawLine(this);
	}
};

DrawLineContext.prototype.accept = function(visitor) {
    if ( visitor instanceof WebiVisitor ) {
        return visitor.visitDrawLine(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function IdentifierFunctionCallContext(parser, ctx) {
	FunctionCallContext.call(this, parser);
    FunctionCallContext.prototype.copyFrom.call(this, ctx);
    return this;
}

IdentifierFunctionCallContext.prototype = Object.create(FunctionCallContext.prototype);
IdentifierFunctionCallContext.prototype.constructor = IdentifierFunctionCallContext;

WebiParser.IdentifierFunctionCallContext = IdentifierFunctionCallContext;

IdentifierFunctionCallContext.prototype.Identifier = function() {
    return this.getToken(WebiParser.Identifier, 0);
};

IdentifierFunctionCallContext.prototype.exprList = function() {
    return this.getTypedRuleContext(ExprListContext,0);
};
IdentifierFunctionCallContext.prototype.enterRule = function(listener) {
    if(listener instanceof WebiListener ) {
        listener.enterIdentifierFunctionCall(this);
	}
};

IdentifierFunctionCallContext.prototype.exitRule = function(listener) {
    if(listener instanceof WebiListener ) {
        listener.exitIdentifierFunctionCall(this);
	}
};

IdentifierFunctionCallContext.prototype.accept = function(visitor) {
    if ( visitor instanceof WebiVisitor ) {
        return visitor.visitIdentifierFunctionCall(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function FillRectContext(parser, ctx) {
	FunctionCallContext.call(this, parser);
    FunctionCallContext.prototype.copyFrom.call(this, ctx);
    return this;
}

FillRectContext.prototype = Object.create(FunctionCallContext.prototype);
FillRectContext.prototype.constructor = FillRectContext;

WebiParser.FillRectContext = FillRectContext;

FillRectContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
FillRectContext.prototype.enterRule = function(listener) {
    if(listener instanceof WebiListener ) {
        listener.enterFillRect(this);
	}
};

FillRectContext.prototype.exitRule = function(listener) {
    if(listener instanceof WebiListener ) {
        listener.exitFillRect(this);
	}
};

FillRectContext.prototype.accept = function(visitor) {
    if ( visitor instanceof WebiVisitor ) {
        return visitor.visitFillRect(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function LineWidthContext(parser, ctx) {
	FunctionCallContext.call(this, parser);
    FunctionCallContext.prototype.copyFrom.call(this, ctx);
    return this;
}

LineWidthContext.prototype = Object.create(FunctionCallContext.prototype);
LineWidthContext.prototype.constructor = LineWidthContext;

WebiParser.LineWidthContext = LineWidthContext;

LineWidthContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
LineWidthContext.prototype.enterRule = function(listener) {
    if(listener instanceof WebiListener ) {
        listener.enterLineWidth(this);
	}
};

LineWidthContext.prototype.exitRule = function(listener) {
    if(listener instanceof WebiListener ) {
        listener.exitLineWidth(this);
	}
};

LineWidthContext.prototype.accept = function(visitor) {
    if ( visitor instanceof WebiVisitor ) {
        return visitor.visitLineWidth(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ImageInitCallContext(parser, ctx) {
	FunctionCallContext.call(this, parser);
    FunctionCallContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ImageInitCallContext.prototype = Object.create(FunctionCallContext.prototype);
ImageInitCallContext.prototype.constructor = ImageInitCallContext;

WebiParser.ImageInitCallContext = ImageInitCallContext;

ImageInitCallContext.prototype.imageInit = function() {
    return this.getTypedRuleContext(ImageInitContext,0);
};
ImageInitCallContext.prototype.enterRule = function(listener) {
    if(listener instanceof WebiListener ) {
        listener.enterImageInitCall(this);
	}
};

ImageInitCallContext.prototype.exitRule = function(listener) {
    if(listener instanceof WebiListener ) {
        listener.exitImageInitCall(this);
	}
};

ImageInitCallContext.prototype.accept = function(visitor) {
    if ( visitor instanceof WebiVisitor ) {
        return visitor.visitImageInitCall(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function NewObjectCallContext(parser, ctx) {
	FunctionCallContext.call(this, parser);
    FunctionCallContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NewObjectCallContext.prototype = Object.create(FunctionCallContext.prototype);
NewObjectCallContext.prototype.constructor = NewObjectCallContext;

WebiParser.NewObjectCallContext = NewObjectCallContext;

NewObjectCallContext.prototype.Identifier = function() {
    return this.getToken(WebiParser.Identifier, 0);
};

NewObjectCallContext.prototype.exprList = function() {
    return this.getTypedRuleContext(ExprListContext,0);
};
NewObjectCallContext.prototype.enterRule = function(listener) {
    if(listener instanceof WebiListener ) {
        listener.enterNewObjectCall(this);
	}
};

NewObjectCallContext.prototype.exitRule = function(listener) {
    if(listener instanceof WebiListener ) {
        listener.exitNewObjectCall(this);
	}
};

NewObjectCallContext.prototype.accept = function(visitor) {
    if ( visitor instanceof WebiVisitor ) {
        return visitor.visitNewObjectCall(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function DrawTextCallContext(parser, ctx) {
	FunctionCallContext.call(this, parser);
    FunctionCallContext.prototype.copyFrom.call(this, ctx);
    return this;
}

DrawTextCallContext.prototype = Object.create(FunctionCallContext.prototype);
DrawTextCallContext.prototype.constructor = DrawTextCallContext;

WebiParser.DrawTextCallContext = DrawTextCallContext;

DrawTextCallContext.prototype.exprList = function() {
    return this.getTypedRuleContext(ExprListContext,0);
};
DrawTextCallContext.prototype.enterRule = function(listener) {
    if(listener instanceof WebiListener ) {
        listener.enterDrawTextCall(this);
	}
};

DrawTextCallContext.prototype.exitRule = function(listener) {
    if(listener instanceof WebiListener ) {
        listener.exitDrawTextCall(this);
	}
};

DrawTextCallContext.prototype.accept = function(visitor) {
    if ( visitor instanceof WebiVisitor ) {
        return visitor.visitDrawTextCall(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function PrintlnFunctionCallContext(parser, ctx) {
	FunctionCallContext.call(this, parser);
    FunctionCallContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PrintlnFunctionCallContext.prototype = Object.create(FunctionCallContext.prototype);
PrintlnFunctionCallContext.prototype.constructor = PrintlnFunctionCallContext;

WebiParser.PrintlnFunctionCallContext = PrintlnFunctionCallContext;

PrintlnFunctionCallContext.prototype.Println = function() {
    return this.getToken(WebiParser.Println, 0);
};

PrintlnFunctionCallContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
PrintlnFunctionCallContext.prototype.enterRule = function(listener) {
    if(listener instanceof WebiListener ) {
        listener.enterPrintlnFunctionCall(this);
	}
};

PrintlnFunctionCallContext.prototype.exitRule = function(listener) {
    if(listener instanceof WebiListener ) {
        listener.exitPrintlnFunctionCall(this);
	}
};

PrintlnFunctionCallContext.prototype.accept = function(visitor) {
    if ( visitor instanceof WebiVisitor ) {
        return visitor.visitPrintlnFunctionCall(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function FillStyleContext(parser, ctx) {
	FunctionCallContext.call(this, parser);
    FunctionCallContext.prototype.copyFrom.call(this, ctx);
    return this;
}

FillStyleContext.prototype = Object.create(FunctionCallContext.prototype);
FillStyleContext.prototype.constructor = FillStyleContext;

WebiParser.FillStyleContext = FillStyleContext;

FillStyleContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
FillStyleContext.prototype.enterRule = function(listener) {
    if(listener instanceof WebiListener ) {
        listener.enterFillStyle(this);
	}
};

FillStyleContext.prototype.exitRule = function(listener) {
    if(listener instanceof WebiListener ) {
        listener.exitFillStyle(this);
	}
};

FillStyleContext.prototype.accept = function(visitor) {
    if ( visitor instanceof WebiVisitor ) {
        return visitor.visitFillStyle(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function StrokeRectContext(parser, ctx) {
	FunctionCallContext.call(this, parser);
    FunctionCallContext.prototype.copyFrom.call(this, ctx);
    return this;
}

StrokeRectContext.prototype = Object.create(FunctionCallContext.prototype);
StrokeRectContext.prototype.constructor = StrokeRectContext;

WebiParser.StrokeRectContext = StrokeRectContext;

StrokeRectContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
StrokeRectContext.prototype.enterRule = function(listener) {
    if(listener instanceof WebiListener ) {
        listener.enterStrokeRect(this);
	}
};

StrokeRectContext.prototype.exitRule = function(listener) {
    if(listener instanceof WebiListener ) {
        listener.exitStrokeRect(this);
	}
};

StrokeRectContext.prototype.accept = function(visitor) {
    if ( visitor instanceof WebiVisitor ) {
        return visitor.visitStrokeRect(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ButtonInitCallContext(parser, ctx) {
	FunctionCallContext.call(this, parser);
    FunctionCallContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ButtonInitCallContext.prototype = Object.create(FunctionCallContext.prototype);
ButtonInitCallContext.prototype.constructor = ButtonInitCallContext;

WebiParser.ButtonInitCallContext = ButtonInitCallContext;

ButtonInitCallContext.prototype.buttonInit = function() {
    return this.getTypedRuleContext(ButtonInitContext,0);
};
ButtonInitCallContext.prototype.enterRule = function(listener) {
    if(listener instanceof WebiListener ) {
        listener.enterButtonInitCall(this);
	}
};

ButtonInitCallContext.prototype.exitRule = function(listener) {
    if(listener instanceof WebiListener ) {
        listener.exitButtonInitCall(this);
	}
};

ButtonInitCallContext.prototype.accept = function(visitor) {
    if ( visitor instanceof WebiVisitor ) {
        return visitor.visitButtonInitCall(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function PrintFunctionCallContext(parser, ctx) {
	FunctionCallContext.call(this, parser);
    FunctionCallContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PrintFunctionCallContext.prototype = Object.create(FunctionCallContext.prototype);
PrintFunctionCallContext.prototype.constructor = PrintFunctionCallContext;

WebiParser.PrintFunctionCallContext = PrintFunctionCallContext;

PrintFunctionCallContext.prototype.Print = function() {
    return this.getToken(WebiParser.Print, 0);
};

PrintFunctionCallContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
PrintFunctionCallContext.prototype.enterRule = function(listener) {
    if(listener instanceof WebiListener ) {
        listener.enterPrintFunctionCall(this);
	}
};

PrintFunctionCallContext.prototype.exitRule = function(listener) {
    if(listener instanceof WebiListener ) {
        listener.exitPrintFunctionCall(this);
	}
};

PrintFunctionCallContext.prototype.accept = function(visitor) {
    if ( visitor instanceof WebiVisitor ) {
        return visitor.visitPrintFunctionCall(this);
    } else {
        return visitor.visitChildren(this);
    }
};



WebiParser.FunctionCallContext = FunctionCallContext;

WebiParser.prototype.functionCall = function() {

    var localctx = new FunctionCallContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, WebiParser.RULE_functionCall);
    var _la = 0; // Token type
    try {
        this.state = 186;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
        switch(la_) {
        case 1:
            localctx = new IdentifierFunctionCallContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 82;
            this.match(WebiParser.Identifier);
            this.state = 83;
            this.match(WebiParser.OParen);
            this.state = 85;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << WebiParser.T__1) | (1 << WebiParser.T__2) | (1 << WebiParser.T__3) | (1 << WebiParser.T__4) | (1 << WebiParser.T__5) | (1 << WebiParser.T__6) | (1 << WebiParser.T__7) | (1 << WebiParser.T__8) | (1 << WebiParser.T__9) | (1 << WebiParser.T__10) | (1 << WebiParser.T__11) | (1 << WebiParser.Println) | (1 << WebiParser.Print) | (1 << WebiParser.Input) | (1 << WebiParser.Assert) | (1 << WebiParser.Size) | (1 << WebiParser.Null))) !== 0) || ((((_la - 36)) & ~0x1f) == 0 && ((1 << (_la - 36)) & ((1 << (WebiParser.New - 36)) | (1 << (WebiParser.Excl - 36)) | (1 << (WebiParser.Subtract - 36)) | (1 << (WebiParser.OBracket - 36)) | (1 << (WebiParser.OParen - 36)) | (1 << (WebiParser.BoolVar - 36)))) !== 0) || ((((_la - 68)) & ~0x1f) == 0 && ((1 << (_la - 68)) & ((1 << (WebiParser.NumberVar - 68)) | (1 << (WebiParser.Identifier - 68)) | (1 << (WebiParser.StringVar - 68)))) !== 0)) {
                this.state = 84;
                this.exprList();
            }

            this.state = 87;
            this.match(WebiParser.CParen);
            break;

        case 2:
            localctx = new PrintlnFunctionCallContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 88;
            this.match(WebiParser.Println);
            this.state = 89;
            this.match(WebiParser.OParen);
            this.state = 91;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << WebiParser.T__1) | (1 << WebiParser.T__2) | (1 << WebiParser.T__3) | (1 << WebiParser.T__4) | (1 << WebiParser.T__5) | (1 << WebiParser.T__6) | (1 << WebiParser.T__7) | (1 << WebiParser.T__8) | (1 << WebiParser.T__9) | (1 << WebiParser.T__10) | (1 << WebiParser.T__11) | (1 << WebiParser.Println) | (1 << WebiParser.Print) | (1 << WebiParser.Input) | (1 << WebiParser.Assert) | (1 << WebiParser.Size) | (1 << WebiParser.Null))) !== 0) || ((((_la - 36)) & ~0x1f) == 0 && ((1 << (_la - 36)) & ((1 << (WebiParser.New - 36)) | (1 << (WebiParser.Excl - 36)) | (1 << (WebiParser.Subtract - 36)) | (1 << (WebiParser.OBracket - 36)) | (1 << (WebiParser.OParen - 36)) | (1 << (WebiParser.BoolVar - 36)))) !== 0) || ((((_la - 68)) & ~0x1f) == 0 && ((1 << (_la - 68)) & ((1 << (WebiParser.NumberVar - 68)) | (1 << (WebiParser.Identifier - 68)) | (1 << (WebiParser.StringVar - 68)))) !== 0)) {
                this.state = 90;
                this.expression(0);
            }

            this.state = 93;
            this.match(WebiParser.CParen);
            break;

        case 3:
            localctx = new PrintFunctionCallContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 94;
            this.match(WebiParser.Print);
            this.state = 95;
            this.match(WebiParser.OParen);
            this.state = 96;
            this.expression(0);
            this.state = 97;
            this.match(WebiParser.CParen);
            break;

        case 4:
            localctx = new AssertFunctionCallContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 99;
            this.match(WebiParser.Assert);
            this.state = 100;
            this.match(WebiParser.OParen);
            this.state = 101;
            this.expression(0);
            this.state = 102;
            this.match(WebiParser.CParen);
            break;

        case 5:
            localctx = new SizeFunctionCallContext(this, localctx);
            this.enterOuterAlt(localctx, 5);
            this.state = 104;
            this.match(WebiParser.Size);
            this.state = 105;
            this.match(WebiParser.OParen);
            this.state = 106;
            this.expression(0);
            this.state = 107;
            this.match(WebiParser.CParen);
            break;

        case 6:
            localctx = new ListPushExpresionContext(this, localctx);
            this.enterOuterAlt(localctx, 6);
            this.state = 109;
            this.match(WebiParser.Identifier);
            this.state = 110;
            this.match(WebiParser.T__0);
            this.state = 111;
            this.match(WebiParser.Push);
            this.state = 112;
            this.match(WebiParser.OParen);
            this.state = 113;
            this.expression(0);
            this.state = 114;
            this.match(WebiParser.CParen);
            break;

        case 7:
            localctx = new ListPopExpressionContext(this, localctx);
            this.enterOuterAlt(localctx, 7);
            this.state = 116;
            this.match(WebiParser.Identifier);
            this.state = 117;
            this.match(WebiParser.T__0);
            this.state = 118;
            this.match(WebiParser.Pop);
            this.state = 119;
            this.match(WebiParser.OParen);
            this.state = 120;
            this.match(WebiParser.CParen);
            break;

        case 8:
            localctx = new NewObjectCallContext(this, localctx);
            this.enterOuterAlt(localctx, 8);
            this.state = 121;
            this.match(WebiParser.New);
            this.state = 122;
            this.match(WebiParser.Identifier);
            this.state = 123;
            this.match(WebiParser.OParen);
            this.state = 125;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << WebiParser.T__1) | (1 << WebiParser.T__2) | (1 << WebiParser.T__3) | (1 << WebiParser.T__4) | (1 << WebiParser.T__5) | (1 << WebiParser.T__6) | (1 << WebiParser.T__7) | (1 << WebiParser.T__8) | (1 << WebiParser.T__9) | (1 << WebiParser.T__10) | (1 << WebiParser.T__11) | (1 << WebiParser.Println) | (1 << WebiParser.Print) | (1 << WebiParser.Input) | (1 << WebiParser.Assert) | (1 << WebiParser.Size) | (1 << WebiParser.Null))) !== 0) || ((((_la - 36)) & ~0x1f) == 0 && ((1 << (_la - 36)) & ((1 << (WebiParser.New - 36)) | (1 << (WebiParser.Excl - 36)) | (1 << (WebiParser.Subtract - 36)) | (1 << (WebiParser.OBracket - 36)) | (1 << (WebiParser.OParen - 36)) | (1 << (WebiParser.BoolVar - 36)))) !== 0) || ((((_la - 68)) & ~0x1f) == 0 && ((1 << (_la - 68)) & ((1 << (WebiParser.NumberVar - 68)) | (1 << (WebiParser.Identifier - 68)) | (1 << (WebiParser.StringVar - 68)))) !== 0)) {
                this.state = 124;
                this.exprList();
            }

            this.state = 127;
            this.match(WebiParser.CParen);
            break;

        case 9:
            localctx = new NewCanvasCallContext(this, localctx);
            this.enterOuterAlt(localctx, 9);
            this.state = 128;
            this.match(WebiParser.T__1);
            this.state = 129;
            this.match(WebiParser.OParen);
            this.state = 131;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << WebiParser.T__1) | (1 << WebiParser.T__2) | (1 << WebiParser.T__3) | (1 << WebiParser.T__4) | (1 << WebiParser.T__5) | (1 << WebiParser.T__6) | (1 << WebiParser.T__7) | (1 << WebiParser.T__8) | (1 << WebiParser.T__9) | (1 << WebiParser.T__10) | (1 << WebiParser.T__11) | (1 << WebiParser.Println) | (1 << WebiParser.Print) | (1 << WebiParser.Input) | (1 << WebiParser.Assert) | (1 << WebiParser.Size) | (1 << WebiParser.Null))) !== 0) || ((((_la - 36)) & ~0x1f) == 0 && ((1 << (_la - 36)) & ((1 << (WebiParser.New - 36)) | (1 << (WebiParser.Excl - 36)) | (1 << (WebiParser.Subtract - 36)) | (1 << (WebiParser.OBracket - 36)) | (1 << (WebiParser.OParen - 36)) | (1 << (WebiParser.BoolVar - 36)))) !== 0) || ((((_la - 68)) & ~0x1f) == 0 && ((1 << (_la - 68)) & ((1 << (WebiParser.NumberVar - 68)) | (1 << (WebiParser.Identifier - 68)) | (1 << (WebiParser.StringVar - 68)))) !== 0)) {
                this.state = 130;
                this.exprList();
            }

            this.state = 133;
            this.match(WebiParser.CParen);
            break;

        case 10:
            localctx = new DrawTextCallContext(this, localctx);
            this.enterOuterAlt(localctx, 10);
            this.state = 134;
            this.match(WebiParser.T__2);
            this.state = 135;
            this.match(WebiParser.OParen);
            this.state = 137;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << WebiParser.T__1) | (1 << WebiParser.T__2) | (1 << WebiParser.T__3) | (1 << WebiParser.T__4) | (1 << WebiParser.T__5) | (1 << WebiParser.T__6) | (1 << WebiParser.T__7) | (1 << WebiParser.T__8) | (1 << WebiParser.T__9) | (1 << WebiParser.T__10) | (1 << WebiParser.T__11) | (1 << WebiParser.Println) | (1 << WebiParser.Print) | (1 << WebiParser.Input) | (1 << WebiParser.Assert) | (1 << WebiParser.Size) | (1 << WebiParser.Null))) !== 0) || ((((_la - 36)) & ~0x1f) == 0 && ((1 << (_la - 36)) & ((1 << (WebiParser.New - 36)) | (1 << (WebiParser.Excl - 36)) | (1 << (WebiParser.Subtract - 36)) | (1 << (WebiParser.OBracket - 36)) | (1 << (WebiParser.OParen - 36)) | (1 << (WebiParser.BoolVar - 36)))) !== 0) || ((((_la - 68)) & ~0x1f) == 0 && ((1 << (_la - 68)) & ((1 << (WebiParser.NumberVar - 68)) | (1 << (WebiParser.Identifier - 68)) | (1 << (WebiParser.StringVar - 68)))) !== 0)) {
                this.state = 136;
                this.exprList();
            }

            this.state = 139;
            this.match(WebiParser.CParen);
            break;

        case 11:
            localctx = new ClearPlaygroundCallContext(this, localctx);
            this.enterOuterAlt(localctx, 11);
            this.state = 140;
            this.match(WebiParser.T__3);
            break;

        case 12:
            localctx = new DrawLineContext(this, localctx);
            this.enterOuterAlt(localctx, 12);
            this.state = 141;
            this.match(WebiParser.T__4);
            this.state = 142;
            this.match(WebiParser.OParen);
            this.state = 143;
            this.expression(0);
            this.state = 144;
            this.match(WebiParser.Comma);
            this.state = 145;
            this.expression(0);
            this.state = 146;
            this.match(WebiParser.Comma);
            this.state = 147;
            this.expression(0);
            this.state = 148;
            this.match(WebiParser.Comma);
            this.state = 149;
            this.expression(0);
            this.state = 150;
            this.match(WebiParser.CParen);
            break;

        case 13:
            localctx = new LineWidthContext(this, localctx);
            this.enterOuterAlt(localctx, 13);
            this.state = 152;
            this.match(WebiParser.T__5);
            this.state = 153;
            this.expression(0);
            this.state = 154;
            this.match(WebiParser.CParen);
            break;

        case 14:
            localctx = new StrokeStyleContext(this, localctx);
            this.enterOuterAlt(localctx, 14);
            this.state = 156;
            this.match(WebiParser.T__6);
            this.state = 157;
            this.expression(0);
            this.state = 158;
            this.match(WebiParser.CParen);
            break;

        case 15:
            localctx = new FillStyleContext(this, localctx);
            this.enterOuterAlt(localctx, 15);
            this.state = 160;
            this.match(WebiParser.T__7);
            this.state = 161;
            this.expression(0);
            this.state = 162;
            this.match(WebiParser.CParen);
            break;

        case 16:
            localctx = new FillRectContext(this, localctx);
            this.enterOuterAlt(localctx, 16);
            this.state = 164;
            this.match(WebiParser.T__8);
            this.state = 165;
            this.expression(0);
            this.state = 166;
            this.match(WebiParser.Comma);
            this.state = 167;
            this.expression(0);
            this.state = 168;
            this.match(WebiParser.Comma);
            this.state = 169;
            this.expression(0);
            this.state = 170;
            this.match(WebiParser.Comma);
            this.state = 171;
            this.expression(0);
            this.state = 172;
            this.match(WebiParser.CParen);
            break;

        case 17:
            localctx = new StrokeRectContext(this, localctx);
            this.enterOuterAlt(localctx, 17);
            this.state = 174;
            this.match(WebiParser.T__9);
            this.state = 175;
            this.expression(0);
            this.state = 176;
            this.match(WebiParser.Comma);
            this.state = 177;
            this.expression(0);
            this.state = 178;
            this.match(WebiParser.Comma);
            this.state = 179;
            this.expression(0);
            this.state = 180;
            this.match(WebiParser.Comma);
            this.state = 181;
            this.expression(0);
            this.state = 182;
            this.match(WebiParser.CParen);
            break;

        case 18:
            localctx = new ImageInitCallContext(this, localctx);
            this.enterOuterAlt(localctx, 18);
            this.state = 184;
            this.imageInit();
            break;

        case 19:
            localctx = new ButtonInitCallContext(this, localctx);
            this.enterOuterAlt(localctx, 19);
            this.state = 185;
            this.buttonInit();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TypeTypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = WebiParser.RULE_typeType;
    return this;
}

TypeTypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TypeTypeContext.prototype.constructor = TypeTypeContext;

TypeTypeContext.prototype.Number = function() {
    return this.getToken(WebiParser.Number, 0);
};

TypeTypeContext.prototype.String = function() {
    return this.getToken(WebiParser.String, 0);
};

TypeTypeContext.prototype.Boolean = function() {
    return this.getToken(WebiParser.Boolean, 0);
};

TypeTypeContext.prototype.List = function() {
    return this.getToken(WebiParser.List, 0);
};

TypeTypeContext.prototype.Image = function() {
    return this.getToken(WebiParser.Image, 0);
};

TypeTypeContext.prototype.Json = function() {
    return this.getToken(WebiParser.Json, 0);
};

TypeTypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof WebiListener ) {
        listener.enterTypeType(this);
	}
};

TypeTypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof WebiListener ) {
        listener.exitTypeType(this);
	}
};

TypeTypeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof WebiVisitor ) {
        return visitor.visitTypeType(this);
    } else {
        return visitor.visitChildren(this);
    }
};




WebiParser.TypeTypeContext = TypeTypeContext;

WebiParser.prototype.typeType = function() {

    var localctx = new TypeTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, WebiParser.RULE_typeType);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 188;
        _la = this._input.LA(1);
        if(!(((((_la - 29)) & ~0x1f) == 0 && ((1 << (_la - 29)) & ((1 << (WebiParser.Number - 29)) | (1 << (WebiParser.String - 29)) | (1 << (WebiParser.List - 29)) | (1 << (WebiParser.Boolean - 29)) | (1 << (WebiParser.Image - 29)) | (1 << (WebiParser.Json - 29)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function IfStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = WebiParser.RULE_ifStatement;
    return this;
}

IfStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IfStatementContext.prototype.constructor = IfStatementContext;

IfStatementContext.prototype.ifStat = function() {
    return this.getTypedRuleContext(IfStatContext,0);
};

IfStatementContext.prototype.End = function() {
    return this.getToken(WebiParser.End, 0);
};

IfStatementContext.prototype.elseIfStat = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ElseIfStatContext);
    } else {
        return this.getTypedRuleContext(ElseIfStatContext,i);
    }
};

IfStatementContext.prototype.elseStat = function() {
    return this.getTypedRuleContext(ElseStatContext,0);
};

IfStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof WebiListener ) {
        listener.enterIfStatement(this);
	}
};

IfStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof WebiListener ) {
        listener.exitIfStatement(this);
	}
};

IfStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof WebiVisitor ) {
        return visitor.visitIfStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




WebiParser.IfStatementContext = IfStatementContext;

WebiParser.prototype.ifStatement = function() {

    var localctx = new IfStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, WebiParser.RULE_ifStatement);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 190;
        this.ifStat();
        this.state = 194;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,13,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 191;
                this.elseIfStat(); 
            }
            this.state = 196;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,13,this._ctx);
        }

        this.state = 198;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===WebiParser.Else) {
            this.state = 197;
            this.elseStat();
        }

        this.state = 200;
        this.match(WebiParser.End);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function IfStatContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = WebiParser.RULE_ifStat;
    return this;
}

IfStatContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IfStatContext.prototype.constructor = IfStatContext;

IfStatContext.prototype.If = function() {
    return this.getToken(WebiParser.If, 0);
};

IfStatContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

IfStatContext.prototype.Do = function() {
    return this.getToken(WebiParser.Do, 0);
};

IfStatContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

IfStatContext.prototype.enterRule = function(listener) {
    if(listener instanceof WebiListener ) {
        listener.enterIfStat(this);
	}
};

IfStatContext.prototype.exitRule = function(listener) {
    if(listener instanceof WebiListener ) {
        listener.exitIfStat(this);
	}
};

IfStatContext.prototype.accept = function(visitor) {
    if ( visitor instanceof WebiVisitor ) {
        return visitor.visitIfStat(this);
    } else {
        return visitor.visitChildren(this);
    }
};




WebiParser.IfStatContext = IfStatContext;

WebiParser.prototype.ifStat = function() {

    var localctx = new IfStatContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, WebiParser.RULE_ifStat);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 202;
        this.match(WebiParser.If);
        this.state = 203;
        this.expression(0);
        this.state = 204;
        this.match(WebiParser.Do);
        this.state = 205;
        this.block();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ElseIfStatContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = WebiParser.RULE_elseIfStat;
    return this;
}

ElseIfStatContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElseIfStatContext.prototype.constructor = ElseIfStatContext;

ElseIfStatContext.prototype.Else = function() {
    return this.getToken(WebiParser.Else, 0);
};

ElseIfStatContext.prototype.If = function() {
    return this.getToken(WebiParser.If, 0);
};

ElseIfStatContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

ElseIfStatContext.prototype.Do = function() {
    return this.getToken(WebiParser.Do, 0);
};

ElseIfStatContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

ElseIfStatContext.prototype.enterRule = function(listener) {
    if(listener instanceof WebiListener ) {
        listener.enterElseIfStat(this);
	}
};

ElseIfStatContext.prototype.exitRule = function(listener) {
    if(listener instanceof WebiListener ) {
        listener.exitElseIfStat(this);
	}
};

ElseIfStatContext.prototype.accept = function(visitor) {
    if ( visitor instanceof WebiVisitor ) {
        return visitor.visitElseIfStat(this);
    } else {
        return visitor.visitChildren(this);
    }
};




WebiParser.ElseIfStatContext = ElseIfStatContext;

WebiParser.prototype.elseIfStat = function() {

    var localctx = new ElseIfStatContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, WebiParser.RULE_elseIfStat);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 207;
        this.match(WebiParser.Else);
        this.state = 208;
        this.match(WebiParser.If);
        this.state = 209;
        this.expression(0);
        this.state = 210;
        this.match(WebiParser.Do);
        this.state = 211;
        this.block();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ElseStatContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = WebiParser.RULE_elseStat;
    return this;
}

ElseStatContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElseStatContext.prototype.constructor = ElseStatContext;

ElseStatContext.prototype.Else = function() {
    return this.getToken(WebiParser.Else, 0);
};

ElseStatContext.prototype.Do = function() {
    return this.getToken(WebiParser.Do, 0);
};

ElseStatContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

ElseStatContext.prototype.enterRule = function(listener) {
    if(listener instanceof WebiListener ) {
        listener.enterElseStat(this);
	}
};

ElseStatContext.prototype.exitRule = function(listener) {
    if(listener instanceof WebiListener ) {
        listener.exitElseStat(this);
	}
};

ElseStatContext.prototype.accept = function(visitor) {
    if ( visitor instanceof WebiVisitor ) {
        return visitor.visitElseStat(this);
    } else {
        return visitor.visitChildren(this);
    }
};




WebiParser.ElseStatContext = ElseStatContext;

WebiParser.prototype.elseStat = function() {

    var localctx = new ElseStatContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, WebiParser.RULE_elseStat);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 213;
        this.match(WebiParser.Else);
        this.state = 214;
        this.match(WebiParser.Do);
        this.state = 215;
        this.block();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FunctionDeclContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = WebiParser.RULE_functionDecl;
    return this;
}

FunctionDeclContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunctionDeclContext.prototype.constructor = FunctionDeclContext;

FunctionDeclContext.prototype.Def = function() {
    return this.getToken(WebiParser.Def, 0);
};

FunctionDeclContext.prototype.Identifier = function() {
    return this.getToken(WebiParser.Identifier, 0);
};

FunctionDeclContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

FunctionDeclContext.prototype.End = function() {
    return this.getToken(WebiParser.End, 0);
};

FunctionDeclContext.prototype.idList = function() {
    return this.getTypedRuleContext(IdListContext,0);
};

FunctionDeclContext.prototype.enterRule = function(listener) {
    if(listener instanceof WebiListener ) {
        listener.enterFunctionDecl(this);
	}
};

FunctionDeclContext.prototype.exitRule = function(listener) {
    if(listener instanceof WebiListener ) {
        listener.exitFunctionDecl(this);
	}
};

FunctionDeclContext.prototype.accept = function(visitor) {
    if ( visitor instanceof WebiVisitor ) {
        return visitor.visitFunctionDecl(this);
    } else {
        return visitor.visitChildren(this);
    }
};




WebiParser.FunctionDeclContext = FunctionDeclContext;

WebiParser.prototype.functionDecl = function() {

    var localctx = new FunctionDeclContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, WebiParser.RULE_functionDecl);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 217;
        this.match(WebiParser.Def);
        this.state = 218;
        this.match(WebiParser.Identifier);
        this.state = 219;
        this.match(WebiParser.OParen);
        this.state = 221;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(((((_la - 29)) & ~0x1f) == 0 && ((1 << (_la - 29)) & ((1 << (WebiParser.Number - 29)) | (1 << (WebiParser.String - 29)) | (1 << (WebiParser.List - 29)) | (1 << (WebiParser.Boolean - 29)) | (1 << (WebiParser.Image - 29)) | (1 << (WebiParser.Json - 29)))) !== 0)) {
            this.state = 220;
            this.idList();
        }

        this.state = 223;
        this.match(WebiParser.CParen);
        this.state = 224;
        this.block();
        this.state = 225;
        this.match(WebiParser.End);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ClassDeclContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = WebiParser.RULE_classDecl;
    return this;
}

ClassDeclContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ClassDeclContext.prototype.constructor = ClassDeclContext;

ClassDeclContext.prototype.Class = function() {
    return this.getToken(WebiParser.Class, 0);
};

ClassDeclContext.prototype.Identifier = function() {
    return this.getToken(WebiParser.Identifier, 0);
};

ClassDeclContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

ClassDeclContext.prototype.End = function() {
    return this.getToken(WebiParser.End, 0);
};

ClassDeclContext.prototype.idList = function() {
    return this.getTypedRuleContext(IdListContext,0);
};

ClassDeclContext.prototype.enterRule = function(listener) {
    if(listener instanceof WebiListener ) {
        listener.enterClassDecl(this);
	}
};

ClassDeclContext.prototype.exitRule = function(listener) {
    if(listener instanceof WebiListener ) {
        listener.exitClassDecl(this);
	}
};

ClassDeclContext.prototype.accept = function(visitor) {
    if ( visitor instanceof WebiVisitor ) {
        return visitor.visitClassDecl(this);
    } else {
        return visitor.visitChildren(this);
    }
};




WebiParser.ClassDeclContext = ClassDeclContext;

WebiParser.prototype.classDecl = function() {

    var localctx = new ClassDeclContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, WebiParser.RULE_classDecl);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 227;
        this.match(WebiParser.Class);
        this.state = 228;
        this.match(WebiParser.Identifier);
        this.state = 229;
        this.match(WebiParser.OParen);
        this.state = 231;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(((((_la - 29)) & ~0x1f) == 0 && ((1 << (_la - 29)) & ((1 << (WebiParser.Number - 29)) | (1 << (WebiParser.String - 29)) | (1 << (WebiParser.List - 29)) | (1 << (WebiParser.Boolean - 29)) | (1 << (WebiParser.Image - 29)) | (1 << (WebiParser.Json - 29)))) !== 0)) {
            this.state = 230;
            this.idList();
        }

        this.state = 233;
        this.match(WebiParser.CParen);
        this.state = 234;
        this.block();
        this.state = 235;
        this.match(WebiParser.End);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ForStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = WebiParser.RULE_forStatement;
    return this;
}

ForStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ForStatementContext.prototype.constructor = ForStatementContext;

ForStatementContext.prototype.For = function() {
    return this.getToken(WebiParser.For, 0);
};

ForStatementContext.prototype.Identifier = function() {
    return this.getToken(WebiParser.Identifier, 0);
};

ForStatementContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

ForStatementContext.prototype.To = function() {
    return this.getToken(WebiParser.To, 0);
};

ForStatementContext.prototype.Do = function() {
    return this.getToken(WebiParser.Do, 0);
};

ForStatementContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

ForStatementContext.prototype.End = function() {
    return this.getToken(WebiParser.End, 0);
};

ForStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof WebiListener ) {
        listener.enterForStatement(this);
	}
};

ForStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof WebiListener ) {
        listener.exitForStatement(this);
	}
};

ForStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof WebiVisitor ) {
        return visitor.visitForStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




WebiParser.ForStatementContext = ForStatementContext;

WebiParser.prototype.forStatement = function() {

    var localctx = new ForStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, WebiParser.RULE_forStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 237;
        this.match(WebiParser.For);
        this.state = 238;
        this.match(WebiParser.Identifier);
        this.state = 239;
        this.match(WebiParser.Assign);
        this.state = 240;
        this.expression(0);
        this.state = 241;
        this.match(WebiParser.To);
        this.state = 242;
        this.expression(0);
        this.state = 243;
        this.match(WebiParser.Do);
        this.state = 244;
        this.block();
        this.state = 245;
        this.match(WebiParser.End);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function WhileStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = WebiParser.RULE_whileStatement;
    return this;
}

WhileStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
WhileStatementContext.prototype.constructor = WhileStatementContext;

WhileStatementContext.prototype.While = function() {
    return this.getToken(WebiParser.While, 0);
};

WhileStatementContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

WhileStatementContext.prototype.Do = function() {
    return this.getToken(WebiParser.Do, 0);
};

WhileStatementContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

WhileStatementContext.prototype.End = function() {
    return this.getToken(WebiParser.End, 0);
};

WhileStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof WebiListener ) {
        listener.enterWhileStatement(this);
	}
};

WhileStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof WebiListener ) {
        listener.exitWhileStatement(this);
	}
};

WhileStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof WebiVisitor ) {
        return visitor.visitWhileStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




WebiParser.WhileStatementContext = WhileStatementContext;

WebiParser.prototype.whileStatement = function() {

    var localctx = new WhileStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, WebiParser.RULE_whileStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 247;
        this.match(WebiParser.While);
        this.state = 248;
        this.expression(0);
        this.state = 249;
        this.match(WebiParser.Do);
        this.state = 250;
        this.block();
        this.state = 251;
        this.match(WebiParser.End);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function IdListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = WebiParser.RULE_idList;
    return this;
}

IdListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IdListContext.prototype.constructor = IdListContext;

IdListContext.prototype.typeType = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(TypeTypeContext);
    } else {
        return this.getTypedRuleContext(TypeTypeContext,i);
    }
};

IdListContext.prototype.Identifier = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(WebiParser.Identifier);
    } else {
        return this.getToken(WebiParser.Identifier, i);
    }
};


IdListContext.prototype.enterRule = function(listener) {
    if(listener instanceof WebiListener ) {
        listener.enterIdList(this);
	}
};

IdListContext.prototype.exitRule = function(listener) {
    if(listener instanceof WebiListener ) {
        listener.exitIdList(this);
	}
};

IdListContext.prototype.accept = function(visitor) {
    if ( visitor instanceof WebiVisitor ) {
        return visitor.visitIdList(this);
    } else {
        return visitor.visitChildren(this);
    }
};




WebiParser.IdListContext = IdListContext;

WebiParser.prototype.idList = function() {

    var localctx = new IdListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, WebiParser.RULE_idList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 253;
        this.typeType();
        this.state = 254;
        this.match(WebiParser.Identifier);
        this.state = 261;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===WebiParser.Comma) {
            this.state = 255;
            this.match(WebiParser.Comma);
            this.state = 256;
            this.typeType();
            this.state = 257;
            this.match(WebiParser.Identifier);
            this.state = 263;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExprListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = WebiParser.RULE_exprList;
    return this;
}

ExprListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprListContext.prototype.constructor = ExprListContext;

ExprListContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

ExprListContext.prototype.enterRule = function(listener) {
    if(listener instanceof WebiListener ) {
        listener.enterExprList(this);
	}
};

ExprListContext.prototype.exitRule = function(listener) {
    if(listener instanceof WebiListener ) {
        listener.exitExprList(this);
	}
};

ExprListContext.prototype.accept = function(visitor) {
    if ( visitor instanceof WebiVisitor ) {
        return visitor.visitExprList(this);
    } else {
        return visitor.visitChildren(this);
    }
};




WebiParser.ExprListContext = ExprListContext;

WebiParser.prototype.exprList = function() {

    var localctx = new ExprListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, WebiParser.RULE_exprList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 264;
        this.expression(0);
        this.state = 269;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===WebiParser.Comma) {
            this.state = 265;
            this.match(WebiParser.Comma);
            this.state = 266;
            this.expression(0);
            this.state = 271;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = WebiParser.RULE_expression;
    return this;
}

ExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionContext.prototype.constructor = ExpressionContext;


 
ExpressionContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function BoolExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

BoolExpressionContext.prototype = Object.create(ExpressionContext.prototype);
BoolExpressionContext.prototype.constructor = BoolExpressionContext;

WebiParser.BoolExpressionContext = BoolExpressionContext;

BoolExpressionContext.prototype.BoolVar = function() {
    return this.getToken(WebiParser.BoolVar, 0);
};
BoolExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof WebiListener ) {
        listener.enterBoolExpression(this);
	}
};

BoolExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof WebiListener ) {
        listener.exitBoolExpression(this);
	}
};

BoolExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof WebiVisitor ) {
        return visitor.visitBoolExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function NumberExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NumberExpressionContext.prototype = Object.create(ExpressionContext.prototype);
NumberExpressionContext.prototype.constructor = NumberExpressionContext;

WebiParser.NumberExpressionContext = NumberExpressionContext;

NumberExpressionContext.prototype.NumberVar = function() {
    return this.getToken(WebiParser.NumberVar, 0);
};
NumberExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof WebiListener ) {
        listener.enterNumberExpression(this);
	}
};

NumberExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof WebiListener ) {
        listener.exitNumberExpression(this);
	}
};

NumberExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof WebiVisitor ) {
        return visitor.visitNumberExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function IdentifierExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

IdentifierExpressionContext.prototype = Object.create(ExpressionContext.prototype);
IdentifierExpressionContext.prototype.constructor = IdentifierExpressionContext;

WebiParser.IdentifierExpressionContext = IdentifierExpressionContext;

IdentifierExpressionContext.prototype.Identifier = function() {
    return this.getToken(WebiParser.Identifier, 0);
};

IdentifierExpressionContext.prototype.indexes = function() {
    return this.getTypedRuleContext(IndexesContext,0);
};
IdentifierExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof WebiListener ) {
        listener.enterIdentifierExpression(this);
	}
};

IdentifierExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof WebiListener ) {
        listener.exitIdentifierExpression(this);
	}
};

IdentifierExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof WebiVisitor ) {
        return visitor.visitIdentifierExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function NotExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NotExpressionContext.prototype = Object.create(ExpressionContext.prototype);
NotExpressionContext.prototype.constructor = NotExpressionContext;

WebiParser.NotExpressionContext = NotExpressionContext;

NotExpressionContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
NotExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof WebiListener ) {
        listener.enterNotExpression(this);
	}
};

NotExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof WebiListener ) {
        listener.exitNotExpression(this);
	}
};

NotExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof WebiVisitor ) {
        return visitor.visitNotExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function OrExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

OrExpressionContext.prototype = Object.create(ExpressionContext.prototype);
OrExpressionContext.prototype.constructor = OrExpressionContext;

WebiParser.OrExpressionContext = OrExpressionContext;

OrExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
OrExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof WebiListener ) {
        listener.enterOrExpression(this);
	}
};

OrExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof WebiListener ) {
        listener.exitOrExpression(this);
	}
};

OrExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof WebiVisitor ) {
        return visitor.visitOrExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function UnaryMinusExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

UnaryMinusExpressionContext.prototype = Object.create(ExpressionContext.prototype);
UnaryMinusExpressionContext.prototype.constructor = UnaryMinusExpressionContext;

WebiParser.UnaryMinusExpressionContext = UnaryMinusExpressionContext;

UnaryMinusExpressionContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
UnaryMinusExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof WebiListener ) {
        listener.enterUnaryMinusExpression(this);
	}
};

UnaryMinusExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof WebiListener ) {
        listener.exitUnaryMinusExpression(this);
	}
};

UnaryMinusExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof WebiVisitor ) {
        return visitor.visitUnaryMinusExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function PowerExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PowerExpressionContext.prototype = Object.create(ExpressionContext.prototype);
PowerExpressionContext.prototype.constructor = PowerExpressionContext;

WebiParser.PowerExpressionContext = PowerExpressionContext;

PowerExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
PowerExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof WebiListener ) {
        listener.enterPowerExpression(this);
	}
};

PowerExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof WebiListener ) {
        listener.exitPowerExpression(this);
	}
};

PowerExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof WebiVisitor ) {
        return visitor.visitPowerExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function EqExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    this.op = null; // Token;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

EqExpressionContext.prototype = Object.create(ExpressionContext.prototype);
EqExpressionContext.prototype.constructor = EqExpressionContext;

WebiParser.EqExpressionContext = EqExpressionContext;

EqExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
EqExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof WebiListener ) {
        listener.enterEqExpression(this);
	}
};

EqExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof WebiListener ) {
        listener.exitEqExpression(this);
	}
};

EqExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof WebiVisitor ) {
        return visitor.visitEqExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function AndExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AndExpressionContext.prototype = Object.create(ExpressionContext.prototype);
AndExpressionContext.prototype.constructor = AndExpressionContext;

WebiParser.AndExpressionContext = AndExpressionContext;

AndExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
AndExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof WebiListener ) {
        listener.enterAndExpression(this);
	}
};

AndExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof WebiListener ) {
        listener.exitAndExpression(this);
	}
};

AndExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof WebiVisitor ) {
        return visitor.visitAndExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function InExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

InExpressionContext.prototype = Object.create(ExpressionContext.prototype);
InExpressionContext.prototype.constructor = InExpressionContext;

WebiParser.InExpressionContext = InExpressionContext;

InExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

InExpressionContext.prototype.In = function() {
    return this.getToken(WebiParser.In, 0);
};
InExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof WebiListener ) {
        listener.enterInExpression(this);
	}
};

InExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof WebiListener ) {
        listener.exitInExpression(this);
	}
};

InExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof WebiVisitor ) {
        return visitor.visitInExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function StringExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

StringExpressionContext.prototype = Object.create(ExpressionContext.prototype);
StringExpressionContext.prototype.constructor = StringExpressionContext;

WebiParser.StringExpressionContext = StringExpressionContext;

StringExpressionContext.prototype.StringVar = function() {
    return this.getToken(WebiParser.StringVar, 0);
};

StringExpressionContext.prototype.indexes = function() {
    return this.getTypedRuleContext(IndexesContext,0);
};
StringExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof WebiListener ) {
        listener.enterStringExpression(this);
	}
};

StringExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof WebiListener ) {
        listener.exitStringExpression(this);
	}
};

StringExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof WebiVisitor ) {
        return visitor.visitStringExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ExpressionExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ExpressionExpressionContext.prototype = Object.create(ExpressionContext.prototype);
ExpressionExpressionContext.prototype.constructor = ExpressionExpressionContext;

WebiParser.ExpressionExpressionContext = ExpressionExpressionContext;

ExpressionExpressionContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

ExpressionExpressionContext.prototype.indexes = function() {
    return this.getTypedRuleContext(IndexesContext,0);
};
ExpressionExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof WebiListener ) {
        listener.enterExpressionExpression(this);
	}
};

ExpressionExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof WebiListener ) {
        listener.exitExpressionExpression(this);
	}
};

ExpressionExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof WebiVisitor ) {
        return visitor.visitExpressionExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function AddExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    this.op = null; // Token;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AddExpressionContext.prototype = Object.create(ExpressionContext.prototype);
AddExpressionContext.prototype.constructor = AddExpressionContext;

WebiParser.AddExpressionContext = AddExpressionContext;

AddExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
AddExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof WebiListener ) {
        listener.enterAddExpression(this);
	}
};

AddExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof WebiListener ) {
        listener.exitAddExpression(this);
	}
};

AddExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof WebiVisitor ) {
        return visitor.visitAddExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function CompExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    this.op = null; // Token;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

CompExpressionContext.prototype = Object.create(ExpressionContext.prototype);
CompExpressionContext.prototype.constructor = CompExpressionContext;

WebiParser.CompExpressionContext = CompExpressionContext;

CompExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
CompExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof WebiListener ) {
        listener.enterCompExpression(this);
	}
};

CompExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof WebiListener ) {
        listener.exitCompExpression(this);
	}
};

CompExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof WebiVisitor ) {
        return visitor.visitCompExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function NullExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NullExpressionContext.prototype = Object.create(ExpressionContext.prototype);
NullExpressionContext.prototype.constructor = NullExpressionContext;

WebiParser.NullExpressionContext = NullExpressionContext;

NullExpressionContext.prototype.Null = function() {
    return this.getToken(WebiParser.Null, 0);
};
NullExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof WebiListener ) {
        listener.enterNullExpression(this);
	}
};

NullExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof WebiListener ) {
        listener.exitNullExpression(this);
	}
};

NullExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof WebiVisitor ) {
        return visitor.visitNullExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function JsonCallExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

JsonCallExpressionContext.prototype = Object.create(ExpressionContext.prototype);
JsonCallExpressionContext.prototype.constructor = JsonCallExpressionContext;

WebiParser.JsonCallExpressionContext = JsonCallExpressionContext;

JsonCallExpressionContext.prototype.jsonCall = function() {
    return this.getTypedRuleContext(JsonCallContext,0);
};
JsonCallExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof WebiListener ) {
        listener.enterJsonCallExpression(this);
	}
};

JsonCallExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof WebiListener ) {
        listener.exitJsonCallExpression(this);
	}
};

JsonCallExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof WebiVisitor ) {
        return visitor.visitJsonCallExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function FunctionCallExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

FunctionCallExpressionContext.prototype = Object.create(ExpressionContext.prototype);
FunctionCallExpressionContext.prototype.constructor = FunctionCallExpressionContext;

WebiParser.FunctionCallExpressionContext = FunctionCallExpressionContext;

FunctionCallExpressionContext.prototype.functionCall = function() {
    return this.getTypedRuleContext(FunctionCallContext,0);
};

FunctionCallExpressionContext.prototype.indexes = function() {
    return this.getTypedRuleContext(IndexesContext,0);
};
FunctionCallExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof WebiListener ) {
        listener.enterFunctionCallExpression(this);
	}
};

FunctionCallExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof WebiListener ) {
        listener.exitFunctionCallExpression(this);
	}
};

FunctionCallExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof WebiVisitor ) {
        return visitor.visitFunctionCallExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function MultExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    this.op = null; // Token;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MultExpressionContext.prototype = Object.create(ExpressionContext.prototype);
MultExpressionContext.prototype.constructor = MultExpressionContext;

WebiParser.MultExpressionContext = MultExpressionContext;

MultExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
MultExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof WebiListener ) {
        listener.enterMultExpression(this);
	}
};

MultExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof WebiListener ) {
        listener.exitMultExpression(this);
	}
};

MultExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof WebiVisitor ) {
        return visitor.visitMultExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ListExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ListExpressionContext.prototype = Object.create(ExpressionContext.prototype);
ListExpressionContext.prototype.constructor = ListExpressionContext;

WebiParser.ListExpressionContext = ListExpressionContext;

ListExpressionContext.prototype.list = function() {
    return this.getTypedRuleContext(ListContext,0);
};

ListExpressionContext.prototype.indexes = function() {
    return this.getTypedRuleContext(IndexesContext,0);
};
ListExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof WebiListener ) {
        listener.enterListExpression(this);
	}
};

ListExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof WebiListener ) {
        listener.exitListExpression(this);
	}
};

ListExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof WebiVisitor ) {
        return visitor.visitListExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function TernaryExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

TernaryExpressionContext.prototype = Object.create(ExpressionContext.prototype);
TernaryExpressionContext.prototype.constructor = TernaryExpressionContext;

WebiParser.TernaryExpressionContext = TernaryExpressionContext;

TernaryExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
TernaryExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof WebiListener ) {
        listener.enterTernaryExpression(this);
	}
};

TernaryExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof WebiListener ) {
        listener.exitTernaryExpression(this);
	}
};

TernaryExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof WebiVisitor ) {
        return visitor.visitTernaryExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function InputExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

InputExpressionContext.prototype = Object.create(ExpressionContext.prototype);
InputExpressionContext.prototype.constructor = InputExpressionContext;

WebiParser.InputExpressionContext = InputExpressionContext;

InputExpressionContext.prototype.Input = function() {
    return this.getToken(WebiParser.Input, 0);
};

InputExpressionContext.prototype.StringVar = function() {
    return this.getToken(WebiParser.StringVar, 0);
};
InputExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof WebiListener ) {
        listener.enterInputExpression(this);
	}
};

InputExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof WebiListener ) {
        listener.exitInputExpression(this);
	}
};

InputExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof WebiVisitor ) {
        return visitor.visitInputExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};



WebiParser.prototype.expression = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExpressionContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 32;
    this.enterRecursionRule(localctx, 32, WebiParser.RULE_expression, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 309;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,25,this._ctx);
        switch(la_) {
        case 1:
            localctx = new UnaryMinusExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 273;
            this.match(WebiParser.Subtract);
            this.state = 274;
            this.expression(21);
            break;

        case 2:
            localctx = new NotExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 275;
            this.match(WebiParser.Excl);
            this.state = 276;
            this.expression(20);
            break;

        case 3:
            localctx = new NumberExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 277;
            this.match(WebiParser.NumberVar);
            break;

        case 4:
            localctx = new BoolExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 278;
            this.match(WebiParser.BoolVar);
            break;

        case 5:
            localctx = new NullExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 279;
            this.match(WebiParser.Null);
            break;

        case 6:
            localctx = new FunctionCallExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 280;
            this.functionCall();
            this.state = 282;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,19,this._ctx);
            if(la_===1) {
                this.state = 281;
                this.indexes();

            }
            break;

        case 7:
            localctx = new ListExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 284;
            this.list();
            this.state = 286;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,20,this._ctx);
            if(la_===1) {
                this.state = 285;
                this.indexes();

            }
            break;

        case 8:
            localctx = new JsonCallExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 288;
            this.jsonCall();
            break;

        case 9:
            localctx = new IdentifierExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 289;
            this.match(WebiParser.Identifier);
            this.state = 291;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,21,this._ctx);
            if(la_===1) {
                this.state = 290;
                this.indexes();

            }
            break;

        case 10:
            localctx = new StringExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 293;
            this.match(WebiParser.StringVar);
            this.state = 295;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,22,this._ctx);
            if(la_===1) {
                this.state = 294;
                this.indexes();

            }
            break;

        case 11:
            localctx = new ExpressionExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 297;
            this.match(WebiParser.OParen);
            this.state = 298;
            this.expression(0);
            this.state = 299;
            this.match(WebiParser.CParen);
            this.state = 301;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,23,this._ctx);
            if(la_===1) {
                this.state = 300;
                this.indexes();

            }
            break;

        case 12:
            localctx = new InputExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 303;
            this.match(WebiParser.Input);
            this.state = 304;
            this.match(WebiParser.OParen);
            this.state = 306;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===WebiParser.StringVar) {
                this.state = 305;
                this.match(WebiParser.StringVar);
            }

            this.state = 308;
            this.match(WebiParser.CParen);
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 343;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,27,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 341;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,26,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new PowerExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, WebiParser.RULE_expression);
                    this.state = 311;
                    if (!( this.precpred(this._ctx, 19))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 19)");
                    }
                    this.state = 312;
                    this.match(WebiParser.Pow);
                    this.state = 313;
                    this.expression(19);
                    break;

                case 2:
                    localctx = new MultExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, WebiParser.RULE_expression);
                    this.state = 314;
                    if (!( this.precpred(this._ctx, 18))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 18)");
                    }
                    this.state = 315;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(((((_la - 53)) & ~0x1f) == 0 && ((1 << (_la - 53)) & ((1 << (WebiParser.Multiply - 53)) | (1 << (WebiParser.Divide - 53)) | (1 << (WebiParser.Modulus - 53)))) !== 0))) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 316;
                    this.expression(19);
                    break;

                case 3:
                    localctx = new AddExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, WebiParser.RULE_expression);
                    this.state = 317;
                    if (!( this.precpred(this._ctx, 17))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 17)");
                    }
                    this.state = 318;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===WebiParser.Add || _la===WebiParser.Subtract)) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 319;
                    this.expression(18);
                    break;

                case 4:
                    localctx = new CompExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, WebiParser.RULE_expression);
                    this.state = 320;
                    if (!( this.precpred(this._ctx, 16))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 16)");
                    }
                    this.state = 321;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(((((_la - 45)) & ~0x1f) == 0 && ((1 << (_la - 45)) & ((1 << (WebiParser.GTEquals - 45)) | (1 << (WebiParser.LTEquals - 45)) | (1 << (WebiParser.GT - 45)) | (1 << (WebiParser.LT - 45)))) !== 0))) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 322;
                    this.expression(17);
                    break;

                case 5:
                    localctx = new EqExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, WebiParser.RULE_expression);
                    this.state = 323;
                    if (!( this.precpred(this._ctx, 15))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 15)");
                    }
                    this.state = 324;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===WebiParser.Equals || _la===WebiParser.NEquals)) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 325;
                    this.expression(16);
                    break;

                case 6:
                    localctx = new AndExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, WebiParser.RULE_expression);
                    this.state = 326;
                    if (!( this.precpred(this._ctx, 14))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 14)");
                    }
                    this.state = 327;
                    this.match(WebiParser.And);
                    this.state = 328;
                    this.expression(15);
                    break;

                case 7:
                    localctx = new OrExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, WebiParser.RULE_expression);
                    this.state = 329;
                    if (!( this.precpred(this._ctx, 13))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 13)");
                    }
                    this.state = 330;
                    this.match(WebiParser.Or);
                    this.state = 331;
                    this.expression(14);
                    break;

                case 8:
                    localctx = new TernaryExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, WebiParser.RULE_expression);
                    this.state = 332;
                    if (!( this.precpred(this._ctx, 12))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
                    }
                    this.state = 333;
                    this.match(WebiParser.QMark);
                    this.state = 334;
                    this.expression(0);
                    this.state = 335;
                    this.match(WebiParser.Colon);
                    this.state = 336;
                    this.expression(13);
                    break;

                case 9:
                    localctx = new InExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, WebiParser.RULE_expression);
                    this.state = 338;
                    if (!( this.precpred(this._ctx, 11))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
                    }
                    this.state = 339;
                    this.match(WebiParser.In);
                    this.state = 340;
                    this.expression(12);
                    break;

                } 
            }
            this.state = 345;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,27,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function ListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = WebiParser.RULE_list;
    return this;
}

ListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ListContext.prototype.constructor = ListContext;

ListContext.prototype.exprList = function() {
    return this.getTypedRuleContext(ExprListContext,0);
};

ListContext.prototype.enterRule = function(listener) {
    if(listener instanceof WebiListener ) {
        listener.enterList(this);
	}
};

ListContext.prototype.exitRule = function(listener) {
    if(listener instanceof WebiListener ) {
        listener.exitList(this);
	}
};

ListContext.prototype.accept = function(visitor) {
    if ( visitor instanceof WebiVisitor ) {
        return visitor.visitList(this);
    } else {
        return visitor.visitChildren(this);
    }
};




WebiParser.ListContext = ListContext;

WebiParser.prototype.list = function() {

    var localctx = new ListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, WebiParser.RULE_list);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 346;
        this.match(WebiParser.OBracket);
        this.state = 348;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << WebiParser.T__1) | (1 << WebiParser.T__2) | (1 << WebiParser.T__3) | (1 << WebiParser.T__4) | (1 << WebiParser.T__5) | (1 << WebiParser.T__6) | (1 << WebiParser.T__7) | (1 << WebiParser.T__8) | (1 << WebiParser.T__9) | (1 << WebiParser.T__10) | (1 << WebiParser.T__11) | (1 << WebiParser.Println) | (1 << WebiParser.Print) | (1 << WebiParser.Input) | (1 << WebiParser.Assert) | (1 << WebiParser.Size) | (1 << WebiParser.Null))) !== 0) || ((((_la - 36)) & ~0x1f) == 0 && ((1 << (_la - 36)) & ((1 << (WebiParser.New - 36)) | (1 << (WebiParser.Excl - 36)) | (1 << (WebiParser.Subtract - 36)) | (1 << (WebiParser.OBracket - 36)) | (1 << (WebiParser.OParen - 36)) | (1 << (WebiParser.BoolVar - 36)))) !== 0) || ((((_la - 68)) & ~0x1f) == 0 && ((1 << (_la - 68)) & ((1 << (WebiParser.NumberVar - 68)) | (1 << (WebiParser.Identifier - 68)) | (1 << (WebiParser.StringVar - 68)))) !== 0)) {
            this.state = 347;
            this.exprList();
        }

        this.state = 350;
        this.match(WebiParser.CBracket);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function JsonInitContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = WebiParser.RULE_jsonInit;
    return this;
}

JsonInitContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
JsonInitContext.prototype.constructor = JsonInitContext;

JsonInitContext.prototype.objValues = function() {
    return this.getTypedRuleContext(ObjValuesContext,0);
};

JsonInitContext.prototype.enterRule = function(listener) {
    if(listener instanceof WebiListener ) {
        listener.enterJsonInit(this);
	}
};

JsonInitContext.prototype.exitRule = function(listener) {
    if(listener instanceof WebiListener ) {
        listener.exitJsonInit(this);
	}
};

JsonInitContext.prototype.accept = function(visitor) {
    if ( visitor instanceof WebiVisitor ) {
        return visitor.visitJsonInit(this);
    } else {
        return visitor.visitChildren(this);
    }
};




WebiParser.JsonInitContext = JsonInitContext;

WebiParser.prototype.jsonInit = function() {

    var localctx = new JsonInitContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, WebiParser.RULE_jsonInit);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 352;
        this.match(WebiParser.OBrace);
        this.state = 354;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===WebiParser.StringVar) {
            this.state = 353;
            this.objValues();
        }

        this.state = 356;
        this.match(WebiParser.CBrace);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ImageInitContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = WebiParser.RULE_imageInit;
    return this;
}

ImageInitContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ImageInitContext.prototype.constructor = ImageInitContext;

ImageInitContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

ImageInitContext.prototype.enterRule = function(listener) {
    if(listener instanceof WebiListener ) {
        listener.enterImageInit(this);
	}
};

ImageInitContext.prototype.exitRule = function(listener) {
    if(listener instanceof WebiListener ) {
        listener.exitImageInit(this);
	}
};

ImageInitContext.prototype.accept = function(visitor) {
    if ( visitor instanceof WebiVisitor ) {
        return visitor.visitImageInit(this);
    } else {
        return visitor.visitChildren(this);
    }
};




WebiParser.ImageInitContext = ImageInitContext;

WebiParser.prototype.imageInit = function() {

    var localctx = new ImageInitContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, WebiParser.RULE_imageInit);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 358;
        this.match(WebiParser.T__10);
        this.state = 359;
        this.match(WebiParser.OParen);
        this.state = 360;
        this.expression(0);
        this.state = 361;
        this.match(WebiParser.Comma);
        this.state = 362;
        this.expression(0);
        this.state = 363;
        this.match(WebiParser.Comma);
        this.state = 364;
        this.expression(0);
        this.state = 365;
        this.match(WebiParser.CParen);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ButtonInitContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = WebiParser.RULE_buttonInit;
    return this;
}

ButtonInitContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ButtonInitContext.prototype.constructor = ButtonInitContext;

ButtonInitContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

ButtonInitContext.prototype.enterRule = function(listener) {
    if(listener instanceof WebiListener ) {
        listener.enterButtonInit(this);
	}
};

ButtonInitContext.prototype.exitRule = function(listener) {
    if(listener instanceof WebiListener ) {
        listener.exitButtonInit(this);
	}
};

ButtonInitContext.prototype.accept = function(visitor) {
    if ( visitor instanceof WebiVisitor ) {
        return visitor.visitButtonInit(this);
    } else {
        return visitor.visitChildren(this);
    }
};




WebiParser.ButtonInitContext = ButtonInitContext;

WebiParser.prototype.buttonInit = function() {

    var localctx = new ButtonInitContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, WebiParser.RULE_buttonInit);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 367;
        this.match(WebiParser.T__11);
        this.state = 368;
        this.match(WebiParser.OParen);
        this.state = 369;
        this.expression(0);
        this.state = 370;
        this.match(WebiParser.Comma);
        this.state = 371;
        this.expression(0);
        this.state = 372;
        this.match(WebiParser.Comma);
        this.state = 373;
        this.expression(0);
        this.state = 378;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===WebiParser.Comma) {
            this.state = 374;
            this.match(WebiParser.Comma);
            this.state = 375;
            this.expression(0);
            this.state = 380;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 381;
        this.match(WebiParser.CParen);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function JsonCallContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = WebiParser.RULE_jsonCall;
    return this;
}

JsonCallContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
JsonCallContext.prototype.constructor = JsonCallContext;

JsonCallContext.prototype.Identifier = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(WebiParser.Identifier);
    } else {
        return this.getToken(WebiParser.Identifier, i);
    }
};


JsonCallContext.prototype.enterRule = function(listener) {
    if(listener instanceof WebiListener ) {
        listener.enterJsonCall(this);
	}
};

JsonCallContext.prototype.exitRule = function(listener) {
    if(listener instanceof WebiListener ) {
        listener.exitJsonCall(this);
	}
};

JsonCallContext.prototype.accept = function(visitor) {
    if ( visitor instanceof WebiVisitor ) {
        return visitor.visitJsonCall(this);
    } else {
        return visitor.visitChildren(this);
    }
};




WebiParser.JsonCallContext = JsonCallContext;

WebiParser.prototype.jsonCall = function() {

    var localctx = new JsonCallContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, WebiParser.RULE_jsonCall);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 383;
        this.match(WebiParser.Identifier);
        this.state = 384;
        this.match(WebiParser.T__0);
        this.state = 385;
        this.match(WebiParser.Identifier);
        this.state = 390;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,31,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 386;
                this.match(WebiParser.T__0);
                this.state = 387;
                this.match(WebiParser.Identifier); 
            }
            this.state = 392;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,31,this._ctx);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ObjValuesContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = WebiParser.RULE_objValues;
    return this;
}

ObjValuesContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ObjValuesContext.prototype.constructor = ObjValuesContext;

ObjValuesContext.prototype.StringVar = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(WebiParser.StringVar);
    } else {
        return this.getToken(WebiParser.StringVar, i);
    }
};


ObjValuesContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

ObjValuesContext.prototype.enterRule = function(listener) {
    if(listener instanceof WebiListener ) {
        listener.enterObjValues(this);
	}
};

ObjValuesContext.prototype.exitRule = function(listener) {
    if(listener instanceof WebiListener ) {
        listener.exitObjValues(this);
	}
};

ObjValuesContext.prototype.accept = function(visitor) {
    if ( visitor instanceof WebiVisitor ) {
        return visitor.visitObjValues(this);
    } else {
        return visitor.visitChildren(this);
    }
};




WebiParser.ObjValuesContext = ObjValuesContext;

WebiParser.prototype.objValues = function() {

    var localctx = new ObjValuesContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, WebiParser.RULE_objValues);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 393;
        this.match(WebiParser.StringVar);
        this.state = 394;
        this.match(WebiParser.Colon);
        this.state = 395;
        this.expression(0);
        this.state = 402;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===WebiParser.Comma) {
            this.state = 396;
            this.match(WebiParser.Comma);
            this.state = 397;
            this.match(WebiParser.StringVar);
            this.state = 398;
            this.match(WebiParser.Colon);
            this.state = 399;
            this.expression(0);
            this.state = 404;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function IndexesContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = WebiParser.RULE_indexes;
    return this;
}

IndexesContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IndexesContext.prototype.constructor = IndexesContext;

IndexesContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

IndexesContext.prototype.enterRule = function(listener) {
    if(listener instanceof WebiListener ) {
        listener.enterIndexes(this);
	}
};

IndexesContext.prototype.exitRule = function(listener) {
    if(listener instanceof WebiListener ) {
        listener.exitIndexes(this);
	}
};

IndexesContext.prototype.accept = function(visitor) {
    if ( visitor instanceof WebiVisitor ) {
        return visitor.visitIndexes(this);
    } else {
        return visitor.visitChildren(this);
    }
};




WebiParser.IndexesContext = IndexesContext;

WebiParser.prototype.indexes = function() {

    var localctx = new IndexesContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, WebiParser.RULE_indexes);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 409; 
        this._errHandler.sync(this);
        var _alt = 1;
        do {
        	switch (_alt) {
        	case 1:
        		this.state = 405;
        		this.match(WebiParser.OBracket);
        		this.state = 406;
        		this.expression(0);
        		this.state = 407;
        		this.match(WebiParser.CBracket);
        		break;
        	default:
        		throw new antlr4.error.NoViableAltException(this);
        	}
        	this.state = 411; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,33, this._ctx);
        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


WebiParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 16:
			return this.expression_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

WebiParser.prototype.expression_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 19);
		case 1:
			return this.precpred(this._ctx, 18);
		case 2:
			return this.precpred(this._ctx, 17);
		case 3:
			return this.precpred(this._ctx, 16);
		case 4:
			return this.precpred(this._ctx, 15);
		case 5:
			return this.precpred(this._ctx, 14);
		case 6:
			return this.precpred(this._ctx, 13);
		case 7:
			return this.precpred(this._ctx, 12);
		case 8:
			return this.precpred(this._ctx, 11);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.WebiParser = WebiParser;
