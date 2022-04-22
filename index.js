const subtotal = 19.75;
const taxRate = 0.07;

function calculateTax(subtotal, taxRate) {
    const tax = subtotal * taxRate;
    return tax;
}

const myTax = calculateTax(subtotal, taxRate);
const myTotal = calculateTotal(subtotal, myTax);

function calculateTotal(subtotal, tax){
    return subtotal + tax;
}



console.log('SubTotal:       ', subtotal.toFixed(2));
console.log('Tax:         ', myTax.toFixed(2));
console.log('---------------------');
console.log('TOTAL:', myTotal.toFixed(2));
