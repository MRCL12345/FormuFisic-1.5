<<<<<<< HEAD
function epbasica() {
  let masa = parseFloat(prompt("Introduce la masa"));
  let altura = parseFloat(prompt("Introduce la altura"));
  let r = masa * altura * 9.81;
  swal(
    `
  ENERGIA POTENCIAL`,
    `Formula:
  Ep = m·g·h
  -----
  Recursos:
  m = ${masa}kg
  h = ${altura}m
  g = 9.81m/s²
  -----
  Resultado:
  Ep = ${r}J
  `
  );
}
=======
function epbasica() {
  let masa = parseFloat(prompt("Introduce la masa"));
  let altura = parseFloat(prompt("Introduce la altura"));
  let r = masa * altura * 9.81;
  swal(
    `
  ENERGIA POTENCIAL`,
    `Formula:
  Ep = m·g·h
  -----
  Recursos:
  m = ${masa}kg
  h = ${altura}m
  g = 9.81m/s²
  -----
  Resultado:
  Ep = ${r}J
  `
  );
}
>>>>>>> fb7bc5d2d94794095ae387559eeed47e76fb05a0
