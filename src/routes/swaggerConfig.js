//npm install swagger-jsdoc swagger-ui-express --save
//swagger-jsdoc :define la documentación Swagger en el código de tu aplicación
//swagger-ui-express: la interfaz web interactiva para ver la documentación Swagger.


const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Opciones de configuración de Swagger
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API de Mi Aplicación',
            version: '1.0.0',
            description: 'Documentación de la API de Mi sistema INSO 2',
        },
        servers: [
            {
            url: 'http://localhost:3001', // URL de tu servidor Node.js
            },
        ],
    },
    apis: ['routes/*.js'], // Rutas de tus controladores o endpoints PUEDO CAMBIAR
};

const specs = swaggerJsdoc(options);

module.exports = (app) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
};
//http://localhost:3001/api-docs/ PARA ABRIRLO
