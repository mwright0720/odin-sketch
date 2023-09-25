const GRID_SIZE = 16;

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
    console.log("Mouse over function called");
}

function mouseOff(divToChange)
{
    divToChange.style.background = 'black';
}


populatePage();

