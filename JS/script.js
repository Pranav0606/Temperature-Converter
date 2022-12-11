console.log("Hello World");
const inputDegree = document.getElementById("cel");
const degreeType = document.querySelector("select");
const result = document.getElementById("result");
console.log(result);


function tempChange(number) {
    let floatInput = parseFloat(number);
    if (!isNaN(floatInput)) {
        if (degreeType.value == 'Celcius') {
            result.innerHTML = (floatInput * 1.8) + 32 + '°F';
        }
        else if (degreeType.value == 'Fahrenheit') {
            result.innerHTML = (floatInput - 32) * (5 / 9) + "°C";
        }
    }
    else {
        if (degreeType.value == 'Celcius')
            result.innerHTML = '°F';
        else if (degreeType.value == 'Fahrenheit')
            result.innerHTML = "°C";
    }
}