var express = require("express");
var router = express.Router();
var chamada = require("../Funcoes/write-all");

router.get("/:valor", function (req, res, next) {
  const numeroExtenso = chamada.converter(req.params.valor);
  res.status(200).send(JSON.stringify("{extenso: " + numeroExtenso + "}"));
});

module.exports = router;