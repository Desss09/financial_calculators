"use strict"

window.onload = init;

function init() {
    const calcuBtn = document.querySelector("#calcBtn");


    //Include the eventlistener when clicking the calculate button it will call out to the monthly payment function.

    calcuBtn.addEventListener("click", payment);
}

function payment() {
// Things that are listed below  for queryselector relates to html
    const amount = Number(document.querySelector("#amt").value);
    const apr = Number(document.querySelector("#apr").value);
    const term = Number(document.querySelector("#trm").value);

    console.log(amount, apr, term);

    // Change the length of loan from year to month for calculation
    const numberOfPayments = term * 12;

    // change APR to monthly interest rate 
    const monthlyInterestRate = apr / 12 / 100;

    const mpayment = (amount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) / (Math.pow (1 + monthlyInterestRate, numberOfPayments) - 1);

const totalAmount = monthlyInterestRate * numberOfPayments;
const interestPaid = totalAmount - amount;

    // setting the value to the id 
    document.querySelector("#answerField").value = mpayment;

}
