import { valida } from "./validaciones.js";


//selecciona todos los inputs
const inputs =  document.querySelectorAll('input');


//para cada input da funcion valida
inputs.forEach(input => {
    input.addEventListener('blur', (input) => {
        valida(evento.target);
    })
})
