var buildAst = require('./build-ast');

document.getElementById("submit-btn").addEventListener("click", function(){
    var inputText = editor.getValue();
    document.getElementById("result").innerHTML = '';
    runScript(inputText);
});

function runScript(inputText) {
    buildAst(inputText);
}


module.exports = runScript;