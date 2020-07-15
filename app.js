function maFonction() {
  var div = document.getElementById("maDIV");
  if (div.style.display === "none") {
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
}

const b = document.getElementById("anime");
b.addEventListener("click", function() {
	b.innerHTML = "La physique quantique me comble de bonheur. C’est comme regarder l’univers tout nu. J’en ai des frissons."
});


const c = document.getElementById("anime");
c.addEventListener("dblclick", function() {
	c.innerHTML = "Sheldon Cooper"
});
let score = 0;
const buttons = document.querySelectorAll("button");
for (let i = 0; i < buttons.length; i++) {
buttons[i].addEventListener("click", function() {  
const joueur = buttons[i].innerHTML;
const robot = buttons[Math.floor(Math.random() * buttons.length)].innerHTML;
const h = document.getElementById("vs").innerHTML = score;
let resultat = "";




if (joueur === robot) {
	resultat = "Egalité";
}
else if ((joueur === "Pierre" && robot === "Ciseaux") || (joueur === "Feuille" && robot === "Pierre") || (joueur === "Ciseaux" && robot === "Feuille") || (joueur === "Pierre" && robot === "Lezard") || (joueur === "Feuille" && robot === "Spock") || (joueur === "Ciseaux" && robot === "Lezard") || (joueur === "Spock" && robot === "Pierre") || (joueur === "Spock" && robot === "Ciseaux") ) {
	resultat = "Bien joué";
	score += 1;
}
else if ((joueur === "Lezard" && robot === "Feuille" ) || (joueur === "Lezard" && robot === "Spock") || (joueur === "Lezard" && robot === "Spock")) {
	resultat = "Bien joué";
	score +=1;
}
else {
	resultat = "Perdu";
	score -= 1;
}
if (score === 1) {
	document.getElementById("bravo").innerHTML = "Continue!"
}
if (score === 2) {
	document.getElementById("bravo").innerHTML = "Ha!"
}
if (score === 3) {
	document.getElementById("bravo").innerHTML = "Pas mal !"
}
if (score === 4) {
	document.getElementById("bravo").innerHTML = "Encore un effort !!"
}
if (score === 5) {
	document.getElementById("bravo").innerHTML = "Essaye d'arriver à 8,10,15,20 !!"
}
if (score === 8) {
	document.getElementById("bravo").innerHTML = "Tu dechires !!!!"
}
if (score === 10) {
	document.getElementById("bravo").innerHTML = "Mais qui es tu ?!!!!"
}
if (score === 15) {
	document.getElementById("bravo").innerHTML = "Arrête maintenant !!!!!!"
}
if (score === 20) {
	document.getElementById("bravo").innerHTML = "Quuuoi !!!!!!! Merci d' avoir passé du temps sur mon petit jeu, You are beatiful !!!!!!"
}
if (score === -1) {
	document.getElementById("bravo").innerHTML = "Arg"
}
if (score === -2) {
	document.getElementById("bravo").innerHTML = "NinHin"
}
if (score === -3) {
	document.getElementById("bravo").innerHTML = "Huu!"
}
if (score === -4) {
	document.getElementById("bravo").innerHTML = "Ca sent le sapin !!"
}
if (score === -5) {
	document.getElementById("bravo").innerHTML = "Aie, aie, aie !!"
}
if (score === -10) {
	document.getElementById("bravo").innerHTML = "On en parle ?!!"
}
if (score === -15) {
	document.getElementById("bravo").innerHTML = "O_O"
}
if (score === -20) {
	document.getElementById("bravo").innerHTML = "Aussi fort que moi dis donc... Le but secret du (qui perd gagne) etait d' arrivé à -20..... :D ... You are beautiful"
}


	document.querySelector(".resultat").innerHTML = `
	Joueur : ${joueur} </br> </br>
	Robot : ${robot} </br> </br>
	${resultat} 
	`;

});

}