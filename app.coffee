http = require("http")
http.createServer((req, res) ->
  res.writeHead 200,
    "Content-Type": "text/html"

  res.end "htmlLesson12.html"
).listen 1337, "127.0.0.1"
console.log "Server running at http://127.0.0.1:1337/"