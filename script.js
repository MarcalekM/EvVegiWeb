function CardChange(event){
    const btn = event.target.innerHTML;
    //event.target.classList.add("disabled");
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
                    document.getElementById("centerCard").innerHTML = "<p>Üdvözöllek az oldalunkon!</p>";
                    document.getElementById("rightCard").innerHTML = "<p>Ez a Home rightCard</p>";
                    break;
                case "Leaderboard":
                    document.getElementById("leftCard").innerHTML = "<p>Ez a Leaderboard leftCard</p>";
                    document.getElementById("centerCard").innerHTML = '<img src="/img/Kep2.jpg" alt="">';
                    document.getElementById("rightCard").innerHTML = "<table><hr><td>Név</td><td>Eredmémy</td></hr><tr><td>Koczka Balázs</td><td>1024</td></tr><tr><td>Vízi Adrián</td><td>528</td></td></table>";
                    break;
                case "About us":
                    document.getElementById("leftCard").innerHTML = "<p>Ez a About us leftCard</p>";
                    document.getElementById("centerCard").innerHTML = "<p>Ez a About us centerCard</p>";
                    document.getElementById("rightCard").innerHTML = "<h3>Telefon:</h3><p>+4741742584</p><h3>Email: </h3><p>vmi@gmail.to</p><br><h3>Telephely: </h3><p>Meseország</p>";
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
            }, 0.5);
        }
        else {
            posC--;
            posO--;
            cardL.style.left = posO + "px";
            cardR.style.right = posO + "px";
            cardC.style.top = posC * 2 + "px";
        }
    }, 0.5);
}

function Hi() {
    const link = document.createElement('a');
    link.href = 'src/download.txt'; // a letölteni kívánt fájl elérhetősége
    link.download = 'src/download.txt'; // a letöltött fájl neve
    document.body.appendChild(link); // a linket a dokumentumhoz adjuk
    link.click(); // a letöltés elindítása
    document.body.removeChild(link); // a link eltávolítása a DOM-ból
}