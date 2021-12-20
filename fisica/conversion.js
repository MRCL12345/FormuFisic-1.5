//! MENSAJE GENERAL
function convertidor() {
  swal(
    `A que propiedad vas a poner para realizar la conversion con su unidad?`,
    {
      buttons: {
        Potencia: "Potencia",
        cancel: "Cancelar",
        distancia: "Distancia",
        masa: "Masa",
        temperatura: "Temperatura",
      },
    }
  ).then((value) => {
    switch (value) {
      case "masa":
        convertkg();
        break;
      case "distancia":
        convertmetros();
        break;
      case "Potencia":
        converthpw();
        break;
      case "temperatura":
        temperatura();
        break;
    }
  });
}
//! CONVERSIONES A METROS
//_-----------------------------MENSAJE
function convertmetros() {
  swal("Que quieres convertir a metros?", {
    buttons: {
      cancel: "Cancelar",
      cm: "cm",
      km: "km",
    },
  }).then((value) => {
    switch (value) {
      case "km":
        km_a_m();
        break;

      case "cm":
        cm_a_m();
        break;

      default:
    }
  });
}
//_-----------------------------OPERADOR
function km_a_m() {
  swal(`Introduce tus kilometros`, {
    content: "input",
  }).then((value) => {
    swal(`Tienes: ${parseFloat(value) * 1000}m`);
  });
}
function cm_a_m() {
  swal(`Introduce tus centimetros`, {
    content: "input",
  }).then((value) => {
    swal(`Tienes: ${(parseFloat(value) * 1) / 100}m`);
  });
}

//!-----------------------------CONVERSIONES A KILO GRAMOS
//_-----------------------------MENSAJE
function convertkg() {
  swal("Que quieres convertir a kilogramo?", {
    buttons: {
      cancel: "Cancelar",
      g: "g",
      T: "T",
    },
  }).then((value) => {
    switch (value) {
      case "T":
        T_a_kg();
        break;

      case "g":
        g_a_kg();
        break;

      default:
    }
  });
}
//_-----------------------------OPERADOR
function T_a_kg() {
  swal(`Introduce tus Toneladas`, {
    content: "input",
  }).then((value) => {
    swal(`Tienes: ${parseFloat(value) * 1000}kg`);
  });
}
function g_a_kg() {
  swal(`Introduce tus gramos`, {
    content: "input",
  }).then((value) => {
    swal(`Tienes: ${parseFloat(value * 1) / 1000}kg`);
  });
}

//!---------CONVERSIONES DE WATTS Y HP---------
//-----Mensaje
function converthpw() {
  swal("Que quieres convertir?", {
    buttons: {
      cancel: "Cancelar",
      watts: "Watts",
      hp: "hp",
    },
  }).then((value) => {
    switch (value) {
      case "hp":
        hp_a_Watts();
        break;

      case "watts":
        Watts_a_hp();
        break;

      default:
    }
  });
}
//-----Operador
function Watts_a_hp() {
  swal("Introduce los Watts", {
    content: "input",
  }).then((value) => {
    swal(`Tienes: ${parseFloat(value) / 745.7} hp`);
  });
}
function hp_a_Watts() {
  swal(`Introduce los caballos de fuerza`, {
    content: "input",
  }).then((value) => {
    swal(`Tienes: ${parseFloat(value) * 745.7} Watts`);
  });
}
//!-------------------------------CONVERSION DE TEMPERATURA
//mensaje
function temperatura() {
  swal(`Qué unidades de temperatura tienes?`, {
    buttons: {
      celsius: "Celsius",
      fahrenheit: "Fahrenheit",
      kelvin: "Kelvin",
    },
  }).then((value) => {
    switch (value) {
      case "celsius":
        celsius();
        break;
      case "fahrenheit":
        fahrenheit();
        break;
      case "kelvin":
        kelvin();
        break;
    }
  });
}
//- operador
function celsius() {
  swal(`Introduce tus grados Celsius`, {
    content: "input",
  }).then((value) => {
    swal(
      `Tienes: 
      ${(parseFloat(value) * 9) / 5 + 32} °F
      ${parseFloat(value) + 273.15} K`
    );
  });
}
function fahrenheit() {
  swal(`Introduce tus grados Fahrenheit`, {
    content: "input",
  }).then((value) => {
    swal(
      `Tienes:
      ${parseFloat(value) - 32 * (5 / 9)} °C
      ${(parseFloat(value) - 32) * (5 / 9) + 273.15} K`
    );
  });
}
function kelvin() {
  swal(`Introduce tus Kelvin`, {
    content: "input",
  }).then((value) => {
    swal(`
    Tienes:
    ${((parseFloat(value) - 273.15) * 9) / 5 + 32} °F
    ${value - 273.15} °C`);
  });
}
