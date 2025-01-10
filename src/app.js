/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];

  Math.floor(Math.random() * pronoun.length);
  Math.floor(Math.random() * adj.length);
  Math.floor(Math.random() * noun.length);

  document.querySelector("dominio").innerHTML =
    pronoun[rdm1] + adj[rmd2] + noun[rmd3];
};
