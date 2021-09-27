// console.log("Shubham Tyagi");

var btn = document.querySelector("button");
// console.log(btn);
var txtArea = document.querySelector("textarea");
var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
var minionServerURL = "https://api.funtranslations.com/translate/minion.json"

function getProcesssedUrl(input) {
  return minionServerURL + "?text=" + input;
}

function errorHandler(error) {
  console.log("Oh error occured : " + error);
}

function clickHandler() {
  var inputText = txtArea.value;
  fetch(getProcesssedUrl(inputText)).then(response => response.json()).then(json => document.querySelector('.output-feild').innerHTML = json.contents.translated).catch(errorHandler);
}

btn.addEventListener('click', clickHandler);