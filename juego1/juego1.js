// VARIABLES
let usuarioPuntuacion = 0;
let maquinaPuntuacion = 0;
let usuarioEleccion = 0;
let stylesLagarto = `
  background-image: url('../images2/Lagarto.PNG');
`;
let stylesPapel = `
  background-image: url('../images2/Papel.PNG');
`;
let stylesPiedra = `
  background-image: url('../images2/Piedra.PNG');
`;
let stylesSpock = `
  background-image: url('../images2/Spock.PNG');
`;
let stylesTijera = `
  background-image: url('../images2/Tijera.PNG');
`;
let array = [stylesLagarto, stylesPapel, stylesPiedra, stylesSpock, stylesTijera];

// FUNCIONES
const aleatorio = () => {
  let numero = Math.floor(Math.random() * ((4 + 1) - 0) + 0);
  return numero;
}

const limpiar = () => {
  document.querySelector('#divUsuario').style.backgroundImage = 'none';
  document.querySelector('#divMaquina').style.backgroundImage = 'none';
  document.querySelector('#lagarto').style = 'background-color: none;';
  document.querySelector('#papel').style = 'background-color: none;';
  document.querySelector('#piedra').style = 'background-color: none;';
  document.querySelector('#spock').style = 'background-color: none;';
  document.querySelector('#tijera').style = 'background-color: none;';
  usuarioEleccion = '';
}

const restart = () => {
  usuarioEleccion = 0;
  usuarioPuntuacion = 0;
  maquinaPuntuacion = 0;
  if(document.querySelector('#divUsuario') === null){
    console.log("ERROR");
  }else{
    document.querySelector('#divUsuario').style.backgroundImage = 'none';
  }
  if(document.querySelector('#divMaquina') === null){
    console.log("ERROR");
  }else{
    document.querySelector('#divMaquina').style.backgroundImage = 'none';
  }
  if(document.querySelector('#lagarto') === null){
    console.log("ERROR");
  }else{
    document.querySelector('#lagarto').style = 'background-color: none;';
  }
  if(document.querySelector('#papel') === null){
    console.log("ERROR");
  }else{
    document.querySelector('#papel').style = 'background-color: none;';
  }
  if(document.querySelector('#piedra') === null){
    console.log("ERROR");
  }else{
    document.querySelector('#piedra').style = 'background-color: none;';
  }
  if(document.querySelector('#piedra') === null){
    console.log("ERROR");
  }else{
    document.querySelector('#spock').style = 'background-color: none;';
  }
  if(document.querySelector('#tijera')=== null){
    console.log("ERROR");
  }else{
    document.querySelector('#tijera').style = 'background-color: none;';
  }
  if(document.querySelector('#situacion')=== null){
    console.log("ERROR");
  }else{
    document.querySelector('#situacion').innerHTML = `Resultado`;
  }
  if(document.querySelector('#resultado')=== null){
    console.log("ERROR");
  }else{
    document.querySelector('#resultado').innerHTML = `Contador`;
  }
  
}

const seleccion = () => {
  let al = aleatorio();
  let seleccionMaquina = array[al];
  let finalElection = usuarioEleccion;
  document.querySelector('#divMaquina').style = seleccionMaquina;
  document.querySelector('#divUsuario').style = finalElection;
  if ((finalElection == stylesTijera) && (seleccionMaquina == stylesPapel)) {
    document.querySelector('#resultado').innerHTML = `Gana el usuario`;
    usuarioPuntuacion++;
    document.querySelector('#situacion').innerHTML = `Usuario ${usuarioPuntuacion} Maquina ${maquinaPuntuacion}`
  } else if ((finalElection == stylesPapel) && (seleccionMaquina == stylesPiedra)) {
    document.querySelector('#resultado').innerHTML = `Gana el usuario`;
    usuarioPuntuacion++;
    document.querySelector('#situacion').innerHTML = `Usuario ${usuarioPuntuacion} Maquina ${maquinaPuntuacion}`
  } else if ((finalElection == stylesTijera) && (seleccionMaquina == stylesLagarto)) {
    document.querySelector('#resultado').innerHTML = `Gana el usuario`;
    usuarioPuntuacion++;
    document.querySelector('#situacion').innerHTML = `Usuario ${usuarioPuntuacion} Maquina ${maquinaPuntuacion}`
  } else if ((finalElection == stylesPiedra) && (seleccionMaquina == stylesLagarto)) {
    document.querySelector('#resultado').innerHTML = `Gana el usuario`;
    usuarioPuntuacion++;
    document.querySelector('#situacion').innerHTML = `Usuario ${usuarioPuntuacion} Maquina ${maquinaPuntuacion}`
  } else if ((finalElection == stylesLagarto) && (seleccionMaquina == stylesSpock)) {
    document.querySelector('#resultado').innerHTML = `Gana el usuario`;
    usuarioPuntuacion++;
    document.querySelector('#situacion').innerHTML = `Usuario ${usuarioPuntuacion} Maquina ${maquinaPuntuacion}`
  } else if ((finalElection == stylesSpock) && (seleccionMaquina == stylesTijera)) {
    document.querySelector('#resultado').innerHTML = `Gana el usuario`;
    usuarioPuntuacion++;
    document.querySelector('#situacion').innerHTML = `Usuario ${usuarioPuntuacion} Maquina ${maquinaPuntuacion}`
  } else if ((finalElection == stylesLagarto) && (seleccionMaquina == stylesPapel)) {
    document.querySelector('#resultado').innerHTML = `Gana el usuario`;
    usuarioPuntuacion++;
    document.querySelector('#situacion').innerHTML = `Usuario ${usuarioPuntuacion} Maquina ${maquinaPuntuacion}`
  } else if ((finalElection == stylesPapel) && (seleccionMaquina == stylesSpock)) {
    document.querySelector('#resultado').innerHTML = `Gana el usuario`;
    usuarioPuntuacion++;
    document.querySelector('#situacion').innerHTML = `Usuario ${usuarioPuntuacion} Maquina ${maquinaPuntuacion}`
  } else if ((finalElection == stylesSpock) && (seleccionMaquina == stylesPiedra)) {
    document.querySelector('#resultado').innerHTML = `Gana el usuario`;
    usuarioPuntuacion++;
    document.querySelector('#situacion').innerHTML = `Usuario ${usuarioPuntuacion} Maquina ${maquinaPuntuacion}`
  } else if ((finalElection == stylesPiedra) && (seleccionMaquina == stylesTijera)) {
    document.querySelector('#resultado').innerHTML = `Gana el usuario`;
    usuarioPuntuacion++;
    document.querySelector('#situacion').innerHTML = `Usuario ${usuarioPuntuacion} Maquina ${maquinaPuntuacion}`
  } else if ((finalElection == stylesPapel) && (seleccionMaquina == stylesTijera)) {
    document.querySelector('#resultado').innerHTML = `Gana la maquina`;
    maquinaPuntuacion++;
    document.querySelector('#situacion').innerHTML = `Usuario ${usuarioPuntuacion} Maquina ${maquinaPuntuacion}`
  } else if ((finalElection == stylesPiedra) && (seleccionMaquina == stylesPapel)) {
    document.querySelector('#resultado').innerHTML = `Gana la maquina`;
    maquinaPuntuacion++;
    document.querySelector('#situacion').innerHTML = `Usuario ${usuarioPuntuacion} Maquina ${maquinaPuntuacion}`
  } else if ((finalElection == stylesLagarto) && (seleccionMaquina == stylesPiedra)) {
    document.querySelector('#resultado').innerHTML = `Gana la maquina`;
    maquinaPuntuacion++;
    document.querySelector('#situacion').innerHTML = `Usuario ${usuarioPuntuacion} Maquina ${maquinaPuntuacion}`
  } else if ((finalElection == stylesLagarto) && (seleccionMaquina == stylesTijera)) {
    document.querySelector('#resultado').innerHTML = `Gana la maquina`;
    maquinaPuntuacion++;
    document.querySelector('#situacion').innerHTML = `Usuario ${usuarioPuntuacion} Maquina ${maquinaPuntuacion}`
  } else if ((finalElection == stylesSpock) && (seleccionMaquina == stylesLagarto)) {
    document.querySelector('#resultado').innerHTML = `Gana la maquina`;
    maquinaPuntuacion++;
    document.querySelector('#situacion').innerHTML = `Usuario ${usuarioPuntuacion} Maquina ${maquinaPuntuacion}`
  } else if ((finalElection == stylesTijera) && (seleccionMaquina == stylesSpock)) {
    document.querySelector('#resultado').innerHTML = `Gana la maquina`;
    maquinaPuntuacion++;
    document.querySelector('#situacion').innerHTML = `Usuario ${usuarioPuntuacion} Maquina ${maquinaPuntuacion}`
  } else if ((finalElection == stylesPapel) && (seleccionMaquina == stylesLagarto)) {
    document.querySelector('#resultado').innerHTML = `Gana la maquina`;
    maquinaPuntuacion++;
    document.querySelector('#situacion').innerHTML = `Usuario ${usuarioPuntuacion} Maquina ${maquinaPuntuacion}`
  } else if ((finalElection == stylesSpock) && (seleccionMaquina == stylesPapel)) {
    document.querySelector('#resultado').innerHTML = `Gana la maquina`;
    maquinaPuntuacion++;
    document.querySelector('#situacion').innerHTML = `Usuario ${usuarioPuntuacion} Maquina ${maquinaPuntuacion}`
  } else if ((finalElection == stylesPiedra) && (seleccionMaquina == stylesSpock)) {
    document.querySelector('#resultado').innerHTML = `Gana la maquina`;
    maquinaPuntuacion++;
    document.querySelector('#situacion').innerHTML = `Usuario ${usuarioPuntuacion} Maquina ${maquinaPuntuacion}`
  } else if ((finalElection == stylesTijera) && (seleccionMaquina == stylesPiedra)) {
    document.querySelector('#resultado').innerHTML = `Gana la maquina`;
    maquinaPuntuacion++;
    document.querySelector('#situacion').innerHTML = `Usuario ${usuarioPuntuacion} Maquina ${maquinaPuntuacion}`
  } else if (finalElection == seleccionMaquina) {
    document.querySelector('#resultado').innerHTML = `Empate`;
    document.querySelector('#situacion').innerHTML = `Usuario ${usuarioPuntuacion} Maquina ${maquinaPuntuacion}`
  } else {
    document.querySelector('#resultado').innerHTML = `Sin datos`;
  }
}
// ADDEVENTLISTENERS
if (document.querySelector('#limpiar') === null) {
  console.log('NO ERROR TODO BIEN');
} else {
  document.querySelector('#limpiar').addEventListener('click', limpiar);
}

if (document.querySelector('#seleccion') === null) {
  console.log('NO ERROR TODO BIEN');
} else {
  document.querySelector('#seleccion').addEventListener('click', seleccion);
}

if (document.querySelector('#start') === null) {
  console.log('NO ERROR TODO BIEN');
} else {
  document.querySelector('#start').addEventListener('click', restart);
}

if (document.querySelector('#lagarto') === null) {
  console.log('NO ERROR TODO BIEN');
} else {
  document.querySelector('#lagarto').addEventListener('click', () => {
    // document.querySelector('#divUsuario').style = stylesLargarto;
    document.querySelector('#lagarto').style = 'background-color: var(--main-rojo);';
    document.querySelector('#papel').style = 'background-color: none;';
    document.querySelector('#piedra').style = 'background-color: none;';
    document.querySelector('#spock').style = 'background-color: none;';
    document.querySelector('#tijera').style = 'background-color: none;';
    usuarioEleccion = stylesLagarto;
  })
}

if (document.querySelector('#papel') === null) {
  console.log('NO ERROR TODO BIEN');
} else {
  document.querySelector('#papel').addEventListener('click', () => {
    // document.querySelector('#divUsuario').style = stylesPapel;
    document.querySelector('#lagarto').style = 'background-color: none;';
    document.querySelector('#papel').style = 'background-color: var(--main-rojo);';
    document.querySelector('#piedra').style = 'background-color: none;';
    document.querySelector('#spock').style = 'background-color: none;';
    document.querySelector('#tijera').style = 'background-color: none;';
    usuarioEleccion = stylesPapel;
  })
}

if (document.querySelector('#piedra') === null) {
  console.log('NO ERROR TODO BIEN');
} else {
  document.querySelector('#piedra').addEventListener('click', () => {
    // document.querySelector('#divUsuario').style = stylesPiedra;
    document.querySelector('#lagarto').style = 'background-color: none;';
    document.querySelector('#papel').style = 'background-color: none;';
    document.querySelector('#piedra').style = 'background-color: var(--main-rojo);';
    document.querySelector('#spock').style = 'background-color: none;';
    document.querySelector('#tijera').style = 'background-color: none;';
    usuarioEleccion = stylesPiedra;
  })
}


if (document.querySelector('#spock') === null) {
  console.log('NO ERROR TODO BIEN');
} else {
  document.querySelector('#spock').addEventListener('click', () => {
    // document.querySelector('#divUsuario').style = stylesSpock;
    document.querySelector('#lagarto').style = 'background-color: none;';
    document.querySelector('#papel').style = 'background-color: none;';
    document.querySelector('#piedra').style = 'background-color: none;';
    document.querySelector('#spock').style = 'background-color: var(--main-rojo);';
    document.querySelector('#tijera').style = 'background-color: none;';
    usuarioEleccion = stylesSpock;
  })
}

if (document.querySelector('#tijera') === null) {
  console.log('NO ERROR TODO BIEN');
} else {
  document.querySelector('#tijera').addEventListener('click', () => {
    // document.querySelector('#divUsuario').style = stylesTijera;
    document.querySelector('#lagarto').style = 'background-color: none;';
    document.querySelector('#papel').style = 'background-color: none;';
    document.querySelector('#piedra').style = 'background-color: none;';
    document.querySelector('#spock').style = 'background-color: none;';
    document.querySelector('#tijera').style = 'background-color: var(--main-rojo);';
    usuarioEleccion = stylesTijera;
  })
}

function sum(a, b) {
  return a + b;
}

module.exports = { sum, aleatorio, restart, usuarioEleccion, stylesLagarto, stylesPapel, stylesPiedra, stylesSpock, stylesTijera };

