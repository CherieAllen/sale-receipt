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

// const Fah = 100
// const cel= 32



// function converttemp (temp1) {
//     const returntemp = (temp1 - 32) * 5/9
//     return ((temp1 -32) * 5/9).toFixed(0)
// }

// const res = converttemp(Fah)
// console.log("100 in Fahrenheit is", res);


const Fah = 100
const Cel = 37

function converttemp (temp1) { 
    const returntemp = (temp1 -32) * 5/9
    return ((temp1 -32) * 5/9).toFixed(0)
}

    const res = converttemp (Fah)
    console.log("100 in Fahrenheit is", res, "in Celsius");


function converttemp2 (temp1) {
    const returntemp2 = (temp1- 32) * 5/9 + 273.15
    return ((temp1- 32) * 5/9 + 273.15).toFixed(0)

}

    const res2 = converttemp2(Fah)
    console.log (" 100 in Fahrenheit is", res2, "in Kelvin");

function converttemp3 (temp3) {
    const returntemp3 = ((temp3 * 9/5) + 32)
    return ((temp3 * 9/5) + 32)
}

const res3 = converttemp3(Cel)
console.log(" 37 degrees in Celsius is", res3, "in Fahrenheit")
