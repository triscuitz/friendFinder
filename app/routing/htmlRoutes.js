const path = require('path');
const express = require('express');

module.exports = function(app) {

  app.use(express.static(__dirname + '../logic'));

  app.get("/style.css", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/style.css"));
  });

  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  app.get("/home", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

};
