function createSquares(number){
const container1 =document.querySelector(".container1")
for(i=0;i<number;i++){
    const container2 = document.createElement("div")
    container2.style.border ="solid";
    container2.style.borderWidth = "1px";
    container2.style.flex = 1;
    container2.style.display = "flex";
    container2.style.flexDirection = "column";
    for(j=0;j<number;j++){
        const container3 = document.createElement("div");
        container3.style.border ="solid";
        container3.style.borderWidth = "1px";
        container3.style.flex = 1;
        container2.appendChild(container3);
    }
    container1.appendChild(container2);
}
}

createSquares(16);