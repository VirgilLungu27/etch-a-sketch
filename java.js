const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.innerText = (c + 1);
    container.appendChild(cell).className = "grid-item";
  };
};

makeRows(16, 16);

const button = document.getElementById("pop");

pop.onclick = function popAlert(rows, cols) {
   let newRow = prompt("Enter number of rows:", rows);
   let newColumn = prompt("Enter number of columns:", cols);
   makeRows(newRow, newColumn);
}