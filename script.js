var translatebtn = document.querySelector('#transbtn');
var textInput = document.querySelector('#text_area');
var transOutput = document.querySelector('#output');

// var transUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
var transUrl = "https://api.funtranslations.com/translate/minion.json";

var reqUrl = transUrl + '?text=' + textInput.value;

function constructURL(inputText) {
    var encodedURI = encodeURI(inputText);
    return `${transUrl}?text=${encodedURI}`;
}

function errorHandler(){
    alert("Error in connection !");
}

function consoleText(){
    var text = textInput.value;
    var finalURL = constructURL(text);
    console.log(finalURL)
    fetch(finalURL).then(resp => resp.json()).then(newjson => (transOutput.innerText = newjson.contents.translated)).catch(errorHandler);

}

translatebtn.addEventListener("click", consoleText);