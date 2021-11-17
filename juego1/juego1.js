// VARIABLES
let usuarioPuntuacion = 0;
let maquinaPuntuacion = 0;
let usuarioEleccion = 0;
let modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.getElementById("myBtn");
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

// When the user clicks on the button, open the modal
function information() {
  modal.style.display = "flex";
  modal.style.transitionDelay = "2s";
  modal.style.alignContent = "center";
};

if (btn == null) {
  console.log('ERROR');
} else {
  btn.addEventListener('click', information);
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    btn.style.display = "inline";
    modal.style.display = "none";
  }
};

const limpiar = () => {
  document.querySelector('#divUsuario').style.backgroundImage = 'none';
  document.querySelector('#divMaquina').style.backgroundImage = 'none';
  document.querySelector('#lagarto').style = 'background-color: none;';
  document.querySelector('#papel').style = 'background-color: none;';
  document.querySelector('#piedra').style = 'background-color: none;';
  document.querySelector('#spock').style = 'background-color: none;';
  document.querySelector('#tijera').style = 'background-color: none;';
  document.querySelector('#divUsuario').style.backgroundColor = 'transparent';
  document.querySelector('#divMaquina').style.backgroundColor = 'transparent';
  usuarioEleccion = '';
}

const restart = () => {
  usuarioEleccion = 0;
  usuarioPuntuacion = 0;
  maquinaPuntuacion = 0;

  if (document.querySelector('#divUsuario') === null) {
    console.log("ERROR");
  } else {
    document.querySelector('#divUsuario').style.backgroundImage = 'none';
  }
  if (document.querySelector('#divMaquina') === null) {
    console.log("ERROR");
  } else {
    document.querySelector('#divMaquina').style.backgroundImage = 'none';
  }
  if (document.querySelector('#lagarto') === null) {
    console.log("ERROR");
  } else {
    document.querySelector('#lagarto').style = 'background-color: none;';
  }
  if (document.querySelector('#papel') === null) {
    console.log("ERROR");
  } else {
    document.querySelector('#papel').style = 'background-color: none;';
  }
  if (document.querySelector('#piedra') === null) {
    console.log("ERROR");
  } else {
    document.querySelector('#piedra').style = 'background-color: none;';
  }
  if (document.querySelector('#piedra') === null) {
    console.log("ERROR");
  } else {
    document.querySelector('#spock').style = 'background-color: none;';
  }
  if (document.querySelector('#tijera') === null) {
    console.log("ERROR");
  } else {
    document.querySelector('#tijera').style = 'background-color: none;';
  }
  if (document.querySelector('#divUsuario') === null) {
    console.log("ERROR");
  } else {
    document.querySelector('#divUsuario').style.backgroundColor = 'transparent';
  }
  if (document.querySelector('#divMaquina') === null) {
    console.log("ERROR");
  } else {
    document.querySelector('#divMaquina').style.backgroundColor = 'transparent';
  }
  if (document.querySelector('#user') === null) {
    console.log("ERROR");
  } else {
    document.querySelector('#user').innerHTML = usuarioPuntuacion;
  }
  if (document.querySelector('#cpu') === null) {
    console.log("ERROR");
  } else {
    document.querySelector('#cpu').innerHTML = maquinaPuntuacion;
  }
}
const seleccion = () => {
  let al = aleatorio();
  let seleccionMaquina = array[al];
  let finalElection = usuarioEleccion;
  document.querySelector('#divMaquina').style = seleccionMaquina;
  document.querySelector('#divUsuario').style = finalElection;
  if ((finalElection == stylesTijera) && (seleccionMaquina == stylesPapel)) {
    usuarioPuntuacion++;
    document.querySelector('#user').innerHTML = usuarioPuntuacion;
    document.querySelector('#cpu').innerHTML = maquinaPuntuacion;
    document.querySelector('#divUsuario').style.backgroundColor = '#4BD338';
    document.querySelector('#divMaquina').style.backgroundColor = '#D33838';
  } else if ((finalElection == stylesPapel) && (seleccionMaquina == stylesPiedra)) {
    usuarioPuntuacion++;
    document.querySelector('#user').innerHTML = usuarioPuntuacion;
    document.querySelector('#cpu').innerHTML = maquinaPuntuacion;
    document.querySelector('#divUsuario').style.backgroundColor = '#4BD338';
    document.querySelector('#divMaquina').style.backgroundColor = '#D33838';
  } else if ((finalElection == stylesTijera) && (seleccionMaquina == stylesLagarto)) {
    usuarioPuntuacion++;
    document.querySelector('#user').innerHTML = usuarioPuntuacion;
    document.querySelector('#cpu').innerHTML = maquinaPuntuacion;
    document.querySelector('#divUsuario').style.backgroundColor = '#4BD338';

    document.querySelector('#divMaquina').style.backgroundColor = '#D33838';
  } else if ((finalElection == stylesPiedra) && (seleccionMaquina == stylesLagarto)) {
    usuarioPuntuacion++;
    document.querySelector('#user').innerHTML = usuarioPuntuacion;
    document.querySelector('#cpu').innerHTML = maquinaPuntuacion;
    document.querySelector('#divUsuario').style.backgroundColor = '#4BD338';
    document.querySelector('#divMaquina').style.backgroundColor = '#D33838';
  } else if ((finalElection == stylesLagarto) && (seleccionMaquina == stylesSpock)) {
    usuarioPuntuacion++;
    document.querySelector('#user').innerHTML = usuarioPuntuacion;
    document.querySelector('#cpu').innerHTML = maquinaPuntuacion;
    document.querySelector('#divUsuario').style.backgroundColor = '#4BD338';
    document.querySelector('#divMaquina').style.backgroundColor = '#D33838';
  } else if ((finalElection == stylesSpock) && (seleccionMaquina == stylesTijera)) {
    usuarioPuntuacion++;
    document.querySelector('#user').innerHTML = usuarioPuntuacion;
    document.querySelector('#cpu').innerHTML = maquinaPuntuacion;
    document.querySelector('#divUsuario').style.backgroundColor = '#4BD338';
    document.querySelector('#divMaquina').style.backgroundColor = '#D33838';
  } else if ((finalElection == stylesLagarto) && (seleccionMaquina == stylesPapel)) {
    usuarioPuntuacion++;
    document.querySelector('#user').innerHTML = usuarioPuntuacion;
    document.querySelector('#cpu').innerHTML = maquinaPuntuacion;
    document.querySelector('#divUsuario').style.backgroundColor = '#4BD338';
    document.querySelector('#divMaquina').style.backgroundColor = '#D33838';
  } else if ((finalElection == stylesPapel) && (seleccionMaquina == stylesSpock)) {
    usuarioPuntuacion++;
    document.querySelector('#user').innerHTML = usuarioPuntuacion;
    document.querySelector('#cpu').innerHTML = maquinaPuntuacion;
    document.querySelector('#divUsuario').style.backgroundColor = '#4BD338';
    document.querySelector('#divMaquina').style.backgroundColor = '#D33838';
  } else if ((finalElection == stylesSpock) && (seleccionMaquina == stylesPiedra)) {
    usuarioPuntuacion++;
    document.querySelector('#user').innerHTML = usuarioPuntuacion;
    document.querySelector('#cpu').innerHTML = maquinaPuntuacion;
    document.querySelector('#divUsuario').style.backgroundColor = '#4BD338';
    document.querySelector('#divMaquina').style.backgroundColor = '#D33838';
  } else if ((finalElection == stylesPiedra) && (seleccionMaquina == stylesTijera)) {
    usuarioPuntuacion++;
    document.querySelector('#user').innerHTML = usuarioPuntuacion;
    document.querySelector('#cpu').innerHTML = maquinaPuntuacion;
    document.querySelector('#divUsuario').style.backgroundColor = '#4BD338';
    document.querySelector('#divMaquina').style.backgroundColor = '#D33838';
  } else if ((finalElection == stylesPapel) && (seleccionMaquina == stylesTijera)) {
    maquinaPuntuacion++;
    document.querySelector('#user').innerHTML = usuarioPuntuacion;
    document.querySelector('#cpu').innerHTML = maquinaPuntuacion;
    document.querySelector('#divUsuario').style.backgroundColor = '#D33838';
    document.querySelector('#divMaquina').style.backgroundColor = '#4BD338';
  } else if ((finalElection == stylesPiedra) && (seleccionMaquina == stylesPapel)) {
    maquinaPuntuacion++;
    document.querySelector('#user').innerHTML = usuarioPuntuacion;
    document.querySelector('#cpu').innerHTML = maquinaPuntuacion;
    document.querySelector('#divUsuario').style.backgroundColor = '#D33838';
    document.querySelector('#divMaquina').style.backgroundColor = '#4BD338';
  } else if ((finalElection == stylesLagarto) && (seleccionMaquina == stylesPiedra)) {
    maquinaPuntuacion++;
    document.querySelector('#user').innerHTML = usuarioPuntuacion;
    document.querySelector('#cpu').innerHTML = maquinaPuntuacion;
    document.querySelector('#divUsuario').style.backgroundColor = '#D33838';
    document.querySelector('#divMaquina').style.backgroundColor = '#4BD338';
  } else if ((finalElection == stylesLagarto) && (seleccionMaquina == stylesTijera)) {
    maquinaPuntuacion++;
    document.querySelector('#user').innerHTML = usuarioPuntuacion;
    document.querySelector('#cpu').innerHTML = maquinaPuntuacion;
    document.querySelector('#divUsuario').style.backgroundColor = '#D33838';
    document.querySelector('#divMaquina').style.backgroundColor = '#4BD338';
  } else if ((finalElection == stylesSpock) && (seleccionMaquina == stylesLagarto)) {
    maquinaPuntuacion++;
    document.querySelector('#user').innerHTML = usuarioPuntuacion;
    document.querySelector('#cpu').innerHTML = maquinaPuntuacion;
    document.querySelector('#divUsuario').style.backgroundColor = '#D33838';
    document.querySelector('#divMaquina').style.backgroundColor = '#4BD338';
  } else if ((finalElection == stylesTijera) && (seleccionMaquina == stylesSpock)) {
    maquinaPuntuacion++;
    document.querySelector('#user').innerHTML = usuarioPuntuacion;
    document.querySelector('#cpu').innerHTML = maquinaPuntuacion;
    document.querySelector('#divUsuario').style.backgroundColor = '#D33838';
    document.querySelector('#divMaquina').style.backgroundColor = '#4BD338';
  } else if ((finalElection == stylesPapel) && (seleccionMaquina == stylesLagarto)) {
    maquinaPuntuacion++;
    document.querySelector('#user').innerHTML = usuarioPuntuacion;
    document.querySelector('#cpu').innerHTML = maquinaPuntuacion;
    document.querySelector('#divUsuario').style.backgroundColor = '#D33838';
    document.querySelector('#divMaquina').style.backgroundColor = '#4BD338';
  } else if ((finalElection == stylesSpock) && (seleccionMaquina == stylesPapel)) {
    maquinaPuntuacion++;
    document.querySelector('#user').innerHTML = usuarioPuntuacion;
    document.querySelector('#cpu').innerHTML = maquinaPuntuacion;
    document.querySelector('#divUsuario').style.backgroundColor = '#D33838';
    document.querySelector('#divMaquina').style.backgroundColor = '#4BD338';
  } else if ((finalElection == stylesPiedra) && (seleccionMaquina == stylesSpock)) {
    maquinaPuntuacion++;
    document.querySelector('#user').innerHTML = usuarioPuntuacion;
    document.querySelector('#cpu').innerHTML = maquinaPuntuacion;
    document.querySelector('#divUsuario').style.backgroundColor = '#D33838';
    document.querySelector('#divMaquina').style.backgroundColor = '#4BD338';
  } else if ((finalElection == stylesTijera) && (seleccionMaquina == stylesPiedra)) {
    maquinaPuntuacion++;
    document.querySelector('#user').innerHTML = usuarioPuntuacion;
    document.querySelector('#cpu').innerHTML = maquinaPuntuacion;
    document.querySelector('#divUsuario').style.backgroundColor = '#D33838';
    document.querySelector('#divMaquina').style.backgroundColor = '#4BD338';
  } else if (finalElection == seleccionMaquina) {
    document.querySelector('#user').innerHTML = usuarioPuntuacion;
    document.querySelector('#cpu').innerHTML = maquinaPuntuacion;
    document.querySelector('#divUsuario').style.backgroundColor = '#D3D338';
    document.querySelector('#divMaquina').style.backgroundColor = '#D3D338';
    console.log('empate')
  }
}
// ADDEVENTLISTENERS

if (document.querySelector('#seleccion') === null) {
  console.log('NO ERROR TODO BIEN');
} else {
  document.querySelector('#seleccion').addEventListener('click', () => {
    if (usuarioEleccion == 0) {
      document.querySelector('#resultado').innerHTML = `Elige una opcion`;
    } else {
      seleccion();
    }
  });
}

if (document.querySelector('#limpiar') === null) {
  console.log('NO ERROR TODO BIEN');
} else {
  document.querySelector('#limpiar').addEventListener('click', limpiar);
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

module.exports = { limpiar, sum, aleatorio, restart, usuarioEleccion, stylesLagarto, stylesPapel, stylesPiedra, stylesSpock, stylesTijera };
