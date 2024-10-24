main();


function main() {
    document.querySelector("#newGridBtn").addEventListener("click", createNewGrid);
    createGrid(25);
}


function createNewGrid() {
    const newGridSize = Number(prompt("Enter a size for the new grid:"));

    if (typeof(newGridSize) !== 'number') {
        alert("Grid size must be a number!")
    } else if (newGridSize < 1) {
        alert("Grid size must be positive!")
    } else if (newGridSize > 100) {
        alert("Maximum grid size is 100!")
    } else {
        removeOldGrid();
        createGrid(newGridSize);
    };
}


function removeOldGrid() {
    const newContainer = document.createElement("div");
    newContainer.id = "container";

    document.querySelector("#container").replaceWith(newContainer);
}


function createGrid(gridCount) {
    const container = document.querySelector("#container");
    for (let i = 0; i < gridCount; i++) {
        const gridRow = createGridRow(i);
        for (let j = 0; j < gridCount; j++) {
            gridRow.appendChild(createGridSquare(i, j));
        };
    
        container.appendChild(gridRow);
    };

    container.addEventListener("mouseover", (event) => {
        if (event.target.classList.contains("square")) {
            alterGridSquareColor(event.target);
        };
    });
}


function alterGridSquareColor(gridSquare) {
    gridSquare.style.backgroundColor = getRandomRGBColor();
    increaseElementOpacity(gridSquare, .1);
}


function increaseElementOpacity(element, increaseAmount) {
    const currentOpacity = Number(element.style.opacity);

    if (currentOpacity < 1) {
        element.style.opacity = currentOpacity + increaseAmount;
    };
}


function getRandomRGBColor() {
    const redValue = Math.floor(Math.random() * 255);
    const blueValue = Math.floor(Math.random() * 255);
    const greenValue = Math.floor(Math.random() * 255);

    return `rgb(${redValue}, ${blueValue}, ${greenValue})`;
}


function createGridRow(rowNumber) {
    const rowDiv = document.createElement("div");
    rowDiv.id = `row-${rowNumber}`;
    rowDiv.style.flexGrow = 1;
    rowDiv.classList.add("row");

    return rowDiv;
}


function createGridSquare(rowNumber, squareNumber) {
    const square = document.createElement("div");
    square.id = `square-${rowNumber}-${squareNumber}`;
    square.classList.add("square");
    square.style.flexGrow = 1;
    square.style.opacity = 0;

    return square;
}
