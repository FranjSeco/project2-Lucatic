class Carta {
  constructor(numero, palo, imagen, valor, propietario) {
    this.numero = numero;
    this.palo = palo;
    this.imagen = imagen;
    this.valor = valor;
    this.propietario = propietario;
  }
}

let mazo = [];
let palos = ["Corazones", "Treboles", "Diamantes", "Picas"];
let palosLetra = ["H", "C", "D", "S"];
let numCartas = 52;
let puntajeUsuario = 0;
let puntajeMaquina = 0;

for (let j = 0; j < palos.length; j++) {
  for (let i = 1; i < 13 + 1; i++) {
    if (i == 1) {
      mazo.push(
        new Carta(
          i,
          palos[j],
          "https://deckofcardsapi.com/static/img/A" + palosLetra[j] + ".png",
          1,
          ""
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
          ""
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
          ""
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
          ""
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
          ""
        )
      );
    }
    if ((i != 1) & (i != 10) & (i != 11) & (i != 12) & (i != 13)) {
      mazo.push(
        new Carta(
          i,
          palos[j],
          "https://deckofcardsapi.com/static/img/" + i + palosLetra[j] + ".png",
          i,
          ""
        )
      );
    }
  }
}

console.log(mazo);

let mano = [];

let contador = 0;

var on = true;

for (let i = 0; i < 4; i++) {
  cogerCarta();
}

async function cogerCarta() {
  let aleatorio = parseInt(Math.random() * (numCartas - 1) + 0);

  while (mano.includes(mazo[aleatorio]) == true) {
    aleatorio = parseInt(Math.random() * (numCartas - 1) + 0);
  }

  // añade dueño a la carta pillada
  if (contador < 2 || on == false) {
    mazo[aleatorio].propietario = "maquina";
  } else {
    mazo[aleatorio].propietario = "jugador";
  }

  mano.push(mazo[aleatorio]);

  console.log(mano);
  // imprime imagen en pantalla
  if (contador > 0) {
    document.getElementById("img").innerHTML +=
      "<img src=" + mazo[aleatorio].imagen + ">";
  }

  if (mano[contador].propietario == "jugador") {
    puntajeUsuario += mano[contador].valor;
    console.log(puntajeUsuario + " hola");
  } else {
    puntajeMaquina += mano[contador].valor;
    console.log(puntajeMaquina + " hola Maquina");
  }

  if (puntajeUsuario > 21) {
    alert(
      "Fin de partida, puntuacion maquina: " +
        puntajeMaquina +
        " puntuacion usuario: " +
        puntajeUsuario
    );

    let dbReq = indexedDB.open("test", 2);
    dbReq.onupgradeneeded = () => {
      let db = dbReq.result;
      db.createObjectStore("paginas");
    };
    let db = await promiseReq(dbReq);

    let tx = db.transaction("paginas", "readwrite");
    let store = tx.objectStore("paginas");
    let finalVal = await promiseReq(store.get("derrotas"));

    if (finalVal == undefined) {
      await promiseReq(store.put(1, "derrotas"));
    } else {
      await promiseReq(store.put(finalVal + 1, "derrotas"));
    }

    // Output the final value.

    console.log("Final value", finalVal);
    document.querySelector("#coger").disabled = true;
    document.querySelector("#plant").disabled = true;
  }

  if (puntajeUsuario == 21) {
    plantarse();
  }

  contador++;

  return mazo[aleatorio];
}

function promiseReq(req) {
  return new Promise((resolve, reject) => {
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

function plantarse() {
  on = false;
  document.querySelector("#coger").disabled = true;
  document.querySelector("#plant").disabled = true;

  while (puntajeMaquina < 19) {
    cogerCarta();
  }
}
