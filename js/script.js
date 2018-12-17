var count = 0;

function addResult(){
	var inputBoxValue = document.getElementById('inputBox').value;
	count = Number(count) + Number(inputBoxValue);
  updateDisplay();
}

function subtractResult(){
	var inputBoxValue = document.getElementById('inputBox').value;
	count = Number(count) - Number(inputBoxValue);
  updateDisplay();
}

function updateDisplay(){
  // Set the text of the result to display in the counterText
  document.getElementById('counterText').textContent = count;

  // BONUS: Updating the color
  if(count < 0){
    document.getElementById('counterText').style.color = "red";
  }
  else {
    document.getElementById('counterText').style.color = "black";
  }
}
