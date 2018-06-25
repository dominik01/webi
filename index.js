var buildAst = require('./build-ast');
var socket = io('http://kempelen.ii.fmph.uniba.sk', {path: '/webi/socket.io'});

document.getElementById("submit-btn").addEventListener("click", function(){
    var inputText = editor.getValue();
    document.getElementById("result").innerHTML = '';
    socket.emit('message',{"cmd":"send-source","source":editor.getValue()});
    runScript(inputText);
});

function runScript(inputText) {
    buildAst(inputText);
}

socket.on('message', function(data) {
    var cmd = data.cmd;
    switch (cmd){
        case "source":
            editor.setValue(data.source);
            var btn = document.getElementById('submit-btn').click();
    }
});



module.exports = runScript;