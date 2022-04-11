# Módulo 2. Evaluación intermedia

El ejercicio consiste en desarrollar un juego de "Dados y Apuestas" usando JavaScript.

> No hace falta usar el Starter kit de Adalab.

## Descripción

El programa genera un numero al azar del dado (número del 1 al 6). En el juego la usuaria empieza con 50
euros para apostar. El usuario decide a que número apuesta del 1 al 6, y también que cantidad de euros
quiere apostar. Si la usuaria acierta el número, gana el doble de lo que ha apostado, si no acierta, pierde
todo lo apostado. El juego acaba cuando la usuaria llega a 0 euros o al llegar a 200 euros.

## Indicaciones

- En la parte superior, la jugadora selecciona el número del 1 al 6 que quiere apostar y le da click en el
  botón `Jugar`.
- Debajo, en el próximo apartado aparecen los siguientes textos:
  - Al arrancar la página: **¡Vamos a Jugar!**.
  - Cuando la jugadora introduzca un número que coincida con el número aleatorio, se muestra el
    mensaje: **Has ganado el doble de lo apostado**.
  - Cuando la jugadora introduzca un número que no coincida con el número aleatorio, se muestra
    el mensaje: **Has perdido lo apostado**.

### Pasos para realizar el juego

Para realizar el juego tenemos que realizar las siguientes funcionalidades desde JavaScript:

1. Crear una maquetación mínima con el select, el botón y el espacio para el resultado.

2. Generar un número aleatorio entre 1 y 6 con la ayuda de Math.random y Math.ceil. Puedes usar la
   siguiente función, copia estas 3 líneas de código en vuestro JS y no las modifiquéis:

```javascript
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
```

3. Comparar el número que la jugadora ha seleccionado con el número aleatorio y pintar el resultado
   correspondientes en la pantalla.

Según vayas trabajando en el ejercicio, haz nuevas versiones del mismo y sube los cambios a GitHub. De
esta forma podremos ver cómo vas avanzando. También publica el resultado usando GitHub Pages
(recuerda configurarlo en las preferencias del proyecto) y pon el enlace a GitHub Pages en la descripción del repositorio.

### Bonus

Si te queda tiempo y quieres completar las funcionalidades del juego, puedes hacer lo siguiente:

- En la parte inferior debe aparecer la cantidad de dinero que tiene la jugadora. Agrega el código
  necesario para que la usuaria seleccione una cantidad a apostar, y en dependencia si gana o pierde
  esta cantidad se actualice.
- El juego finaliza cuando la usuaria llegue a 200 euros, agrega el código necesario para que se
  muestre un botón `Reiniciar Juego` que vuelva a iniciar el juego cuando se cumpla esta condición y
  desaparezca el botón de `Jugar`.
- Cuando le demos click a al botón `Reiniciar Juego` desaparece este botón, poner todos los contadores a cero y vuelve a aparecer el botón `Jugar`.
- Cuando finalice el juego, muestra quién ha ganado la partida: la computadora o la usuaria.
- Saca tu lado creativo y maqueta y decora tu página con estilo.

> Recuerda esto es un bonus, no pasa nada si no lo haces!

## Entrega

La evaluación solo se considerará terminada cuando:

- Esté publicada en GitHub Pages (apuntando a la rama main/master) y esté funcionando.
- El enlace a GitHub Pages esté en la página página principal del repositorio, en la parte superior, al
  lado de la descripción.
- Debéis hacer commits y merges a la rama main/master solo hasta las **11:10**. No hagáis commit a la
  rama main/master después de esa hora.

_Info completa e imágenes en el .pdf incluido en documents_
