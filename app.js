const http = require("http");
const express = require("express");
const app = express();

//Codificar request / result

app.get('/', (req, res)=>{
    res.send("Iniciamos servicios")
})

const puerto = 3000;
app.listen(puerto,()=>{
    console.log("Escuchando ");
})