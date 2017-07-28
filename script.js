var coin = Math.random();

if (coin > 0.5) {
    console.log('Orzeł');
} else {
    console.log('Reszka');
}

var dice = Math.round(Math.random(1, 6) * 6);
console.log('Wyrzuciłeś ' + dice);