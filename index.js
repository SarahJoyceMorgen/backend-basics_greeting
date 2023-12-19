import { createServer } from "node:http";

export const server = createServer((request, response) => {
    response.statusCode = 200;
    response.end("Hello World");
  });


  console.log("Hello World!");

  const port = 3000;
server.listen(port, (esponse) => {
  console.log(`Server running at http://127.0.0.1:${port}/`);
});