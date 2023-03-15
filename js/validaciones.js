//tomar el data attribute
export function valida(input) {
    const tipoDeInput = input.dataset.tipo;
    if (validadores[tipoDeInput]) {            //si dentro de validadores existe [este tipo de input]
        validadores[tipoDeInput](input);      //este input esta vinculado con app.js
    }
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