import swaggerJsdoc from 'swagger-jsdoc';

export const swaggerOptions: swaggerJsdoc.Options = {
  swaggerDefinition: {
    info: {
      title: 'Bad Souls API',
      version: '1.0',
    },
  },
  apis: ['**/routes/*.ts'],
};
