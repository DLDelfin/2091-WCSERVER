var calcul = require('./calculation.js');

var hours = 4;
var days = 6;
var rate = 300;
var tax = 0.1;
var sss = 1200;
var pagbig = 300;
var phealth = 400;

var grossPay = calcul.multiply(rate, hours);

console.log('The Gross Income is: ' + calcul.multiply(grossPay, days));
