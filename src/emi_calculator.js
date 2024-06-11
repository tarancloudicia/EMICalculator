/**
 * EMI Calculator Library
 * 
 * This library provides functions to calculate Equated Monthly Installment (EMI) 
 * for loans and mortgages.
 * 
 * @module EMI_Calculator
 */

/**
 * Calculate EMI
 * 
 * @param {number} principal - The principal loan amount
 * @param {number} annualInterestRate - The annual interest rate (in percentage)
 * @param {number} tenureInYears - The loan tenure (in years)
 * @returns {number} - The EMI amount
 */
function calculateEMI(principal, annualInterestRate, tenureInYears) {
    const monthlyInterestRate = annualInterestRate / (12 * 100);
    const numberOfMonths = tenureInYears * 12;
    const emi = (principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfMonths)) / (Math.pow(1 + monthlyInterestRate, numberOfMonths) - 1);
    return emi;
}

/**
 * Calculate Total Payment
 * 
 * @param {number} emi - The EMI amount
 * @param {number} tenureInYears - The loan tenure (in years)
 * @returns {number} - The total payment amount over the tenure
 */
function calculateTotalPayment(emi, tenureInYears) {
    const numberOfMonths = tenureInYears * 12;
    return emi * numberOfMonths;
}

/**
 * Calculate Total Interest
 * 
 * @param {number} totalPayment - The total payment amount over the tenure
 * @param {number} principal - The principal loan amount
 * @returns {number} - The total interest paid
 */
function calculateTotalInterest(totalPayment, principal) {
    return totalPayment - principal;
}

module.exports = {
    calculateEMI,
    calculateTotalPayment,
    calculateTotalInterest
};
