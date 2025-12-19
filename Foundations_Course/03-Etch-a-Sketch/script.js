
console.log("Hello world!");

//select container div
document.getElementById("#container");

//define grid rules
const rows = 16;
const columns = 16;

const totalSquares = rows*columns;//16 * 16 = 256 squares

//loop to genenrate squares
for(let i = 0; i < totalSquares; i++) {

    //create div tags for every square
    const square = document.createElement('div');

    //add classList for styling
    square.classList.add('grid-square');

    /* EVENT LISTENERS*/ 
    square.addEventListener("mouseenter", () => {square.classList.add("mouseHover");});

    //append squares to container
    container.appendChild(square);

}
