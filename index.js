// const subtotal = 19.75;
// const taxRate = 0.07;
// 
// function calculateTax(subtotal, taxRate) {
    // const tax = subtotal * taxRate;
    // return tax;
// }


// const myTax = calculateTax(subtotal, taxRate);
// const myTotal = calculateTotal(subtotal, myTax);
// 
// function calculateTotal(subtotal, tax){
    // return subtotal + tax;
// }




// console.log('SubTotal:       ', subtotal.toFixed(2));
// console.log('Tax:         ', myTax.toFixed(2));
// console.log('---------------------');
// console.log('TOTAL:', myTotal.toFixed(2));



// const usd = 19.75;
// const pounds = 0.78;

// function convertCurrency (curency,conversionRate){
//         const curreturn = curency * conversionRate;
//         return curreturn;
// }
// console.log (convertCurrency(usd,pounds));
// const result = convertCurrency(usd,pounds);

// console.log(`${usd.toFixed(2)} in USD is ${result.toFixed(2)} pounds`)

const Fah = 100
const cel= 32



function converttemp (temp1) {
    const returntemp = (temp1 - 32) * 5/9
    return ((temp1 -32) * 5/9).toFixed(0)
}

const res = converttemp(Fah)
console.log("100 in Fahrenheit is", res);

