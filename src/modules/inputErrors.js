// let passObject = {
//     value: "",
//     required: true,
//     minValue: [true, value],
//     maxValue: [true, value],
//     equal: [true, valueEqual], 

// }

export default function Validacion(value, vacio, minimo, igual) {

    // debugger
    // console.log(value, vacio, cantidad);

    let input = {
        value: value,
        error: null,
        classError: ''
    }

    if (vacio === true) {
        input.error = (input.value === "") ? "Debes llenar este campo" : input.error;
    }

    if (minimo[0] === true && input.error === null) {
        input.error = (input.value.length < minimo[1]) ? `El campo debe contener al menos ${minimo[1]} carácteres` : input.error;
    }

    if(igual[0] === true && input.error === null) {
        input.error = (input.value !== igual[1]) ? `El campo no coincíde con el anterior` : input.error;
    }

    // switch(value) {
        
    // }

    input.classError = (input.error !== null) ? "invalid" : input.classError;

    return input;

}



