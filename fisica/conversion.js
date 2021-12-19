//! MENSAJE GENERAL
function convertidor() {
  swal(
    `A que propiedad vas a poner para realizar la conversion con su unidad?`,
    {
      buttons: {
        Potencia: "Potencia",
        cancel: "Cancelar",
        catch: {
          text: "distancia",
          value: "catch",
        },
        masa: true,
        temperatura: "Temperatura",
      },
    }
  ).then((value) => {
    switch (value) {
      case "masa":
        convertkg();
        break;
      case "catch":
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
      catch: {
        text: "cm",
        value: "catch",
      },
      km: true,
    },
  }).then((value) => {
    switch (value) {
      case "km":
        km_a_m();
        break;

      case "catch":
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
      catch: {
        text: "g",
        value: "catch",
      },
      T: true,
    },
  }).then((value) => {
    switch (value) {
      case "T":
        T_a_kg();
        break;

      case "catch":
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
      catch: {
        text: "Watts",
        value: "catch",
      },
      hp: true,
    },
  }).then((value) => {
    switch (value) {
      case "hp":
        hp_a_Watts();
        break;

      case "catch":
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
    swal(`Tienes: ${parseFloat(value) / 745.7}hp`);
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
      ${(parseFloat(value) * 1, 8) + 32} °F
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
      ${(parseFloat(value) / 1, 8) - 32} °C`
    );
  });
}
