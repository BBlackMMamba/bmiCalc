const convertToMeter = require('../utils/convertToMeter');
const { calcUnits, getGender } = require('../modules/unitConverter');

function BMI(weight, height, gender) {
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

    return `👋 You identified as ${gender} and your BMI category lands in the ${result} range`;
}


console.log(BMI(120, 169, 'male'));