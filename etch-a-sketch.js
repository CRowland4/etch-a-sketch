createGrid(20);


const gridSquares = document.querySelectorAll(".square");
gridSquares.forEach(square => addHoverEffect(square));


function addHoverEffect(square) {
    square.addEventListener("mouseover", (event) => {
        event.target.style.backgroundColor = "red";
    });
}


function createGrid(gridCount) {
    const squareSize = getGridSquareSize(gridCount);
    
    for (let i = 0; i < gridCount; i++) {
        let rowDiv = document.createElement("div");
        rowDiv.id = `row-${i}`;
        rowDiv.classList.add("row");
    
        for (let j = 0; j < gridCount; j++) {
            let square = document.createElement("div");
            square.id = `square-${i}-${j}`;
            square.classList.add("square");
            square.style.height = `${squareSize}px`;
            square.style.width = `${squareSize}px`;
    
            rowDiv.appendChild(square);
        };
    
        container.appendChild(rowDiv);
    };
}


function getGridSquareSize(gridCount) {
    const container = document.querySelector("#container");
    const gridSize = parseInt(window.getComputedStyle(container).maxWidth);
    console.log("gridSize: " + gridSize);
    const squareBorderSize = parseInt(window.getComputedStyle(container).borderWidth);
    console.log("squareBorderSize: " + squareBorderSize);
    const pixelsAddedByBorders = (gridCount * squareBorderSize) * 2;
    console.log("pixelsAddedByBorders: " + pixelsAddedByBorders);
    const squareSize = Math.floor((gridSize - pixelsAddedByBorders) / gridCount);
    console.log("squareSize: " + squareSize);

    console.log((squareSize * gridCount) + pixelsAddedByBorders);
    return squareSize;
}




