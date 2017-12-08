let a = +parseFloat(prompt(`Enter value - a`));
if (a !== 0) {
    var b = +parseFloat(prompt(`Enter value - b`));
    var c = +parseFloat(prompt(`Enter value - c`));
    var d = (Math.pow(b, 2)) - (4 * a * c);
}
else document.write(`a must be not 0`);

function sq() {

    if (d > 0) {
        var x = ((-b) + Math.sqrt(d)) / (2 * a);
        var y = ((-b) - Math.sqrt(d)) / (2 * a);
        document.write(`x = ` + x + `<br>`, `y = ` + y);
        return;
    }

    if (d == 0) {
        var x = ((-b) / 2 * a);
        document.write(`x = y = ` + x);
        return;
    }

    if (d < 0) {
        document.write(`infinite roots`);
        return;
    }
}

sq(a, b, c, d);