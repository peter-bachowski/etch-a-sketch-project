
const createGridButton = document.getElementById("makeGrid"),
  //inputText = document.getElementById("inputText"),
  title = document.getElementById("header"),
  //gridContainer = document.getElementById("gridContainer"),
  clearButton = document.getElementById("clearButton"),
  gridContainer = document.createElement("div");


let dimensions = 0;//the dimensions variable will be the dimension of your grid (how many boxes wide and high)
let mouseClickDown = false;

createGridButton.onclick = function() {
  clearGrid();
  gridContainer.id = "gridContainer";
  document.body.appendChild(gridContainer);//adds the grid container to the document body
  //dimensions = inputText.value;//sets the dimensions varuable to whatever number is typed into the text box
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
  if(document.getElementById("gridContainer") != null){
    gridContainer.remove();
  }
}

function createBox(rowContainer){ //creates one box element for each row container
  const gridElement = document.createElement("div");
  gridElement.id = "gridElement";
  gridElement.classList.add("mainGrid");
  gridElement.addEventListener("mouseover", function(){
    $(document).mousedown(function(){
      mouseClickDown = true;
    });
    $(document).mouseup(function(){
      mouseClickDown = false;
    });
    if(mouseClickDown){
      gridElement.style.backgroundColor = "black";
    }
  });
  rowContainer.appendChild(gridElement);
}

function promptForDimensions(){
  let dims = prompt("How many blocks wide would you like your grid? (Max 100)");
  return dims;
}
