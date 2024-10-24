createGrid(50);


const gridSquares = document.querySelectorAll(".square");
gridSquares.forEach(square => addHoverEffect(square));


function addHoverEffect(square) {
    square.addEventListener("mouseover", (event) => {
        event.target.style.backgroundColor = "red";
    });
}


function createGrid(gridCount) {
    for (let i = 0; i < gridCount; i++) {
        let rowDiv = document.createElement("div");
        rowDiv.id = `row-${i}`;
        rowDiv.style.flexGrow = 1;
        rowDiv.classList.add("row");
    
        for (let j = 0; j < gridCount; j++) {
            let square = document.createElement("div");
            square.id = `square-${i}-${j}`;
            square.classList.add("square");
            square.style.flexGrow = 1;
    
            rowDiv.appendChild(square);
        };
    
        container.appendChild(rowDiv);
    };
}
