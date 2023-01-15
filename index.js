/* eslint-disable no-undef */
const app = require("./app.js");
const express = require("express");
const path = require("path");

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

app.listen(process.env.PORT || 1320, () => {
  console.log("Started express server ");
});
