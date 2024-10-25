const clearButton = document.getElementById('clear');
const resizeButton = document.getElementById('resize');
const boardContainer = document.getElementById('board-container');
let pixelColumn;
let pixelCount;
let pixel;
const defaultCount = 16;
const maxCount = 100;



// TODO: Change loop value to pixelCount

/* Creates a 'n' numbers of columns to stock the pixels,
   and then creates the pixels in every column */ 

const createDefaultBoard = () => {
  for (let i = 0; i < defaultCount; i++) {
    pixelColumn = document.createElement('div');
    pixelColumn.classList.add('pixel-column');
    for (let j = 0; j < defaultCount; j++) {
      pixel = document.createElement('div');
      pixel.addEventListener('mouseover', randomColor);
      pixel.classList.add('pixel');
      pixelColumn.appendChild(pixel);
    }
    boardContainer.appendChild(pixelColumn); 
  }
};

/* Throws a random RGB color that will be used to paint */

const randomColor = (e) => {
  const r = Math.floor(Math.random() *  256);
  const g = Math.floor(Math.random() *  256);
  const b = Math.floor(Math.random() *  256);
  // return `rgb(${r},${g},${b})`;
  e.target.style.backgroundColor = `rgb(${r},${g},${b})`;
}

createDefaultBoard();

console.log(pixel);