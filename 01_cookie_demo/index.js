const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  // Cookieを設定
  res.setHeader(
    "Set-Cookie",
    "username=JohnDoe; Path=/; HttpOnly; max-Age=3600; SameSite=Strict",
  );
  // Cookieを設定
  res.setHeader(
    "Set-Cookie",
    "yourname=hoge; Path=/; HttpOnly; max-Age=3600; SameSite=Strict",
  );



  const htmlPath = !req.url || req.url === "/" ? "index.html" : req.url;

  fs.readFile("./public/" + htmlPath, function (err, data) {
    // レスポンスを返す
    if (!err) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
