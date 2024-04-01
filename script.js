// generate random color

const randomColor = function(){ 
    const hex = "0123456789ABCDEF"
    let color = "#"
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}

 function changeBgColor(){
    document.body.style.backgroundColor = randomColor();
 }

 let intervalId;
const startChaningColor = function(){
    if(!intervalId){
        intervalId =  setInterval(changeBgColor,1000);
    }
};

const stopChangingColor = function(){
    clearInterval(intervalId);
    console.log("stopped");
    intervalId = null;
    
};

document.querySelector("#start").addEventListener("click",startChaningColor);

document.querySelector("#stop").addEventListener("click", stopChangingColor);