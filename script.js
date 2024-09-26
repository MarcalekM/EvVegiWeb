function CardChange(){
    console.log("Hello");
    const cardL = document.getElementById("leftCard");
    const cardC = document.getElementById("centerCard");
    const cardR = document.getElementById("rightCard");
    let posC = 0;
    let posO = 25;
    let anim = setInterval(animateOut(), 2);


    function animateOut(){
        if(posC == -450){
            clearInterval(anim);
        }
        else {
            posC--;
            posO--;
            console.log(posC);
            cardL.style.left = posO + "px";
            cardR.style.right = posO + "px";
            cardC.style.top = posC * 2 + "px";
            console.log(posC);  
        }
    }

}

function Hi(){
    console.log("Hello");   
}