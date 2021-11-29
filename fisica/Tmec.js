function tmecbasica() {
  let fuerza = parseFloat(prompt("Ingrese la fuerza"));
  let distancia = parseFloat(prompt("Ingrese la distancia"));
  let r = fuerza * distancia;
  swal(
    `TRABAJO MECÁNICO`,
    `Formula:
    Tmec. = F·d
    -----
    Recursos: 
    F = ${fuerza}N
    d = ${distancia}m
    -----
    Resultado:
    Tmec. = ${r}J`
  );
}
