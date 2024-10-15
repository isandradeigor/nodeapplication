const express = require("express");
const app = express();

app.listen(3000, function (erro) {
    if (erro) {
        console.log("Erro ao iniciar");
    } else {
        console.log("Servidor iniciado");
        console.log("IP do servidor: http://localhost:3000");
    }
})

app.get("/", function (req, res) {
    res.send("Bem-vindo a primeira pagina!");
})

app.get("/produtos", function (req, res) {
    res.send("Comprar item!");
})

app.get("/perfil", function (req, res) {
    res.send("Pagina de perfil.");
})

app.get("/home", function (req, res) {
    res.send("Home page, bem-vindo!");
})

app.get("/OLA", function (req, res) {
    res.send("Home page, bem-vindo!");
})