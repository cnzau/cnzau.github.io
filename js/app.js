$(document).foundation()

window.onload = function myFunction() {
    var d = new Date();
    var n = d.getFullYear();
    document.getElementById("yr").innerHTML = n;
}
