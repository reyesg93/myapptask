export const options = {
  definition:{
    openapi: "3.0.0",
    info: {
      title: "tasks api",
      version: "0.1.9"
    },
    servers: [{
      url: "http://localhost:3000"
    }]
  },
  apis: ["./src/routes/**/*.js"]
}