function calcUnits(a, b) {
    return a / (b ** 2)
}
function getGender(value) {
    let result;

    if (value === 'female' || value === 'male') {
        result = value;
    } else {
        result = 'Not Specified';
    }

    return result;
}

module.exports = {
    getGender,
    calcUnits
};