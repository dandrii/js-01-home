let a = parseFloat(prompt(`Enter value - a`));
let b = parseFloat(prompt(`Enter value - b`));
let c = parseFloat(prompt(`Enter value - c`));

if (a !== 0) {

    function sq(a, b, c) {

        let d = (Math.pow(b, 2)) - (4 * a * c);

        if (d > 0) {
            let x = ((-b) + Math.sqrt(d)) / (2 * a);
            let y = ((-b) - Math.sqrt(d)) / (2 * a);
            return `x = ${x}<br>y = ${y}`;
        }

        if (d == 0) {
            let x = ((-b) / 2 * a);
            return `x = y = ${x}`;
        }

        if (d < 0) {
            return `infinite roots`
        }
    }
    document.write(sq(a, b, c));
}

else {
    document.write(`a must be not 0`);
}
