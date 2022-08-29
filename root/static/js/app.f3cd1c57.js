var yes = false;
var t = document.getElementsByClassName("numberClass");
setInterval((function() {
    for (var e = 0; e < t.length; e++) {
        var a = document.getElementById(e);
        if (a) {
            var n = a.style.left.replace(/\px/, "");
            a.style.left = n > -1e7 ? 1 * n - 1 + "px" : "5px"
        }
    }
}
), 100);


