// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
let myTable = document.getElementById(`pixelCanvas`);
function makeGrid(evt) {
  console.log("connected");

  const col = document.querySelector(`#inputWeight`).value;
  const row = document.querySelector(`#inputHeight`).value;
    for (let i = 1; i <= row; i++){
      const newRow = document.createElement("tr")
      for (let y = 1; y <= col; y++){
        const newCol = document.createElement("td" + evt.target.style.color);
        newRow.appendChild(newCol);
        }
        myTable.appendChild(newRow)
    }
    document.body.appendChild(myTable);
    console.log(evt);
    evt.preventDefault();

  };

const btn = document.getElementsByTagName(`input`);
  btn[2].addEventListener("click", makeGrid);

const cell = document.getElementsByTagName('td');
myTable.addEventListener("click", function(evt){
  evt.target.style.backgroundColor = document.getElementById("colorPicker").value;
});
