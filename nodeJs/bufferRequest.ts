import * as http from "http";

const server = http.createServer((request, response) => {
  let body: Buffer[] = [];
  let body2Sting: string;
  request.on("data", (chunk) => {
    console.log(chunk);
    body.push(chunk);
  });
  request.on("end", () => {
    body2Sting = Buffer.concat(body).toString();
  });
  response.setHeader("Content-type", "text/html");
  response.write(
    '<h2>First local server</h2><form method="POST" action="/"><input type="text" name="user-name"/><button type="submit">Send<?button></form>'
  );
  response.end();
});
server.listen(3030);
