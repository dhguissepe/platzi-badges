# platzi-badges
Single Page Application creada para crear, listar, leer, editar y eliminar cards para una conferencia.

Esta SPA hace uso de bootstrap para la implementación estilos. Además de haberse usado Sass para incluir o sobrescribir unos pocos estilos adicionales.

La build fue creada utilizando webpack. Para más información sobre la configuración de webpack para la build de desarrollo, la creación del dll y la build de producción, puede revisar el archivo webpack.config.js de cada uno.

Para la navegación dentro del sitio web se implementó React Router.

En platzi-badges se hacen uso de los método http (GET, POST, PUT, DELETE) para crear, listar, leer, editar y borrar elementos. En este caso badges de la conferencia. 

En el archivo api.js se encuentran programado los métodos que utilizo para hacer llamadas a la API del servidor de pruebas.

**Nota 1**: Debido a que no cuento con los recursos para comprar un servicio de hosting y colgar un servidor con acceso a dicha base de datos, he decidido subir un archivo JSON en github y usar json-server para hacer la página funcional. Aunque solo puede listar y leer elementos de dicha base de datos.

**Nota 2**: He tenido que crear un segundo repositorio y usar create-react-app junto con la dependencia gh-pages para poder desplegar esta SPA en GitHub de manera rápida. De otra manera pudiera subirla en algún servidor son ningún percance.

Puedes verlo en vivo en: https://dhguissepe.github.io/platzi-badges-CRA
