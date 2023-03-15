01 Validaciones con HTML

Validación con los atributos required y type.
Utilizar reglas del regex dentro del atributo pattern para validar el campo de contraseña.
Mandar un mensaje customizado de error en el navegador.


regex password

^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?!.*[ !@#$%^&*_=+-]).{6,12}$
^ evalua todo esto con esta logica
?= vamos a aceptar caracteres
?! no aceptamos estos caractares
. no salto de linea
* al menos una vez
.{6,12} de entre a 6-2 carcteres
