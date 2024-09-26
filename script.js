function CardChange(){
    console.log("Hello");
    const cardL = document.getElementById("leftCard");
    const cardC = document.getElementById("centerCard");
    const cardR = document.getElementById("rightCard");
    let pos = 0;
    let anim = setInterval(animateOut(), 1000);


    function animateOut(){
        if(pos == -450){
            clearInterval(anim);
        }
        else {
            console.log(pos);
            pos--;
            cardL.style.left = pos + "px";
            cardR.style.right = pos + "px";
            cardC.style.top = pos * 2 + "px";
            console.log(pos);
        }
    }

}

function Hi(){
    console.log("Hello");   
}