const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
  // build a file name
  const fileName = path.join(
    __dirname,
    "public",
    req.url === "/" ? "index.html" : req.url
  );

  // file extention
  const extname = path.extname(fileName);

  // default content type
  let contentType = "text/html";

  // Check ext and set content type
  switch (extname) {
    case ".js":
      contentType = "text/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".jpg":
      contentType = "image/jpg";
      break;
  }

  fs.readFile(fileName, (err, content) => {
    if (err) {
      if(err.code === "ENOENT"){ 
          fs.readFile(path.join(__dirname, "public", "404.html"), "utf-8",(err, content)=>{ 
            if(err) throw err
            res.writeHead(404,{"Content-Type": "text/html"})
            res.end(content)
        })
      }else{ 
        
        res.writeHead(500)
        res.end(`Server error: ${err}`)
      }
    }else{ 
        res.writeHead(200, { "Content-Type": contentType})
        res.end(content);
    }


  });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log("server is running...");
});
