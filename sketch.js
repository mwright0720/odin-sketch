var GRID_SIZE = 16;

let container = document.querySelector('#container');
// Generates a GRID_SIZR x GRID_SIZE box of black squares

function generateRow()
{
    const rowBox = document.createElement('div');
    rowBox.setAttribute('class', 'row-box');
    return rowBox;
}

function populateBox(box) {
    for(let i = 0; i < GRID_SIZE; i++)
    {
        const boxElement = document.createElement('div');
        boxElement.setAttribute('class', 'grid-square');
        boxElement.addEventListener("mouseover", () => {
            boxElement.style.backgroundColor = "black";
        });

        box.appendChild(boxElement);
    }

    return box;

}

function populatePage() {
    for(let j = 0; j < GRID_SIZE; j++)
    {
        let row = generateRow();
        let box = populateBox(row);
        container.appendChild(box);
    }
}

function mouseOver(divToChange) {
    divToChange.style.background = 'blue';
}

function mouseOff(divToChange)
{
    divToChange.style.background = 'black';
}

function clearCanvas() {
    let squares = document.querySelectorAll('.grid-square')
    squares.forEach((e) => e.remove());
}

function promptUser() {
    let userChoice = prompt("Enter a new size for the grid, max 100");
    if (userChoice >= 100 || userChoice <=0)
    {
        alert("Invalid")
    }

    else {
        GRID_SIZE = userChoice;
        clearCanvas();
        populatePage();
        
    }

}




populatePage();

