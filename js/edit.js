var textArea = document.getElementById("proverb");
var style = window.getComputedStyle(textArea, null);
var fontSize = parseFloat(style.fontSize);
var height = parseInt(style.height);

function size(event, type){
    event.preventDefault();

    if(type === 'up')
        fontSize++;
    else
        fontSize--;

    textArea.style.fontSize = fontSize + 'px';
}

function textAlign(type) {
    textArea.style.textAlign = type;
}

function expand() {
    height+=20;

    textArea.style.height = height + "px";
}