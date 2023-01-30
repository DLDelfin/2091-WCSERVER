var calcul = require('./calculation.js');

var hours = 4;
var days = 6;
var rate = 300;
var taxR = 0.1;
var sss = 1200;
var pagbig = 300;
var phealth = 400;

var dailySalary = calcul.multiply(rate, hours);
console.log('The Gross Income is: ' + calcul.multiply(dailySalary, days));

var grossPay = calcul.multiply(dailySalary, days);
var tax = calcul.multiply(grossPay, taxR);
console.log('Tax: ' + calcul.multiply(grossPay, taxR));

console.log('SSS: ' + sss);
console.log('Pag-Ibig Fund: ' + pagbig);
console.log('PhilHealth: ' + phealth);

var deduct = calcul.add(sss, pagbig);
var deduct2 = calcul.add(phealth, tax);
var deduct3 = calcul.add(deduct, deduct2);
console.log('Total Deductions: ' + deduct3);

console.log('The Net Salary is: ' + calcul.subtract(grossPay, deduct3));
