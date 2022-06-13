// es un url: /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/
// /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
// numeros enteros positivos y negativos: /^-?\d*(\.\d+)?$/
// solo numeros: ^[0-9]+$
// validacion usuario: /^[a-z0-9_-]{3,16}$/


export function nameValidation (input) {
    let error = {};
    if(!input.name) error.name = 'Every pokemon must have a name';
    else if (!/^[a-z0-9_-]*$/.test(input.name)) error.name = 'The name must have between 3 and 16 characters';
    else if (input.name.length > 16 || input.name.length < 3) error.name = 'The name must have between 3 and 16 characters';
    return error;
}

export function hpValidation (input) {
    let error = {};
    if(!input.hp) error.hp = 'Every pokemon must have health points';
    else if (!/^[0-9]+$/.test(input.hp)) error.hp = 'Must be a round number';
    else if (input.hp > 400 || input.hp < 10) error.hp = 'try with a number between 10 and 400';
    return error;
}

export function atkValidation (input) {
    let error = {};
    if(!input.atk) error.atk = 'Every pokemon must have atack';
    else if (!/^[0-9]+$/.test(input.atk)) error.atk = 'Must be a round number';
    else if (input.atk > 400 || input.atk < 10) error.atk = 'try with a number between 10 and 400';
    return error;
}

export function defValidation (input) {
    let error = {};
    if(!input.def) error.def = 'Every pokemon must have defense';
    else if (!/^[0-9]+$/.test(input.def)) error.def = 'Must be a round number';
    else if (input.def > 400 || input.def < 10) error.def = 'try with a number between 10 and 400';
    return error;
}

export function spdValidation (input) {
    let error = {};
    if(!input.spd) error.spd = 'Every pokemon must have speed';
    else if (!/^[0-9]+$/.test(input.spd)) error.spd = 'Must be a round number';
    else if (input.spd > 400 || input.spd < 10) error.spd = 'try with a number between 10 and 400';
    return error;
}

export function heightValidation (input) {
    let error = {};
    if(!input.height) error.height = 'Every pokemon must have a height'
    return error;
}

export function weightValidation (input) {
    let error = {};
    if(!input.weight) error.weight = 'Every pokemon must have a weight'
    return error;
}

export function typeValidation (input) {
    let error = {};
    if(!input.type) error.type = 'Every pokemon must have at least one type'
    return error;
}

export function imgValidation (input) {
    let error = {};
    if(!input.img) error.img = 'Every pokemon must have an img'
    else if (!/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(input.img)) error.img = 'Must be an url'
    return error;
}