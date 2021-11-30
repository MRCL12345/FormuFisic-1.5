function emecbasica() {
  let Ec = parseFloat(prompt("Ingresa la Energía Cinética"));
  let Ep = parseFloat(prompt("Ingresa la Energía Potencial"));
  let r = Ec + Ep;
  swal(
    `ENERGIA MECÁNICA`,
    `Formula:
    Emec. = Ec + Ep
    -----
    Recursos:
    Ec = ${Ec}J
    Ep = ${Ep}J
    -----
    Resultado:
    Emec. = ${r}J`
  );
}
