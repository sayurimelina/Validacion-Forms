//tomar el data attribute y agregar la clase css para cambiar color 
export function valida(input) {
    const tipoDeInput = input.dataset.tipo;
    if (validadores[tipoDeInput]) {            //si dentro de validadores existe [este tipo de input]
        validadores[tipoDeInput](input);      //este input esta vinculado con app.js
    }
    //cambio de color
    if (input.validity.valid){
        input.parentElement.classList.remove('input-container--invalid');
        input.parentElement.querySelector('.input-message-error').innerHTML = ''
    } else {
        input.parentElement.classList.add('input-container--invalid');
        input.parentElement.querySelector('.input-message-error').innerHTML = mostrarMensajeDeError(tipoDeInput, input)
    }
}
//array para encontrar el tipo en mensajes de error
const tipoDeErrores = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'customError',
]

//diccionario 
const mensajesDeError = {
    nombre: {
        valueMissing: ' Este campo nombre no puede estar vacio'
    },
    email: {
        valueMissing: ' Este campo correo no puede estar vacio',
        typeMismatch: 'Este correo no es valido'
    },
    password: {
        valueMissing:' Este campo contrasena no puede estar vacio',
        patternMismatch: 'De entre 6 - 12 caracteres.Al menos una letra mayuscula, minuscula, un numero y sin caracteres especiales'
    },
    nacimiento: {
        valueMissing:' Este campo fecha de nacimiento no puede estar vacio',
        customError: 'Debes tener al menos 18 años de edad'
    },
    numero: {
        valueMissing:' Este campo no puede estar vacio',
        patternMismatch: 'Formato requerido es de 10 numeros'
    },
    direccion: {
        valueMissing:' Este campo no puede estar vacio',
        patternMismatch: 'La direccion debe tener entre 10 - 40 carcteres'
    },
    ciudad: {
        valueMissing:' Este campo no puede estar vacio',
        patternMismatch: 'La ciudad debe tener entre 4 - 40 carcteres'
    },
    estado: {
        valueMissing:' Este campo no puede estar vacio',
        patternMismatch: 'La estado debe tener entre 4 - 40 carcteres'
    },
}

function mostrarMensajeDeError(tipoDeInput, input) {
    let mensaje = '';
    tipoDeErrores.forEach( error => {
        if(input.validity[error]){
            console.log(tipoDeInput, error);
            console.log(input.validity[error]);
            console.log(mensajesDeError[tipoDeInput][error]);
            mensaje = mensajesDeError[tipoDeInput][error]
        }
    })
    return mensaje;
}

//nombres del data attribute
const validadores = {
    nacimiento: (input) => validarNacimiento(input),
}


/* ESTO VA SOLO A UN ID - NO LO HACE REUTILIZABLE
const inputNacimiento = document.querySelector("#birth");
inputNacimiento.addEventListener('blur', (evento) => {
    validarNacimiento(evento.target);
});
*/



//valida el input de la fecha de nacimiento
function validarNacimiento(input) {
    const fechaCliente = new Date(input.value);
    let mensaje = '';
    if (!mayorDeEdad(fechaCliente)){
        mensaje = "Debes tener al menos 18 Años";
    };
    input.setCustomValidity(mensaje);
}

//verfica si la fecha de nacimiento + 18 es = o menor al year actual
function mayorDeEdad(fecha) {
    const fechaActual = new Date();
    const diferenciaFechas = new Date(
       fecha.getUTCFullYear() + 18,
       fecha.getUTCMonth(),
       fecha.getUTCDate()
    );
    return diferenciaFechas <= fechaActual;
}