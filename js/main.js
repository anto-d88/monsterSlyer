//HEADER************************************************************

function generatHeader() {



    let boutonMonster = document.createElement("button");
    boutonMonster.setAttribute("class", "monst");
    boutonMonster.innerHTML = "Monster";

    document.body.firstElementChild.appendChild(boutonMonster);

}
generatHeader();


//FOOTER***********************************************************{
const info = {
    liste01: "<li class='info'>Infos contact:</li><li>Robles Soler</li><li>Antonio</li><li>Simplon haut de france</li>",
    liste02: "<li>07.82.76.03.31</li><li>59200</li><li>Tourcoing</li><li>antonio_robles_88@outlook.com</li>",
}
function generatFooter() {

    let infoFooterLeft = document.createElement("ul");
    infoFooterLeft.innerHTML = info.liste01;

    let infoFooterRight = document.createElement("ul");
    infoFooterRight.innerHTML = info.liste02;

    document.body.children[2].appendChild(infoFooterLeft);
    document.body.children[2].appendChild(infoFooterRight);

}
generatFooter();




//MONSTER*****************************************************************************************
//                  M   M  OOO  N   N  SSS  TTTTTT EEEE RRRR 
//                  MM MM O   O NN  N S       TT   E    R   R
//                  M M M O   O N N N  SSS    TT   EEE  RRRR 
//                  M   M O   O N  NN     S   TT   E    R R  
//                  M   M  OOO  N   N SSSS    TT   EEEE R  RR

let monster = document.createElement("section");
monster.setAttribute("class", "mo");
let barreVie = document.createElement("section");
barreVie.setAttribute("class", "sctbar")
let vieY = document.createElement("section");
vieY.setAttribute("id", "vieY")
let barY = document.createElement("article");
barY.setAttribute("id", "barY");
barY.innerHTML = "100%";
let vieM = document.createElement("section");
vieM.setAttribute("id", "vieM")
let barM = document.createElement("article");
barM.setAttribute("id", "barM");
barM.innerHTML = "100%";
let perso = document.createElement("section");
perso.setAttribute("class", "boxPerso");
let player1 = document.createElement("article");
player1.setAttribute("class", "pla1");
let player2 = document.createElement("article");
player2.setAttribute("class", "pla2");
let sectBut = document.createElement("section");
sectBut.setAttribute("class", "sctBut");
let Dem = document.createElement("button");
Dem.setAttribute("id", "dem");
Dem.innerHTML = "DEMARRER";
let butJeu = document.createElement("section");
butJeu.setAttribute("class", "butJeu");
let attNorm = document.createElement("button");
attNorm.setAttribute("id", "attNorm");
attNorm.innerHTML = "ATTACK";
let attSpec = document.createElement("button");
attSpec.setAttribute("id", "attSpec");
attSpec.innerHTML = "SPECIAL ATTACK";
let soin = document.createElement("button");
soin.setAttribute("id", "soin");
soin.innerHTML = "HEAL";
let aban = document.createElement("button");
aban.setAttribute("id", "aban");
aban.innerHTML = "GIVE UP";
let boxLog = document.createElement("section");
boxLog.setAttribute("class", "modal")
let boxLi = document.createElement("section");
boxLi.setAttribute("class", "modalitem")
let listLog = document.createElement("ul");
listLog.setAttribute("id", "listLog");
listLog.setAttribute("class", "log");

document.body.children[1].appendChild(monster);
monster.appendChild(barreVie);
barreVie.appendChild(vieY);
barreVie.appendChild(vieM);
vieY.appendChild(barY);
vieM.appendChild(barM);
monster.appendChild(perso);
perso.appendChild(player1);
perso.appendChild(player2);
monster.appendChild(sectBut);
sectBut.appendChild(Dem);
sectBut.appendChild(butJeu);
butJeu.appendChild(attNorm);
butJeu.appendChild(attSpec);
butJeu.appendChild(soin);
butJeu.appendChild(aban);
monster.appendChild(boxLog);
boxLog.appendChild(boxLi);
boxLi.appendChild(listLog);


//FONCTION MONSTER*****************************************************



function attRandom(min, max) {
    return Math.max(Math.floor(Math.random() * max) + 1, min)
}

//CLASS DU BOUTTON DEMARRAGE ET DU BOUTTON ABANDON

class Init {

    constructor(name,) {

        this.name = name;


    }
    demarrage() {
        let j = 0;
        if (j == 0) {
            j = 1;
            let elem = document.querySelector("#barY");
            let elemM = document.querySelector("#barM");
            let width = "";
            let id = setInterval(frame, 1);
            function frame() {
                if (width >= 100) {
                    clearInterval(id);
                    j = 0;
                } else {
                    width++;
                    elem.style.width = width + "%";
                    elem.innerHTML = width + "%";
                    elemM.style.width = width + "%";
                    elemM.innerHTML = width + "%";
                }
            }
        }
    }
    infoDem() {
        let newLiD = document.createElement("li");
        newLiD.setAttribute("class", "dlog");
        let logLiD = document.createTextNode("LET GO!");
        listLog.appendChild(newLiD);
        newLiD.appendChild(logLiD);
        document.getElementById('listLog').scrollTop = 10000;
    }
    infoabandon() {
        let newLiA = document.createElement("li");
        newLiA.setAttribute("class", "alog");
        let logLiA = document.createTextNode("GIVE UP!");
        listLog.appendChild(newLiA);
        newLiA.appendChild(logLiA);
        document.getElementById('listLog').scrollTop = 10000;

    }



}

//CLASS DU JOUEUR 1 

class joueur1 {

    constructor(name) {

        this.name = name;
    }
    attack(min, max) {

        let elem = document.querySelector("#barM");
        let width = elem.style.width;
        width = width.substring(0, width.length - 1);
        width -= attRandom(min, max);
        if (width <= 0) {
            width = 0
        }
        elem.style.width = width + "%";
        elem.innerHTML = width + "%";

        return width
    }
    infoAttack() {

        let newLiY = document.createElement("li");
        newLiY.setAttribute("class", "mlog");
        let newLiM = document.createElement("li");
        newLiM.setAttribute("class", "nlog");


        let logLiM = document.createTextNode(`${j2.name}` + " ATTACK; " + `${this.name} PV DROPS TO ` + barY.textContent);
        let logLiY = document.createTextNode(`${this.name}` + " ATTACK: " + `${j2.name} PV DROPS TO` + barM.textContent);
        listLog.appendChild(newLiY);
        listLog.appendChild(newLiM);
        newLiY.appendChild(logLiY);
        newLiM.appendChild(logLiM);
        if (barY.textContent == "0%") {
            newLiY.innerHTML = `${this.name} IS GAME OVER!`
        }
        if (barM.textContent == "0%") {
            newLiY.innerHTML = `${this.name} IS WINNER!`

        }
        if (barM.textContent == "0%") {
            newLiM.innerHTML = `${j2.name} IS GAME OVER!`
        }
        if (barY.textContent == "0%") {
            newLiM.innerHTML = `${j2.name} IS WINNER!`
            newLiM.classList.remove("nlog");
            newLiM.classList.add("mlog");
            newLiY.classList.remove("mlog");
            newLiY.classList.add("nlog");
        }
        document.getElementById('listLog').scrollTop = 10000;
    }
    infoAttackS() {

        let newLiY = document.createElement("li");
        newLiY.setAttribute("class", "mlog");
        let newLiM = document.createElement("li");
        newLiM.setAttribute("class", "nlog");

        let logLiM = document.createTextNode(`${j2.name}` + " ATTACK; " + `${this.name} PV DROPS TO ` + barY.textContent);
        let logLiY = document.createTextNode(`${this.name}` + " SPECIAL ATTACK: " + `${j2.name} PV DROPS TO ` + barM.textContent);
        listLog.appendChild(newLiY);
        listLog.appendChild(newLiM);
        newLiY.appendChild(logLiY);
        newLiM.appendChild(logLiM);
        if (barY.textContent == "0%") {
            newLiY.innerHTML = `${this.name} IS GAME OVER!`

        }
        if (barM.textContent == "0%") {
            newLiY.innerHTML = `${this.name} IS WINNER!`

        }
        if (barM.textContent == "0%") {
            newLiM.innerHTML = `${j2.name} IS GAME OVER!`

        }
        if (barY.textContent == "0%") {
            newLiM.innerHTML = `${j2.name} IS WINNER!`
            newLiM.classList.remove("nlog");
            newLiM.classList.add("mlog");
            newLiY.classList.remove("mlog");
            newLiY.classList.add("nlog");
        }
        document.getElementById('listLog').scrollTop = 10000;
    }
    soinsY(min, max) {
        let elem = document.querySelector("#barY");
        let width = elem.style.width;
        width = width.substring(0, width.length - 1);

        width -= -attRandom(min, max);
        console.log("width");
        if (width > 100) {
            width = 100
        }
        if (width <= 0) {
            width = 0
        }

        elem.style.width = width + "%";

        elem.innerHTML = width + "%";

        return width


    }
    infoSoin() {

        let logLiY = document.createTextNode(`${this.name}` + " CARE ! : " + "THE PV OF YOU TO " + barY.textContent);
        let newLiY = document.createElement("li");
        newLiY.setAttribute("class", "mlog");
        listLog.appendChild(newLiY);
        newLiY.appendChild(logLiY);
        document.getElementById('listLog').scrollTop = 10000;

    }
}

//CLASS DU JOUEUR2

class joueur2 {
    constructor(name) {

        this.name = name;

    }

    attMonster(min, max) {
        console.log("monster attack")
        let elem = document.querySelector("#barY");
        let widthM = elem.style.width;

        widthM = widthM.substring(0, widthM.length - 1);
        widthM -= attRandom(min, max);
        if (widthM <= 0) {
            widthM = 0
        }
        elem.style.width = widthM + "%";
        elem.innerHTML = widthM + "%";

        return widthM

    }

    infoAttackM() {

        let newLiY = document.createElement("li");
        newLiY.setAttribute("class", "nlog");
        let logLiY = document.createTextNode(`${this.name}` + " ATTACK ! ; " + `${j1.name} PV DROPS TO ` + barY.textContent);
        newLiY.appendChild(logLiY);
        listLog.appendChild(newLiY);

    }
}

//INSTANCIATION DE LA CLASS DEMARRER

let jeu = new Init('Go');


//BOUTON DEMARRER

Dem.addEventListener("click", function () {
    document.querySelector("#dem").style.display = "none";
    document.querySelector(".butJeu").style.display = "flex";

    jeu.demarrage();
    jeu.infoDem();

    document.querySelector("#attSpec").disabled = false;
    document.querySelector("#attNorm").disabled = false;
    document.querySelector("#soin").disabled = false;
})

//BOUTON ABANDON

aban.addEventListener("click", function () {
    document.querySelector(".butJeu").style.display = "none";
    document.querySelector("#dem").style.display = "flex";
    jeu.infoabandon();



})

//INSTANCIATION DE LA CLASS JOUEUR1

let j1 = new joueur1('Player 1');

// INSTANCIATION DE LA CLASS JOUEUR2

let j2 = new joueur2('Player 2');

//BOUTON ATTACK

attNorm.addEventListener("click", function () {
    if (j2.attMonster(-1, -1) <= 0 || j1.attack(5, 10) <= 0) {

        document.querySelector("#attSpec").disabled = true;
        document.querySelector("#attNorm").disabled = true;
        document.querySelector("#soin").disabled = true;
    };
    if (j1.attack(-1, -1) <= 0 || j2.attMonster(5, 15) <= 0) {

        document.querySelector("#attSpec").disabled = true;
        document.querySelector("#attNorm").disabled = true;
        document.querySelector("#soin").disabled = true;
    };
    j1.infoAttack();

})

//BOUTON ATTACK SPECIAL

attSpec.addEventListener("click", function () {


    if (j2.attMonster(-1, -1) <= 0 || j1.attack(10, 20) <= 0) {


        document.querySelector("#attSpec").disabled = true;
        document.querySelector("#attNorm").disabled = true;
        document.querySelector("#soin").disabled = true;
    }
    if (j1.attack(-1, -1) <= 0 || j2.attMonster(5, 15) <= 0) {

        document.querySelector("#attSpec").disabled = true;
        document.querySelector("#attNorm").disabled = true;
        document.querySelector("#soin").disabled = true;

    }
    j1.infoAttackS();

})

//BOUTON SOIN

soin.addEventListener("click", function () {
    j1.soinsY(10, 20);
    j1.infoSoin();
    j2.attMonster(5, 15);
    j2.infoAttackM();
})






// APPEL DE LA SECTIONS MONSTER SLAYER*******************************************************



const sectionMonster = document.querySelector(".monst");

sectionMonster.onclick = function () {
    let sectMonster = document.querySelector(".mo");

    sectMonster.style.display = "block";
}

