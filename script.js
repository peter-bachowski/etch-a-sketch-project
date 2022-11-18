
const createGridButton = document.getElementById("makeGrid"),
  inputText = document.getElementById("inputText"),
  title = document.getElementById("header"),
  gridContainer = document.getElementById("gridContainer"),
  clearButton = document.getElementById("clearButton");

let dimensions = 0;//the dimensions variable will be the dimension of your grid (how many boxes wide and high)

createGridButton.onclick = function() {
  clearGrid();
  dimensions = inputText.value;//sets the dimensions varuable to whatever number is typed into the text box
  if(isNaN(dimensions)){//if the value entered is not a number, throw an error
    alert("Error! Please enter a number.");
    inputText.value = null;
  }
  else if(dimensions < 0){//if the value entered is negative, throw an error
    alert("Error! Please enter a non-negative value.");
    inputText.value = null;
  }
  else{//otherwise, creates a new div box with the given id, then adds it to the grid container
    for(x = 0; x < dimensions; x++){//for each row of the grid

      for(y = 0; y < dimensions; y++){//creates how ever many boxes the dimensions variable is set to
        createBox();
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

function createBox(){ //creates one box element for the grid
  const gridElement = document.createElement("div");
  gridElement.id = "gridElement";
  //gridElement.classList.add("mainGrid");
  gridContainer.appendChild(gridElement);
}
