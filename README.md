This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Objetivo

El ejercicio consiste en desarrollar una página web con un listado de personajes de Rick and Morty, que
podemos filtrar por el nombre del personaje. Vamos a usar React para realizarlo.

### Puntos a desarrollar

Listado de personajes
Filtrado de personajes
Componentes del listado de personajes
Detalle de personajes
Detallitos de calidad:
Como nos gusta cuidar la semántica, el campo de texto debe estar recubierto por una etiqueta <form
    />.
Si estando en el campo de filtrado pulsamos intro debéis impedir que el navegador navegue o cambie
la ruta sin querer.
Si se busca por un texto por ejemplo "XXX" y no hay ningún personaje que coincida con dicho texto se
debe mostrar un mensaje del tipo "No hay ningún personaje que coincida con la palabra XXX".
El filtro debe filtrar independientemente de que la usuaria introduzca el texto en mayúsuclas o
minúsculas.
Al entrar en el detalle de un personaje y a continuación pulsar atrás, el campo de texto debe mostrar el
texto que tenía anteriormente.

### BONUS: Mejoras visuales

Para terminar, podéis realizar algunas mejoras visuales del ejercicio. Por ejemplo:
Mostrar la especie y si un personajes está muerto con un icono.
Usar algún sistema de grid para pintar el listado de personajes.
Que funcione bien el responsive en dispositivos pequeños.

### BONUS: URL compartible

Como ejercicio extra os proponemos que la URL del detalle de personaje sea compartible, es decir, que
si visitamos esa URL directamente en el navegador se vea el detalle del personaje.
Y en el caso de que el usuario navegue a una URL inexistente como por ejemplo
http://localhost:3000/#/detail/12345 (el id 12345 no existe) debemos mostrar un mensaje del
tipo "El personaje que buscas no existe".

### BONUS: Ordenación

Un extra interesante sería que ordenáseis el listado de personajes alfabéticamente por nombre.
