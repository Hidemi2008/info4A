import http from "http"

const server = http.createServer((req, res, users) => {


    if(req.method === "POST" && req.url === "/user"){
        res.end(users)
        return
    }
    if(req.method === "GET" && req.url === "/user"){
        res.end(JSON.stringify(users))
        return
    }
})

server.listen(3333)
//localhost:3333