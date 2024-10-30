
# Proyecto Backend

Este es el repositorio del backend para la aplicación. A continuación se presentan las instrucciones para ejecutar el servidor y una descripción técnica del mismo.

## Instrucciones de Ejecución

1. **Clonar el Repositorio**

2. Instalr dependencias con npm install
3. Ejecutar el servidor con npm start

   IMPORTANTE = validar que se ejecute en el puerto 3001
4. probar la api, con una herramienta como postman o la aplicion frontend


#Explicación Técnica
En este proyecto, se implementaron varias características clave para garantizar una estructura modular y segura:

Guard para Rutas: Se creó un guard que protege las rutas utilizando JWT (JSON Web Tokens) para la autenticación. Esto asegura que solo los usuarios autenticados puedan acceder a ciertas rutas, mejorando la seguridad del backend.

Módulos: El código está organizado en módulos, lo que facilita la escalabilidad y el mantenimiento del proyecto. Cada módulo tiene sus propios controladores y servicios, lo que permite una separación de responsabilidades clara. Esto significa que cada módulo se encarga de una parte específica de la funcionalidad del backend.

Controladores y Servicios: Los controladores manejan las solicitudes entrantes y responden adecuadamente, mientras que los servicios encapsulan la lógica de negocio, permitiendo que los controladores se mantengan delgados y enfocados en la gestión de las solicitudes.

Con esta estructura, se busca mejorar la calidad del código y facilitar futuras expansiones del proyecto.
