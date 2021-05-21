// let passObject = {
//     value: "",
//     required: true,
//     minValue: [true, value],
//     maxValue: [true, value],
//     equal: [true, valueEqual], 
// }

export default function Validacion(value, required, minValue = [null], equal = [null], lower = null, upper = null) {

    // debugger
    // console.log(value, vacio, cantidad);

    let input = {
        value: value,
        error: null,
        classError: ''
    }

    if (required === true) {
        input.error = (input.value === "") ? "Debes llenar este campo" : input.error;
    }

    if (minValue[0] === true && input.error === null) {
        input.error = (input.value.length < minValue[1]) ? `El campo debe contener al menos ${minValue[1]} carácteres` : input.error;
    }

    if(equal[0] === true && input.error === null) {
        input.error = (input.value !== equal[1]) ? `El campo no coincíde con el anterior` : input.error;
    }

    if(lower === true && input.error === null) {
        input.error = (!input.value.test(/^[a-z0-9 ]+$/)) ? 'El campo debe contener al menos 1 minúscula' : input.error 
    }

    if(upper === true && input.error === null) {
        input.error = (!input.value.test(/^[a-z0-9 ]+$/)) ? 'El campo debe contener al menos 1 minúscula' : input.error 
    }

    input.classError = (input.error !== null) ? "invalid" : input.classError;

    return input;

}



