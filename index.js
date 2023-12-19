import { createServer } from "node:http";

export const server = createServer((request, response) => {
    response.statusCode = 200;
    response.end("Hello World");        //wird im Brwoser angezeigt
  });


console.log("Hello World!");  //wird nur im Terminal angezeigt

  const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://127.0.0.1:${port}/`);
});