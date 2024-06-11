const assert = require('assert');
const emiCalculator = require('../src/emi_calculator');

describe('EMI Calculator', () => {
    it('should calculate correct EMI', () => {
        const principal = 100000;
        const annualInterestRate = 10;
        const tenureInYears = 1;
        const emi = emiCalculator.calculateEMI(principal, annualInterestRate, tenureInYears);
        assert.strictEqual(Math.round(emi), 8792);
    });

    it('should calculate correct total payment', () => {
        const emi = 8792;
        const tenureInYears = 1;
        const totalPayment = emiCalculator.calculateTotalPayment(emi, tenureInYears);
        assert.strictEqual(Math.round(totalPayment), 105504);
    });

    it('should calculate correct total interest', () => {
        const totalPayment = 105504;
        const principal = 100000;
        const totalInterest = emiCalculator.calculateTotalInterest(totalPayment, principal);
        assert.strictEqual(Math.round(totalInterest), 5504);
    });
});
