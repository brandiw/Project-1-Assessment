var resultText = document.getElementById('counterText').value;
var count = 0;
resultText = count;


document.addEventListener("DOMContentLoaded", function(){
console.log("Document Loaded");


	
	//disable the default submition
	var form = document.getElementById('counterForm')
	form.addEventListener("submit", function(e){
		e.preventDefault();

		var plus = document.getElementById("plus");
		var minus = document.getElementById("minus");

	});
})


function addResult(){
	var inputBoxValue = document.getElementById('inputBox').value;
	Number(resultText) + Number(inputBoxValue);
	console.log(inputBoxValue);
	
}

function subtractResult(){
	var inputBoxValue = document.getElementById('inputBox').value;
	resultText.innerHTML = Number(inputBoxValue) - Number(inputBoxValue);
	console.log(inputBoxValue);

}