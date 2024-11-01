import swaggerJsDoc from "swagger-jsdoc";

const options: swaggerJsDoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Node.js API with Prisma & JWT",
      version: "1.0.0",
      description:
        "API documentation for the Node.js project using Prisma and JWT.",
    },
    servers: [
      {
        url: "http://localhost:3000", // Update this to match your server's URL
      },
    ],
  },
  apis: ["./src/routes/*.ts"], // Update with the correct path to your route files
};

export default swaggerJsDoc(options);
