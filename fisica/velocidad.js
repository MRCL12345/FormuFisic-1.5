function vbasica() {
  let distancia = parseFloat(prompt("Introduce tu distancia"));
  let tiempo = parseFloat(prompt("Introduce el tiempo"));
  let r = distancia / tiempo;
  swal(
    `Velocidad`,
    `Formula:
    v = d/t
    -----
    Recursos:
    d = ${distancia}m
    t = ${tiempo}s
    -----
    Resultado: 
    v = ${r}m/s`
  );
}
