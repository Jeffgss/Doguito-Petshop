import { valida } from "./validacao.js";

const inputs = document.querySelectorAll("input");

input.forEach((input) => {
  input.addEventListener("blur", (evento) => {
    valida(evento.target);
  });
});
