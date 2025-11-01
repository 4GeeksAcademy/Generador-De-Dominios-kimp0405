import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {

  const pronoun = ['the', 'our'];
  const adj = ['-magallan', '-geni','-camp','-bea','-plan','-inter','-foc'];
  const noun = ['.us', '.es','.com','.net'];

  function generarDominios() {
    const dominios = [];
    for (let p of pronoun) {
      for (let a of adj) {
        for (let n of noun) {
          dominios.push(`${p}${a}${n}`);
        }
      }
    }
    return dominios;
  }

  const lista = generarDominios();
  console.log('Dominios generados:');
  lista.forEach(d => console.log(d));

  const output = document.querySelector('#generadorDeDominio');
    output.innerHTML = lista.join('<br>');
}