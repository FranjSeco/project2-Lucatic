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
let vic = true;
let mano = [];
let contador = 0;
var turno = "jugador";
let aleatorio;


///SE GENERA EL MAZO
 function generarMazo(){
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
          "https://deckofcardsapi.com/static/img/" + i + palosLetra[j] + ".png",
          i,
          "x "
        )
      );
    }
  }
}
console.log(mazo);
return mazo;
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
   console.log(mazo[aleatorio].propietario+"Hola");
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
    if(document.getElementById("uno")==null){
      console.log("error");
    }
else{
  document.getElementById("uno").disabled = false;
}
if(   document.getElementById("once")==null){
  console.log("error");
}
else{
  document.getElementById("once").disabled = false;
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
   if (contador > 0) {
    if(mazo[aleatorio].propietario=="jugador"){
      if( document.getElementById("usuario")==null){
console.log("ERROR");
      }
      else{
        document.getElementById("usuario").innerHTML +=
        "<img src=" + mazo[aleatorio].imagen + ">";
      }
     
    }
    if(mazo[aleatorio].propietario=="maquina"){
if(document.getElementById("img")==null){
  console.log("ERROR");
}else{
  document.getElementById("img").innerHTML +=
  "<img src=" + mazo[aleatorio].imagen + ">";
}
 
    }

  }


  if (puntajeUsuario > 21) {
    alert(
      "Fin de partida, puntuacion maquina: " +
        puntajeMaquina +
        " puntuacion usuario: " +
        puntajeUsuario
    );

    victoriaDerrota("usuPerd");

    // Output the final value.

    if( document.querySelector("#coger")==null){
      console.log("ERROR");
     }
      else{
     
       document.querySelector("#coger").disabled = true;
      }
      if( document.querySelector("#plant")==null){
       console.log("ERROR");
      }
       else{
      
         document.querySelector("#plant").disabled = true;
       }

     }

  if (puntajeMaquina > 21) {
    alert(
      "Fin de partida, puntuacion maquina: " +
        puntajeMaquina +
        " puntuacion usuario: " +
        puntajeUsuario
    );

    if( document.querySelector("#coger")==null){
      console.log("ERROR");
     }
      else{
     
       document.querySelector("#coger").disabled = true;
      }
      if( document.querySelector("#plant")==null){
       console.log("ERROR");
      }
       else{
      
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

  if( document.querySelector("#uno")==null){
    console.log("ERROR");
   }
    else{
   
     document.querySelector("#uno").disabled = true;
    }
    if( document.querySelector("#once")==null){
     console.log("ERROR");
    }
     else{
    
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
if( document.querySelector("#coger")==null){
 console.log("ERROR");
}
 else{

  document.querySelector("#coger").disabled = true;
 }
 if( document.querySelector("#plant")==null){
  console.log("ERROR");
 }
  else{
 
    document.querySelector("#plant").disabled = true;
  }



  while (puntajeMaquina < puntajeUsuario && puntajeUsuario < 22) {
    cogerCarta();

    console.log("estoy dentro del while");
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
  }
}



//////////////////   VICTORIADERROTA

async function victoriaDerrota(vic) {
  resultado="";
  if (vic == "usuPerd") {
    try {
      if ((await window.localStorage.getItem("derrota")) == undefined) {
        await window.localStorage.setItem("derrota", 1);
      } else {
        await window.localStorage.setItem(
          "derrota",
          parseInt(window.localStorage.getItem("derrota")) + 1
        );
      }
    } catch (e) {
      console.log("Error!", e);
    }
    resultado=window.localStorage.getItem("derrota");
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
      }
    } catch (e) {
      console.log("Error!", e);
    }
    resultado=window.localStorage.getItem("victoria");
  }

  if (vic == "empate") {
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
    resultado=window.localStorage.getItem("empate");
  }
return window.localStorage.getItem("derrota");
  console.log(window.localStorage.getItem("derrota") + "derrota");
  console.log(window.localStorage.getItem("victoria") + "victoria");
}


module.exports = { victoriaDerrota, Carta, plantarse, ace, cogerCarta};


