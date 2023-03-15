github proyecto Base
https://github.com/alura-es-cursos/1842-html-validaciones/tree/proyecto_inicial

01 Validaciones con HTML

Validación con los atributos required y type.
Utilizar reglas del regex dentro del atributo pattern para validar el campo de contraseña.
Mandar un mensaje customizado de error en el navegador.

02 VALIDACION DE Contraseñas

regex password

^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?!.*[ !@#$%^&*_=+-]).{6,12}$
^ evalua todo esto con esta logica
?= vamos a aceptar caracteres
?! no aceptamos estos caractares
. no salto de linea
* al menos una vez
.{6,12} de entre a 6-2 carcteres

03 VALIDACION DE FECHAS

element.setCustomValidity(mensaje)
element.dataset.dataAttributeName

04

$0 validity  //revisa la validity de un elemento en el cual se encuentra ' valid: true '
Como enseñar el mensaje de error directamente en el HTML.
Como customizar los mensajes de error de validación.

*motivaciones para no utilizar el mensaje padrón del navegador:
cambia dependiendo del navegador
el idioma puede variar
el estilo es estatico

05
