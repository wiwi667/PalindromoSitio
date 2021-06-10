# Choice Técnico (FRONT) Fernando Ordoñez

Es App cliente en React que permite enviar textos a la API creado con express [https://github.com/wiwi667/ToolBoxAPI](https://github.com/wiwi667/ToolBoxAPI) y muestra las respuestas del API desde la ultima a la primera.

## Descarga
Para descargar, ejecutar el siguiente comando en el directorio deseado:

### `git clone https://github.com/wiwi667/ToolBoxSitio.git ./ToolBoxFO/front`

o si no se desea crear ninguna carpeta adicional, simplemente:
### `git clone https://github.com/wiwi667/ToolBoxSitio.git`

## Instalación
Ingresar al directorio de descarga `./ToolBoxFO/front` (si se crearon las carpetas ./ToolBoxFO/front) y ejecutar
### `npm i`

**Nota:**
Antes de poder ejecutar el front es necesario que ya se encuentre en ejecución el API [https://github.com/wiwi667/ToolBoxAPI](https://github.com/wiwi667/ToolBoxAPI)

Al ingresar al link [http://localhost:3010/iecho?text=qaz](http://localhost:3010/iecho?text=qaz) 
deberiamos tener una respuesta similar a `{"text":"zaq","palindrome":false}`

## Scripts habilitados
En el projecto se puede correr:

### `npm test`
Valida que los métodos del API respondan correctamente

### `npm start`
Levanta un sitio en el puerto 8080 al cual se puede validar con el siguiente link:
[http://localhost:8080](http://localhost:8080) 

### `npm run build`
Genera una versión empaquetada para publicar en el directorio de descarga `.ToolBoxFO/front/dist`

**Nota:**
Para que el sitio funcione desde otro computador es necesario modificar el archivo `.ToolBoxFO/front/src/constantes.index.js` y cambiar la constante `TOOLBOX_API` apuntando al servidor donde se encuentre corriendo el API ejm. `http://192.168.18.49:3010/`

