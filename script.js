/*
 *create a horizontal-flexbox with 16 square divs
 *append this flex box to another vertical flexbox 16 times
 *append the vertical flex box to the container
 */

const container = document.querySelector('.container');

function makeGrid(sideLength){
    
    const horizontalFlexBox = document.createElement('div');
    const verticalFlexBox = document.createElement('div');
    const flexSquare = document.createElement('div');
    
    verticalFlexBox.classList.add("vertical-flexbox");
    horizontalFlexBox.classList.add("horizontal-flexbox")
    flexSquare.style.cssText = `width: calc(90vw / ${sideLength}); height: calc(90vw / ${sideLength});`

    verticalFlexBox.addEventListener("mouseover", (event)=>{
        event.target.classList.add("ch-background");
    });

    for(let i = 0; i < sideLength; i++){
        horizontalFlexBox.appendChild(flexSquare.cloneNode(true));
    }
    for(let i = 0; i < sideLength; i++){
        verticalFlexBox.appendChild(horizontalFlexBox.cloneNode(true));
    }

    container.appendChild(verticalFlexBox);
}

const button = document.querySelector("button");
button.addEventListener("click", ()=>{
    let sideLength = prompt("Enter the number of squares you want in the new square(max: 100)", 16);
    container.removeChild(container.firstChild);
    makeGrid(sideLength);
})
makeGrid(16);