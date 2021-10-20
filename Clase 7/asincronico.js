console.log(false|3==4)
// Si bien JavaScript lee e interpreta la sentencia y retorna un 0, hay un error de sintaxis, ya que la forma correcta de usar los operadores lógicos es con símbolos dobles ("||" y "&&").

console.log('Gato' && 'Perro') 
// En el caso de los strings y el operador &&, al ser ambos strings verdaderos (ya que tienen una cadena de caracteres), la respuesta es el último string de la sentencia.

console.log('Gato' || 'Perro')
// A diferencia del operador &&, en este caso —al tener que cumplirse solo una condición—, como ambos son true, la respuesta es la primera sentencia true encontrada.

