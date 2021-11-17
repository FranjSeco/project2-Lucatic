import { jest } from '@jest/globals';
import {contador,mazo,generarMazo,puntajeMaquina,puntajeUsuario} from './Script';

jest.useFakeTimers();


test('Contenido en página html', () => {
  document.body.innerHTML = `
  <button onclick="plantarse()" id="plant">Plantarse</button>
  `;
});

test('generar mazo', () => {
  expect(generarMazo()).not.toBe(mazo == null);
});


test('Imgen de cartas', () => {
  expect(mazo[0].imagen).not.toBe(null);
  expect(mazo[0].imagen).toMatch("https://deckofcardsapi.com/static/img/AH.png");
  
  expect(mazo[1].imagen).toMatch("https://deckofcardsapi.com/static/img/2H.png");
  expect(mazo[2].imagen).toMatch("https://deckofcardsapi.com/static/img/3H.png");
});


test('puntuaciones', () => {
 
  expect(puntajeUsuario).not.toBe(null);
  expect( typeof puntajeUsuario).toBe("number");
  expect(puntajeUsuario).toBeGreaterThan(-1);

  expect(puntajeMaquina).not.toBe(null);
  expect( typeof puntajeMaquina).toBe("number");
  expect(puntajeMaquina).toBeGreaterThan(-1);
});


test('clase carta', () => {
 
  expect( typeof mazo[50]).toBe("object");
  expect( typeof mazo[30]).toBe("object");
  expect( typeof mazo[40]).toBe("object");

  expect( typeof mazo[50].valor).toBe("number");
  expect(  mazo[50].valor).toBe(10);
});


test('variable contador de cartas', () => {
 
  expect( typeof contador).toBe("number");
  expect(contador).toBeGreaterThan(-1);

});