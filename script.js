var translatebtn = document.querySelector('#transbtn');
var textInput = document.querySelector('#text_area');
var transOutput = document.querySelector('#output');

InputString = textInput.value.replace(" ", "%20");

// var transUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
var transUrl = "http://api.funtranslations.com/translate/gungan";


var reqUrl = transUrl + '?text=' + InputString;
// var reqUrl = transUrl + '?text=' + 'i%20am%20gaurav';


function errorHandler(){
    alert("Error in connection !");
}

function consoleText(){
    // console.log("hi", textInput.value);
    // transOutput.innerText = textInput.value;
    fetch(reqUrl).then(resp => resp.json()).then(newjson => (transOutput.innerText = newjson.contents.translated));
    // fetch(reqUrl)
    // .then(resp => resp.json())
    // .then(newjson => console.log(newjson.contents.translated));

}

translatebtn.addEventListener("click", consoleText);