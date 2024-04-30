# Evaluación modulo 2 Francisca Espinoza

https://beta.adalab.es/modulo-2-evaluacion-final-mfranes/

La página consiste en un buscador de cócteles, los cuales se recuperan desde la API provista por
www.thecocktaildb.com. El resultado muestra los cócteles cuyo título coincida con el criterio de búsqueda 
ingresado por la usuaria, en formato tipo tarjeta; en donde se incluye el título del cóctel y su imagen.

 
### Características funcionales:

- Por defecto, se hace una búsqueda inicial de cócteles de tipo margarita.
- La usuaria puede agregar un cóctel como favorito, haciendo click sobre un cóctel
en la lista de resultados.
- Los cócteles que hayan sido marcados como favoritos en la lista de resultados, cambian sus colores
para que visualmente se distingan de los que no.
- La usuaria puede quitar un cóctel de la lista de favoritos, haciendo click sobre el ícono X.
- Si la usuaria refresca la página, la lista de favóritos se mantienen.


### Características técnicas:

- Los elementos del DOM se han creado desde JS.
- Para el estilo se ha utilizado SCSS.
- Se utiliza el local storage del navegador para almacenar los favoritos seleccionados por 
la usuaria y que se puedan recuperar luego.
- Se ha utilizado Git para el control de versiones.

### Instrucciones para desarrollo
1. Clonar el repositorio: git clone https://github.com/Adalab/modulo-2-evaluacion-final-mfranes
2. Descargar archivos necesarios: npm install
3. Arrancar servidor local: npm start