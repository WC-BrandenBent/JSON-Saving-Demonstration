let textData = JSON.parse(localStorage.getItem("textData")) || [];

document.getElementById("saveJSON").addEventListener("click", function() {
  jsonHandler(textData);
});

document.getElementById("myForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let text = document.getElementById("textInput").value;

  document.getElementById("textInput").value = "";

  displayText(text);

  //   console.log(textData + typeof textData);

  addTextItem(text);
});

function displayText(text) {
  document
    .getElementById("textList")
    .appendChild(document.createTextNode(text));
}

function addTextItem(newText) {
  const newItem = {
    text: newText,
    complete: false
  };

  textData.push(newItem);
  localStorage.setItem("textData", JSON.stringify(textData));
}

function jsonHandler(jsonObject) {
  jsonString = JSON.stringify(jsonObject);

  const blob = new Blob([jsonString], { type: "application/json" }); // used for saving and opening files, fileSaver.js

  saveAs(blob, "data.json"); 
}
