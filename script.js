function CardChange(){
    let anim1 = null;
    let anime2 = null;
    const cardL = document.getElementById("leftCard");
    const cardC = document.getElementById("centerCard");
    const cardR = document.getElementById("rightCard");
    let posC = 0;
    let posO = 25;
    anim1 = setInterval(function animateOut(){
        if(posC == -450){
            clearInterval(anim1);
        }
        else {
            posC--;
            posO--;
            console.log(posC);
            cardL.style.left = posO + "px";
            cardR.style.right = posO + "px";
            cardC.style.top = posC * 2 + "px";
        }
    }, 5);

    document.getElementById("leftCard").innerHTML = "<p>Hello world</p>"
    console.log(document.getElementById("leftCard").innerHTML);

    /*anim2 = setInterval(function animateIn(){
        if(posC == 0){
            clearInterval(anim2);
        }
        else {
            posC++;
            posO++;
            cardL.style.left = posO + "px";
            cardR.style.right = posO + "px";
            cardC.style.top = posC * 2 + "px";
        }
    }, 5);*/


    

}

function Hi(){
    console.log("Hello");   
}