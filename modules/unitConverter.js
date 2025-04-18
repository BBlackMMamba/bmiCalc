
//Function calculates units for Metric system

function calcUnits(weight, height) {
    return weight / (height ** 2)
}

//Function calculates units for Imperial system

function calc_Imperial_Units(weight, height) {
    return weight / (height ** 2) * 703;
}

//Function returns user's age

function getGender(value) {
    let result;

    if (value === 'female' || value === 'male') {
        result = value;
    } else {
        result = 'Not Specified';
    }

    return result;
}

//Exported Functions to bmiCalculator.js

module.exports = {
    getGender,
    calcUnits,
    calc_Imperial_Units

};
