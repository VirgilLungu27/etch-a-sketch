const container = document.getElementById("container");
let cell; 
let newCell;

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (let c = 0; c < (rows * cols); c++) {
    cell = document.createElement("div");
    cell.innerText = (c + 1);
    container.appendChild(cell).className = "grid-item";
  };
};

 function replaceRows(rows, cols) {
   container.innerHTML = '';
   container.style.setProperty('--grid-rows', rows);
   container.style.setProperty('--grid-cols', cols);
   for (let c = 0; c < (rows * cols); c++) {
     newCell = document.createElement("div");
     newCell.innerText = (c + 1);
     container.appendChild(newCell).className = "grid-item";
  }
};

const button = document.getElementById("pop");

pop.onclick = function popAlert() {   
  let rows = prompt("Enter number of rows:");
  let cols = prompt("Enter number of columns:");
  replaceRows(rows, cols);
};

let startValue = makeRows(16, 16);
