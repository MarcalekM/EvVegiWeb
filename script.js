function CardChange(event){
    const btn = event.target.innerHTML;
    let anim1 = null;
    let anim2 = null;
    const cardL = document.getElementById("leftCard");
    const cardC = document.getElementById("centerCard");
    const cardR = document.getElementById("rightCard");
    let posC = 0;
    let posO = 25;
    anim1 = setInterval(function animateOut(){
        if(posC == -450){
            clearInterval(anim1);

            switch(btn){
                case "Home":
                    document.getElementById("leftCard").innerHTML = "<p>Ez a Home leftCard</p>";
                    document.getElementById("centerCard").innerHTML = "<p>Ez a Home centerCard</p>";
                    document.getElementById("rightCard").innerHTML = "<p>Ez a Home rightCard</p>";
                    break;
                case "Leaderboard":
                    document.getElementById("leftCard").innerHTML = "<p>Ez a Leaderboard leftCard</p>";
                    document.getElementById("centerCard").innerHTML = "<p>Ez a Leaderboard centerCard</p>";
                    document.getElementById("rightCard").innerHTML = "<p>Ez a Leaderboard rightCard</p>";
                    break;
                case "About us":
                    document.getElementById("leftCard").innerHTML = "<p>Ez a About us leftCard</p>";
                    document.getElementById("centerCard").innerHTML = "<p>Ez a About us centerCard</p>";
                    document.getElementById("rightCard").innerHTML = "<p>Ez a About us rightCard</p>";
                    break;
            }

            anim2 = setInterval(function animateIn(){
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
            }, 5);
        }
        else {
            posC--;
            posO--;
            cardL.style.left = posO + "px";
            cardR.style.right = posO + "px";
            cardC.style.top = posC * 2 + "px";
        }
    }, 5);
}

function Hi(){
    console.log("Hello");   
}