function ecbasica() {
  let masa = parseFloat(prompt(`Introduce la masa`));
  let velocidad2 = parseFloat(prompt(`Introduce la velocidad al cuadrado`));
  let r = velocidad2 * velocidad2 * masa * 0.5;
  swal(
    `
  ENERGIA CINÉTICA`,
    `Formula:
  Ec = v²·m/2 
  -----
  Recursos:
  v² = ${velocidad2}m/s²
  m = ${masa}kg
  ----
  Resultado:
  Ec = ${r}J
  `
  );
}
