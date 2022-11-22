
const createGridButton = document.getElementById("makeGrid"),
  inputText = document.getElementById("inputText"),
  title = document.getElementById("header"),
  gridContainer = document.getElementById("gridContainer"),
  clearButton = document.getElementById("clearButton");


let dimensions = 0;//the dimensions variable will be the dimension of your grid (how many boxes wide and high)
let mouseClickDown = false;

gridContainer.onmousedown = function(){ //these functions check if the mouse button is pressed down, then sets the boolean true if it is 
  mouseClickDown = true;
};
gridContainer.onmouseup = function(){
  mouseClickDown = false;
};

createGridButton.onclick = function() {
  clearGrid();
  gridContainer.id = "gridContainer";
  dimensions = promptForDimensions();
  if(isNaN(dimensions)){//if the value entered is not a number, throw an error
    alert("Error! Please enter a number.");
    inputText.value = null;
  }
  else if(dimensions < 0){//if the value entered is negative, throw an error
    alert("Error! Please enter a non-negative value.");
    inputText.value = null;
  }
  else if(dimensions > 100){//if the value entered is above 100, throw an error
    alert("Error! Please enter a value at or below 100.");
  }
  else{//otherwise, creates a row container that stores each box, then adds it to the grid container
    for(x = 0; x < dimensions; x++){//for each row of the grid
      const rowContainer = document.createElement("div");
      rowContainer.id = "rowContainer";
      gridContainer.appendChild(rowContainer);
      for(y = 0; y < dimensions; y++){//creates how ever many boxes the dimensions variable is set to
        createBox(rowContainer);
      }
    }
  }
}

clearButton.onclick = function() { //this clear button clears the sketch grid
  clearGrid();
}

function clearGrid() {
  while (gridContainer.firstChild){//while there is still a first child, remove it from the grid untill there are no more children
    gridContainer.removeChild(gridContainer.firstChild);
  }
}

function createBox(rowContainer){ //creates one box element for each row container
  const gridElement = document.createElement("div");
  gridElement.className = "gridElement";

  gridElement.addEventListener("mousedown", function(){
    gridElement.style.backgroundColor = "black";
  });
  gridElement.addEventListener("mouseenter", function() {
    if(mouseClickDown){
      gridElement.style.backgroundColor = "black";
    }  });


  rowContainer.appendChild(gridElement);
}

function promptForDimensions(){
  let dims = prompt("How many blocks wide would you like your grid? (Max 100)");
  return dims;
}
