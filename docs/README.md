# EMI Calculator Library

This Node.js library provides functions to calculate Equated Monthly Installment (EMI) for loans and mortgages. 

## Installation

To install the library, use npm:

```bash
npm install emi-calculator
```

## Usage

Below is an example of how to use the library:

```javascript
const emiCalculator = require('emi-calculator');

const principal = 100000;
const annualInterestRate = 10;
const tenureInYears = 1;

const emi = emiCalculator.calculateEMI(principal, annualInterestRate, tenureInYears);
console.log('EMI:', emi);

const totalPayment = emiCalculator.calculateTotalPayment(emi, tenureInYears);
console.log('Total Payment:', totalPayment);

const totalInterest = emiCalculator.calculateTotalInterest(totalPayment, principal);
console.log('Total Interest:', totalInterest);
```

## API

### `calculateEMI(principal, annualInterestRate, tenureInYears)`

Calculates the Equated Monthly Installment (EMI).

- `principal` (number): The principal loan amount
- `annualInterestRate` (number): The annual interest rate (in percentage)
- `tenureInYears` (number): The loan tenure (in years)
- Returns: `number` - The EMI amount

### `calculateTotalPayment(emi, tenureInYears)`

Calculates the total payment amount over the loan tenure.

- `emi` (number): The EMI amount
- `tenureInYears` (number): The loan tenure (in years)
- Returns: `number` - The total payment amount

### `calculateTotalInterest(totalPayment, principal)`

Calculates the total interest paid over the loan tenure.

- `totalPayment` (number): The total payment amount over the tenure
- `principal` (number): The principal loan amount
- Returns: `number` - The total interest paid

## Tests

To run the tests, use npm:

```bash
npm test
```
