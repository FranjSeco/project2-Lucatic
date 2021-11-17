class Carta {
  constructor(numero, palo, imagen, valor, propietario) {
    this.numero = numero;
    this.palo = palo;
    this.imagen = imagen;
    this.valor = valor;
    this.propietario = propietario;
  }
}

if (document.querySelector("#once") == null) {
  console.log("ERROR");
} else {
  document.querySelector("#once").disabled = true;
}

if (document.querySelector("#coger") == null) {
  console.log("ERROR");
} else {
  document.querySelector("#coger").style.cursor = "pointer";
}

if (document.querySelector("#plant") == null) {
  console.log("ERROR");
} else {
  document.querySelector("#plant").style.cursor = "pointer";
}

let mazo = [];
let palos = ["Corazones", "Treboles", "Diamantes", "Picas"];
let palosLetra = ["H", "C", "D", "S"];
let numCartas = 52;
let puntajeUsuario = 0;
let puntajeMaquina = 0;
let mano = [];
let contador = 0;
var turno = "jugador";
let aleatorio;
let dineroApostado = parseFloat(
  prompt("Introduce la cantidad de dinero a apostar en esta partida:")
);

let modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.getElementById("myBtn");

let contenedor = document.querySelector(".contenedor");

// When the user clicks on the button, open the modal
function information() {
  modal.style.display = "flex";
  modal.style.transitionDelay = "2s";
  modal.style.alignContent = "center";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    btn.style.display = "inline";
    modal.style.display = "none";
  }
};

let modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.getElementById("myBtn");

let contenedor = document.querySelector(".contenedor");

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "flex";
  modal.style.transitionDelay = "2s";
  modal.style.alignContent = "center";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    btn.style.display = "inline";
    modal.style.display = "none";
  }
};

///SE GENERA EL MAZO

function generarMazo() {
  for (let j = 0; j < palos.length; j++) {
    for (let i = 1; i < 13 + 1; i++) {
      if (i == 1) {
        mazo.push(
          new Carta(
            i,
            palos[j],
            "https://deckofcardsapi.com/static/img/A" + palosLetra[j] + ".png",
            1,
            "x "
          )
        );
      }
      if (i == 10) {
        mazo.push(
          new Carta(
            i,
            palos[j],
            "https://deckofcardsapi.com/static/img/0" + palosLetra[j] + ".png",
            i,
            "x "
          )
        );
      }
      if (i == 11) {
        mazo.push(
          new Carta(
            i,
            palos[j],
            "https://deckofcardsapi.com/static/img/J" + palosLetra[j] + ".png",
            10,
            "x "
          )
        );
      }
      if (i == 12) {
        mazo.push(
          new Carta(
            i,
            palos[j],
            "https://deckofcardsapi.com/static/img/Q" + palosLetra[j] + ".png",
            10,
            "x "
          )
        );
      }
      if (i == 13) {
        mazo.push(
          new Carta(
            i,
            palos[j],
            "https://deckofcardsapi.com/static/img/K" + palosLetra[j] + ".png",
            10,
            "x "
          )
        );
      }
      if ((i != 1) & (i != 10) & (i != 11) & (i != 12) & (i != 13)) {
        mazo.push(
          new Carta(
            i,
            palos[j],
            "https://deckofcardsapi.com/static/img/" +
              i +
              palosLetra[j] +
              ".png",
            i,
            "x "
          )
        );
      }
    }
  }
}

generarMazo();

//Se sacan las primeras cuatro cartas
for (let i = 0; i < 4; i++) {
  cogerCarta();
}

//COGER CARTAS
function cogerCarta() {
  aleatorio = parseInt(Math.random() * (numCartas - 1) + 0);

  while (mano.includes(mazo[aleatorio]) == true) {
    aleatorio = parseInt(Math.random() * (numCartas - 1) + 0);
  }
  console.log(mazo[aleatorio].propietario + "Hola");
  // añade dueño a la carta pillada
  if (contador < 2 || turno == "maquina") {
    mazo[aleatorio].propietario = "maquina";
  } else {
    mazo[aleatorio].propietario = "jugador";
  }

  if (
    (aleatorio == 0 || aleatorio == 13 || aleatorio == 26 || aleatorio == 39) &&
    mazo[aleatorio].propietario == "jugador"
  ) {
    if (document.getElementById("once") == null) {
      console.log("ERROR");
    } else {
      document.getElementById("once").disabled = false;
    }
    if (document.getElementById("once") == null) {
      console.log("ERROR");
    } else {
      document.getElementById("once").style.cursor = "pointer";
    }
  }

  if (
    (aleatorio == 0 || aleatorio == 13 || aleatorio == 26 || aleatorio == 39) &&
    mazo[aleatorio].propietario == "maquina" &&
    puntajeMaquina + 10 < 22
  ) {
    puntajeMaquina = puntajeMaquina + 10;
  }

  mano.push(mazo[aleatorio]);
  console.log(mano);

  //se asigna propietario a la carta
  if (mano[contador].propietario == "jugador") {
    puntajeUsuario += mano[contador].valor;
    console.log(puntajeUsuario + " hola");
  } else if (mano[contador].propietario == "maquina") {
    puntajeMaquina += mano[contador].valor;
    console.log(puntajeMaquina + " hola Maquina");
  }

  // imprime imagen en pantalla

  if (mazo[aleatorio].propietario == "jugador") {
    if (document.getElementById("usuario") == null) {
      console.log("ERROR");
    } else {
      document.getElementById("usuario").innerHTML +=
        "<img src=" + mazo[aleatorio].imagen + ">";
    }
  }
  if (mazo[aleatorio].propietario == "maquina") {
    if (document.getElementById("img") == null) {
      console.log("ERROR");
    } else {
      document.getElementById("img").innerHTML +=
        "<img src=" + mazo[aleatorio].imagen + ">";
    }
  }

  if (puntajeUsuario > 21) {
    victoriaDerrota("usuPerd");

    // Output the final value.

    document.querySelector("#coger").disabled = true;
    document.querySelector("#plant").disabled = true;
    document.querySelector("#coger").style.cursor = "default";
    document.querySelector("#plant").style.cursor = "default";
  }

  if (puntajeMaquina > 21) {
    victoriaDerrota("usuGan");

    if (document.querySelector("#coger") == null) {
      console.log("ERROR");
    } else {
      document.querySelector("#coger").disabled = true;
    }
    if (document.querySelector("#plant") == null) {
      console.log("ERROR");
    } else {
      document.querySelector("#plant").disabled = true;
    }
  }

  contador++;

  if (puntajeUsuario == 21 && turno == "jugador") {
    plantarse();
  }

  return mazo[aleatorio];
}

//////////////////   ACE

function ace(num) {
  console.log(mazo[aleatorio].valor + "valor antes");
  mazo[aleatorio].valor = num;
  console.log(mazo[aleatorio].valor + "valor despues");
  console.log(num + " eleccion");

  if (document.querySelector("#uno") == null) {
    console.log("ERROR");
  } else {
    document.querySelector("#uno").disabled = true;
  }
  if (document.querySelector("#once") == null) {
    console.log("ERROR");
  } else {
    document.querySelector("#once").disabled = true;
  }

  if (num == 11) {
    puntajeUsuario = puntajeUsuario + 10;
    if (puntajeUsuario > 21) {
      victoriaDerrota("usuPerd");
    }
    if ((puntajeUsuario = 21)) {
      plantarse();
    }
  }
}

//////////////////   PLANTARSE

function plantarse() {
  turno = "maquina";
  if (document.querySelector("#coger") == null) {
    console.log("ERROR");
  } else {
    document.querySelector("#coger").disabled = true;
  }
  if (document.querySelector("#plant") == null) {
    console.log("ERROR");
  } else {
    document.querySelector("#plant").disabled = true;
  }

  while (puntajeMaquina < puntajeUsuario && puntajeUsuario < 22) {
    cogerCarta();
  }
  if (
    (puntajeMaquina > puntajeUsuario && puntajeMaquina < 22) ||
    puntajeUsuario > 21
  ) {
    victoriaDerrota("usuPerd");
  } else {
    victoriaDerrota("usuGan");
  }

  if (puntajeUsuario == 21 && puntajeMaquina == 21) {
    victoriaDerrota("empate");
  }
}

//////////////////   VICTORIADERROTA

async function victoriaDerrota(vic) {
  let desenlace = "Victoria";
  if (vic == "usuPerd") {
    desenlace = "Derrota";
    try {
      if ((await window.localStorage.getItem("derrota")) == undefined) {
        await window.localStorage.setItem("derrota", 1);
      } else {
        await window.localStorage.setItem(
          "derrota",
          parseInt(window.localStorage.getItem("derrota")) + 1
        );
        document.querySelector("#cpu").innerHTML =
          await window.localStorage.getItem("derrota");
      }
      //apuesta
      if ((await window.localStorage.getItem("DineroApostado")) == undefined) {
        await window.localStorage.setItem(
          "DineroApostado",
          1000 - dineroApostado
        );
      } else {
        await window.localStorage.setItem(
          "DineroApostado",
          parseFloat(window.localStorage.getItem("DineroApostado")) -
            dineroApostado
        );
      }
    } catch (e) {
      console.log("Error!", e);
    }
  }
  if (vic == "usuGan") {
    try {
      if ((await window.localStorage.getItem("victoria")) == undefined) {
        await window.localStorage.setItem("victoria", 1);
      } else {
        await window.localStorage.setItem(
          "victoria",
          parseInt(window.localStorage.getItem("victoria")) + 1
        );
        document.querySelector("#user").innerHTML =
          await window.localStorage.getItem("victoria");
      }
      //apuesta
      console.log(window.localStorage.getItem("DineroApostado") + "Antes");
      if ((await window.localStorage.getItem("DineroApostado")) == undefined) {
        await window.localStorage.setItem(
          "DineroApostado",
          1000 + dineroApostado
        );
        console.log(window.localStorage.getItem("DineroApostado") + "null");
      } else {
        await window.localStorage.setItem(
          "DineroApostado",
          parseFloat(window.localStorage.getItem("DineroApostado")) +
            dineroApostado
        );
        console.log(window.localStorage.getItem("DineroApostado") + "normal");
      }
    } catch (e) {
      console.log("Error!", e);
    }
  }

  if (vic == "empate") {
    desenlace = "Empate";
    try {
      if ((await window.localStorage.getItem("empate")) == undefined) {
        await window.localStorage.setItem("empate", 1);
      } else {
        await window.localStorage.setItem(
          "empate",
          parseInt(window.localStorage.getItem("empate")) + 1
        );
      }
    } catch (e) {
      console.log("Error!", e);
    }
  }

  alert(
    desenlace +
      " " +
      "Fin de partida, puntuacion maquina: " +
      puntajeMaquina +
      " puntuacion usuario: " +
      puntajeUsuario +
      " Dinero: " +
      window.localStorage.getItem("DineroApostado") +
      " rupias"
  );

  console.log(window.localStorage.getItem("DineroApostado") + "Euros");
  console.log(window.localStorage.getItem("derrota") + "derrota");
  console.log(window.localStorage.getItem("victoria") + "victoria");
}

module.exports = {
  contador,
  Carta,
  plantarse,
  ace,
  cogerCarta,
  mazo,
  generarMazo,
  puntajeMaquina,
  puntajeUsuario,
};
