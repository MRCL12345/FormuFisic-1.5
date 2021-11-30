function tbasica() {
  let f = parseFloat(prompt("Introduzca la fuerza"));
  let d = parseFloat(prompt("Introduzca la distancia"));
  let r = f * d;
  swal(
    `Trabajo`,
    `Formula:
    W = f · d
    ------
    Recursos:
    F = ${f}
    d = ${d}
    ------
    Resultado: 
    W = ${r}J`
  );
}
