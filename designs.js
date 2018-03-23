// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
let myTable = document.getElementById(`pixelCanvas`);
function makeGrid() {
  console.log("connected");

    const row = document.querySelector(`#inputHeight`).value;
    const col = document.querySelector(`#inputWeight`).value;
    for (let i = 1; i <= row; i++){
      const newRow = document.createElement("tr")
      for (let y = 1; i <= col; y++){
        const newCol = document.createElement("td");
        newRow[i].appendChild(newCol);
        }
        myTable.appendChild(newRow)
    }
  };
    document.body.appendChild(myTable);

const btn = document.getElementsByTagName(`input`);
  btn[2].addEventListener("click", makeGrid, false);
