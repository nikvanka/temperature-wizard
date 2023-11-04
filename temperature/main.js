let celciusInput = document.querySelector('#celcius > input');
let fahrenheitInput = document.querySelector('#fahrenheit > input');
let kelvinInput = document.querySelector('#kelvin > input');

let btn = document.querySelector('.btn button');

// Round off numbers to three decimal.
function roundNumber(num){
    return Math.round(num*100)/100;
}

// Convert temperature from celcius to fahrenheit and kelvin.
function c_To_f_k(){
    let cTemp = parseFloat(celciusInput.value);
    let fTemp = cTemp*(9/5)+32;
    let kTemp = cTemp + 273.15;

    fahrenheitInput.value = roundNumber(fTemp);
    kelvinInput.value = roundNumber(kTemp);
}

// Convert temperature from fahrenheit to celcius and kelvin.
function f_To_c_k(){
    let ftemp = parseFloat(fahrenheitInput.value);
    let cTemp = (ftemp - 32)*(5/9);
    let kTemp = (ftemp - 32)*(5/9)+273.15;

    celciusInput.value = roundNumber(cTemp);
    kelvinInput.value = roundNumber(kTemp);
}

// Convert temperature from kelvin to fahrenheit and celcius.
function k_To_c_f(){
    let kTemp = parseFloat(kelvinInput.value);
    let cTemp = kTemp - 273.15;
    let fTemp = (kTemp - 273.15)*(9/5)+32;

    celciusInput.value = roundNumber(cTemp);
    fahrenheitInput.value = roundNumber(fTemp);
}

// Clear all the value and the current input.
function clear(){
    celciusInput.value = '';
    fahrenheitInput.value = '';
    kelvinInput.value = '';
}

// Convert temperature according to the input.
celciusInput.addEventListener('input', c_To_f_k);
fahrenheitInput.addEventListener('input', f_To_c_k);
kelvinInput.addEventListener('input', k_To_c_f);

// clear input
btn.addEventListener('click', clear);