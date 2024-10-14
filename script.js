const clearButton = document.getElementById('clear');
const resizeButton = document.getElementById('resize');
const boardContainer = document.getElementById('board-container');
let pixel; 
const defaultValue = 16;
const maxValue = 100;

const createDefaultBoard = () => {
  for (let i = 0; i < defaultValue; i++) {
    pixel = document.createElement('div');
    pixel.classList.add('pixel');
    boardContainer.appendChild(pixel);
  }
}

createDefaultBoard();