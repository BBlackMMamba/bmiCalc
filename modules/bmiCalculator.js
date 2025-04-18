//Imports Functions from convertToMeter.js and unitConverter.js

const convertToMeter = require('../utils/convertToMeter');
const {
    getGender,
    calcUnits,
    calc_Imperial_Units
} = require('../modules/unitConverter');

//Function calculates BMI for Imperial system

function BMI_imperial(weight, height, gender) {
    let genderBMI = getGender(gender);
    let units = calc_Imperial_Units(weight, height);
    let result;

    if (units < 18.5) {
        result = 'Underweight'
    } else if (units === 18.5 || units < 24.9) {
        result = 'normal'
    } else if (units === 25 || units < 29.9) {
        result = 'Overweight'
    } else if (units > 30) {
        result = 'Obese'
    }

    return `👋 You identified as ${gender} and your BMI category lands in the ${result} range!`;
}

//Function calculates BMI for Metric system

function BMI_metric(weight, height, gender) {
    let genderBMI = getGender(gender);
    let heightInMtr = convertToMeter(height);
    let units = calcUnits(weight, heightInMtr);
    let result;

    if (units < 18.5) {
        result = 'Underweight'
    } else if (units === 18.5 || units < 24.9) {
        result = 'normal'
    } else if (units === 25 || units < 29.9) {
        result = 'Overweight'
    } else if (units > 30) {
        result = 'Obese'
    }

    return `👋 You identified as ${gender} and your BMI category lands in the ${result} range!`;
}

//Function calculates BMI index per chosen measurement system:

function getBMI(measurementSystem) {
    let measureSys = measurementSystem.toLowerCase();
    let result;
    if (measureSys === 'metric') {
        result = console.log(BMI_metric(65, 169, 'female'));
    } else if (measureSys === 'imperial') {
        result = console.log(BMI_imperial(85.5, 5.4, 'male'));
    } else {
        'Incorrect Entry. Try Again.'
    }
}

//Exported Functions to index.js

module.exports = {
    BMI_metric,
    BMI_imperial,
    getBMI
};