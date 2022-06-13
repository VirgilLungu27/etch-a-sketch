const container = document.getElementById("container");
let cell; 

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (let c = 0; c < (rows * cols); c++) {
    cell = document.createElement("div");
    cell.innerText = (c + 1);
    container.appendChild(cell).className = "grid-item";
  };
};
let startValue = makeRows(16, 16);


const button = document.getElementById("pop");

pop.onclick = function popAlert(rows, cols) {   
   prompt("Enter number of rows:", rows);
   prompt("Enter number of columns:", cols);
   container.innerHTML = '';
   };

