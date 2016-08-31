$(document).foundation()

window.onload = function myFunction() {
    var d = new Date(),
        n = d.getFullYear();
    document.getElementById("yr").innerHTML = n;
};
