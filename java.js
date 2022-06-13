const container = document.getElementById("container");
let cell; 
let newCell;

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (let c = 0; c < (rows * cols); c++) {
    cell = document.createElement("span");
    cell.innerText = (c + 1);
    container.appendChild(cell).className = "grid-item";
  };
};

 function replaceRows(rows, cols) {
   container.innerHTML = '';
   container.style.setProperty('grid-template-rows', rows);
   container.style.setProperty('grid-template-columns', cols);
   for (let c = 0; c < (rows * cols); c++) {
     newCell = document.createElement("span");
     newCell.innerText = (c + 1);
     container.appendChild(newCell).className = "grid-item";
  }
   startValue = makeRows(rows, cols);
};

const button = document.getElementById("pop");

pop.onclick = function popAlert() {   
  let rows = prompt("Enter number of rows:");
  let cols = prompt("Enter number of columns:");
  if (rows > 100 || cols > 100) {
    alert ("The number is too high.");
  }
  else replaceRows(rows, cols);
};

let startValue = makeRows(16, 16);
