// es un url: /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/
// numeros enteros positivos y negativos: /^-?\d*(\.\d+)?$/
// solo numeros: ^[0-9]+$
// validacion usuario: /^[a-z0-9_-]{3,16}$/


export function nameValidation (input) {
    let error = '';
    if(!input) error = 'Every pokemon must have a name';
    else if (!/^[a-z0-9_-]*$/.test(input)) error = 'No capital letters or symbols allowed';
    else if (input.length > 16 || input.length < 3) error = 'The name must have between 3 and 16 characters';
    return error;
}

export function hpValidation (input) {
    let error = '';
    if(!input) error = 'Every pokemon must have health points';
    else if (!/^[0-9]+$/.test(input)) error = 'try with a round number';
    else if (input > 400 || input < 10) error = 'try with a number between 10 and 400';
    return error;
}

export function atkValidation (input) {
    let error = '';
    if(!input) error = 'every pokemon must have atack';
    else if (!/^[0-9]+$/.test(input)) error = 'try with a round number';
    else if (input > 400 || input < 10) error = 'try with a number between 10 and 400';
    return error;
}

export function defValidation (input) {
    let error = '';
    if(!input) error = 'every pokemon must have defense';
    else if (!/^[0-9]+$/.test(input)) error = 'try with a round number';
    else if (input > 400 || input < 10) error = 'try with a number between 10 and 400';
    return error;
}

export function spdValidation (input) {
    let error = '';
    if(!input) error = 'every pokemon must have speed';
    else if (!/^[0-9]+$/.test(input)) error = 'try with a round number';
    else if (input > 400 || input < 10) error = 'try with a number between 10 and 400';
    return error;
}

export function heightValidation (input) {
    let error = '';
    if(!input) error = 'every pokemon must have height';
    else if (!/^[0-9]+$/.test(input)) error = 'try with a round number';
    else if (input > 100 || input < 1) error = 'try with a number between 1 and 100';
    return error;
}

export function weightValidation (input) {
    let error = '';
    if(!input) error = 'every pokemon must have height';
    else if (!/^[0-9]+$/.test(input)) error = 'try with a round number';
    else if (input > 3000 || input < 1) error = 'try with a number between 1 and 3000';
    return error;
}

export function typeValidation (input) {
    let error = '';
    if(!input) error = 'every pokemon must have at least one type';
    else if(input === 'repeted') error = 'you already choose that type';
    else if(input === 'max2') error = 'your pokemon cant have more than 2 types'
    return error;
}

export function imgValidation (input) {
    let error = '';
    if(!input) error = 'every pokemon must have an img';
    else if (!/^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/.test(input)) error = 'try with an url'
    return error;
}