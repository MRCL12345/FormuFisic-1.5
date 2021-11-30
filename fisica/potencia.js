function pbasica() {
  let tmec = parseFloat(prompt("Introduzca el trabajo mecánico"));
  let t = parseFloat(prompt("Introduzca el tiempo empleado"));
  let r = tmec * t;
  swal(
    `Potencia Basica`,
    `Formula:
    P = Tmec · t
    ------
    Recursos:
    Tmec = ${tmec}
    t = ${t}
    ------
    Resultado:
    P = ${r} Watts`
  );
}
