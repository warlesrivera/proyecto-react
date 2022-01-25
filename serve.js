const jsonServer = require("json-server");
const Server = jsonServer.create();
const router = jsonServer.router("./data/db.json");

const port = process.env.PORT ||3000;

Server.use(router);
Server.listen(port,()=>{
    console.log(`Server is running on ${port}`)
});