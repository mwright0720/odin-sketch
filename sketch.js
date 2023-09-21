const GRID_SIZE = 16;

let container = document.querySelector('#container');
for(let i = 0; i < 16; i++)
{
    let box = document.createElement('div');
    box.style.width = "100px";
    box.style.height = "100px";
    box.style.border = "4px solid black";
    container.appendChild(box);

}