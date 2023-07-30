/*const color = ["white","grey"];
const btn = document.getElementById("btn")

btn.addEventListener("click",function(){
    const random = rand();
    document.body.style.backgroundColor = color[random];
    if(rand() === 1) {
        document.body.style.color = "white";
    } else{
        document.body.style.color ="black";
    }
})
function rand(){
    return Math.floor(Math.random()*color.length)
}*/

const color = ["black","white"];
const btn = document.getElementById("btn");

btn.addEventListener("click" , function(){
    const dark = 0;
    document.body.style.backgroundColor = color[dark];
    if (dark === 0){
        document.body.style.color = "white";
    }
})