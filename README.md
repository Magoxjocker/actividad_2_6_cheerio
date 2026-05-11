http://localhost:3000/api/libros/categoria/redes
http://localhost:3000/api/libros/categoria/base-de-datos
http://localhost:3000/api/libros/categoria/sistemas-operativos
http://localhost:3000/api/libros/categoria/programacion*

Los endpoints a consultar la api.

pasos a seguir para lograrlo 

En esta evaluación se desarrolló un backend utilizando Node.js, Express y Cheerio. Primero se creó la estructura del proyecto separando las carpetas en rutas, controladores y servicios para mantener el código ordenado. Luego se inicializó el proyecto con npm init -y y se instalaron las librerías express y cheerio mediante npm install express cheerio. El archivo principal app.js se encargó de levantar el servidor en el puerto 3000 y conectar las rutas del sistema. En libroRoutes.js se crearon los endpoints /api/libros, /api/libros/disponibles y /api/libros/categoria/:categoria. El controlador libroController.js recibió las solicitudes del usuario y llamó al servicio correspondiente. En libroService.js se utilizó fs para leer el archivo catalogo.html y Cheerio para recorrer el HTML usando selectores CSS como .libro, .titulo y .autor, permitiendo extraer información como título, autor, ISBN, categoría, estado y ubicación. Finalmente, el sistema devuelve los datos en formato JSON y maneja errores como categorías inexistentes usando códigos HTTP 400, 404 y 500.


Profesor, posiblemente el dia de mañana no pueda presentarme, aun no estoy seguro de cuanto tiempo demore pero debo acompañar al doctor a mi madre.
