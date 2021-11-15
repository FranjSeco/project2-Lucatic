class Carta {
  constructor(numero,palo,imagen,valor,propitario) {
    this.numero=numero;
    this.palo=palo;
    this.imagen=imagen;
    this.valor=valor;
    this.propitario=propitario;
  }
  
}    
let mazo=[];
let palos=["Corazones","Treboles","Diamantes","Picas"];
let palosLetra=["H","C","D","S"];
let numCartas=52;
let puntajeUsuario;
let puntajeMaquina;

for(let j=0;j<palos.length;j++){
  
    for(let i=1;i<(13)+1;i++){

if(i==1){
  mazo.push(new Carta(i,palos[j],"https://deckofcardsapi.com/static/img/A" + palosLetra[j]+".png",1,""));
  
}
if(i==10){
  mazo.push(new Carta(i,palos[j],"https://deckofcardsapi.com/static/img/0" + palosLetra[j]+".png",i,""));

}
if(i==11){
  mazo.push(new Carta(i,palos[j],"https://deckofcardsapi.com/static/img/J"+ palosLetra[j]+".png",10,""));
 
}
if(i==12){
  mazo.push(new Carta(i,palos[j],"https://deckofcardsapi.com/static/img/Q"+ palosLetra[j]+".png",10,""));

}
if(i==13){
  mazo.push(new Carta(i,palos[j],"https://deckofcardsapi.com/static/img/K" + palosLetra[j]+".png",10,""));
 
}
if(i!=1 & i!=10 &i!=11 & i!=12 & i!=13){
  mazo.push(new Carta(i,palos[j],"https://deckofcardsapi.com/static/img/"+ i + palosLetra[j]+".png",i,""));
}

     
}

      

    

}

console.log(mazo);

let mano=[];

console.log( mazo[43].valor,mazo[35].numero,mazo[35].palo);



let contador=0;

for(let i=0;i<4;i++){
cogerCarta();
}


function cogerCarta(){


     let aleatorio= parseInt(Math.random() * (numCartas - 1) + 0); 

while(mano.includes(aleatorio)==true){
  aleatorio= parseInt(Math.random() * (numCartas - 1) + 0); 
  
}
if(contador<3){
  mazo[aleatorio].propitario="Maquina";
}

mano.push(mazo[aleatorio]);
console.log(mano);
console.log(contador);

if(contador>0){
document.getElementById("img").innerHTML +="<img src="+mazo[aleatorio].imagen+">";

}
console.log((mazo[aleatorio].valor));

contador++;

  return mazo[aleatorio];
    
    }


     function plantarse(){

if(puntajeMaquina>19){      
  comparar();
}


    }


    function comparar(){


    }