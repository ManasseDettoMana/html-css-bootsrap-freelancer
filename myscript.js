console.log("Prova");

var eta = 20;
var eta_silente = 500;
document.getElementById("start").innerHTML = "start bootstrap now fidate";
console.log("ho cambiato l'h2 nell'header");

document.getElementsByClassName("nav_a").innerHTML = "schiaccia qui";
console.log("tutto apposto");

console.log(document.getElementById("start").innerHTML + " " +  document.getElementsByClassName("nav_a").innerHTML);
console.log("ho " + eta + " anni, tra " + (eta_silente - eta) + " avrò l'attuale età di silente")