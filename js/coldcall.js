/*! coldcalling random generator */
var names = ["me", "you", "us"];

function colcall() {
    document.getElementById("demo").innerHTML = names[Math.floor(Math.random()*names.length)];
}