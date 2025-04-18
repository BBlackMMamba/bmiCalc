const {
    BMI_metric,
    BMI_imperial,
    getBMI
} = require('./modules/bmiCalculator');


//Function Get BMI takes info about Measurement System and provides relevant results.

console.log(getBMI('meTRic'));
console.log(getBMI('IMPERIAL'));