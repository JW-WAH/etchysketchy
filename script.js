//Define Start number of squares
let numberofSquares = 16;
//creates the squares
function createSquares(number){
const container1 =document.querySelector(".container1")
for(i=0;i<number;i++){
    const container2 = document.createElement("div")
    container2.className = "container2"
    container2.style.flex = 1;
    container2.style.display = "flex";
    container2.style.flexDirection = "column";
    for(j=0;j<number;j++){
        const container3 = document.createElement("div");
        container3.style.border ="solid";
        container3.style.borderWidth = "0.5px";
        container3.style.flex = 1;
        container3.className = "container3"
        container3.addEventListener("mouseover",function(){
            container3.style.backgroundColor = "black";
        })
        container2.appendChild(container3);
    }
    container1.appendChild(container2);
}
}


//Removes all existing Divs -> container2 are the containers of the boxes
function removeallDivs(){
    container2s = document.querySelectorAll(".container2").forEach(e => e.remove());
}

//changes number of squares figure and results in a different sized square
const changesizeButton = document.querySelector(".ChangeSize");
changesizeButton.addEventListener("click",function(){
numberofSquares = prompt("Enter a number between 1 and 100");
removeallDivs()
createSquares(numberofSquares)
})

//removes all divs and re-runs the number of squares to clean board
const resetButton = document.querySelector(".Reset");
resetButton.addEventListener("click",function(){
    removeallDivs()
    createSquares(numberofSquares)
})

createSquares(numberofSquares);


