import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { Express } from 'express';

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Minha API',
      version: '1.0.0',
    },
  },
  apis: ['./src/routes.ts'],
};

const swaggerSpec = swaggerJSDoc(options);

export default (app: Express): void => {
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};