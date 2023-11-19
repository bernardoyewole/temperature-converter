'use strict';

const input = document.querySelector('.input');
const output = document.querySelector('.output p');
const convert = document.querySelector('.convert');

function toFahrenheit(temp) {
    return (temp * 9 / 5) + 32;
}

function toCelsius(temp) {
    return (temp - 32) * 5 / 9;
}

function isValid(temp) {
    if (isNaN(temp) === false && temp !== '') {
        return true;
    } else {
        return false;
    }
}

window.addEventListener('load', function() {
    input.value = '';
})

convert.addEventListener('click', () => {
    let selected = document.querySelector('input[name="temp"]:checked');
    let temp = parseFloat(input.value);

    if (isValid(temp)) {
        if (selected.value === 'temp-to-F') {
            output.innerText = `${toFahrenheit(temp).toFixed(1)}\u00B0F`;
        } else {
            output.innerText = `${toCelsius(temp).toFixed(1)}\u00B0C`;
        }
    } else {
        output.innerText = 'Please, enter a valid temperature';
    }
})

const theme = document.querySelector('.theme');
const body = document.querySelector('body');
const heading = document.querySelector('h1');
const formInput = document.querySelector('.input');
const formOutput = document.querySelector('.output');
const labels = document.querySelectorAll('label');

// formInput and formOutput share the same styling => '.input, .output {}' 

theme.addEventListener('click', function() {
    body.classList.toggle('light-mode');
    heading.classList.toggle('light-mode-font-color');
    labels.forEach(label => label.classList.toggle('light-mode-font-color'));

    if (formInput.classList.contains('input') ) {
        formInput.classList.remove('input');
        formInput.classList.add('light-mode-form');
        formOutput.classList.remove('output');
        formOutput.classList.add('light-mode-form');
    } else {
        formInput.classList.remove('light-mode-form');
        formInput.classList.add('input');
        formOutput.classList.remove('light-mode-form');
        formOutput.classList.add('output');
    }

    if (this.innerText === 'Light Mode') {
        this.innerText = 'Dark Mode';
    } else {
        this.innerText = 'Light Mode';
    }
})