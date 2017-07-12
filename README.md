# Prueba de Ventanas Modales, Onpromise y Minificado con cg-angular

Este proyecto muestra una pequeña app que invoca a un servicio, da un ejemplo de directiva de loading, recibe el servicio onpromise y también permite ver una ventana modal usando las componentes para integrar bootstrap 3 con angular: ui-bootstrap. Finalmente esta app permite hacer un minificado exitoso, tomando en consideración la forma como funcionan las ventanas modales y su invocación. 

## Getting Started

Estas instrucciones son para que pueda descargar este proyecto en su ambiente local (pensado para un ambiente linux aunque en windows funciona con algunas variaciones).

### Prerequisites

Preferentemente, linux y acceso a internet. Esta app requiere de Npm, bower, grunt y grunt-cli para poder bajar las dependencias y ejecutar el minificado.


### Installing

Paso a paso, pasito a pasito (que porquería de canción), instalando nodejs con yum (que es parte de nodejs), este paso se puede omitir en la máquina virtual del SII. 

```
sudo yum install nodejs
```

Luego se instala yeoman (generador de código que puede ser útil), bower, grunt y otros.

```
npm install -g grunt-cli yo bower
```

Y se instala el generador de proyectos con el cual se ha creado el presente

```
npm install -g generator-cg-angular
```

Ahora dentro del directorio del proyecto descargado, se bajaran todos los paquetes npm para que nuestro proyecto funcione, para eso npm utiliza el archivo package.json

```
npm install
```

Luego de una larga descarga, se bajan las bower_components que son las componentes propias de la aplicación (archivos js, css, etc)

```
bower install
```

## Corriendo la aplicación

Ejecutando grunt para que abra un server en el puerto 9001 vía http, con force ya que así omite los warnings javascript. 

```
grunt serve --force
```

Así ya puede ingresar vía http://localhost:9001/

### Minificado

La versión minificada se construye en el directorio dist, con el siguiente comando:

```
grunt build --force
```

Luego ejecuta el server para probar la versión minificada

```
grunt serve --force
```

y acceda vía http://localhost:9001/dist


## Built With

* [cg-angular](https://github.com/cgross/generator-cg-angular) - La palta de los generadores de AngularJS

## Contributing

A mi mamá y a Middleware.

## Versioning

Intentaré usar [SemVer](http://semver.org/) para el versionado de esto, por ahora, está todo en el master. Para ver las versiones disponibles, [tags de este repository](https://github.com/inukisoft/testmodalminify/tags). 

## Authors

* **Constantino Alarcón Mery** - *Initial work* - [inukisoft](https://github.com/inukisoft)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* A la avena quaker 
* A mi mamá
* A Middleware y a ti <3 

