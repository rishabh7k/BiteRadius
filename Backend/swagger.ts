const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Your API",
      version: "1.0.0",
      description: "A sample API for learning Swagger",
    },
    servers: [
      {
        url: `http://localhost:`,
      },
    ],
  },
  apis: ["./src/**/*.ts"], // Path to the API docs
};

// const swaggerDocs = swaggerJsdoc(swaggerOptions);
// app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// /**
//  * @swagger
//  * /:
//  *   get:
//  *     summary: Returns a hello world message
//  *     responses:
//  *       200:
//  *         description: Hello World!
//  *         content:
//  *           text/plain:
//  *             schema:
//  *               type: string
//  *               example: Hello World!
//  */
// app.get("/", (req: Request, res: Response) => {
//   res.send("Hello World!");
// });

// /**
//  * @swagger
//  * /endpointx:
//  *   get:
//  *     summary: Returns a message from endpointx
//  *     responses:
//  *       200:
//  *         description: A message from endpointx
//  *         content:
//  *           text/plain:
//  *             schema:
//  *               type: string
//  *               example: This is endpointx!
//  */
