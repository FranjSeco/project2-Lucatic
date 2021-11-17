import { limpiar, sum, aleatorio, restart, usuarioEleccion, stylesLagarto, stylesPapel, stylesPiedra, stylesSpock, stylesTijera } from './juego1';

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('numero random', () => {
  expect(aleatorio()).not.toBe(5);
  expect(aleatorio()).not.toBe(6);
  expect(aleatorio()).not.toBe(7);
  expect(aleatorio()).toBeLessThan(5);
  expect(aleatorio()).toBeGreaterThan(0);
});

test('usuario Eleccion', () => {
  expect(usuarioEleccion).toBe(0);
});

test('usuario Eleccion', () => {
  expect(restart()).not.toBe(usuarioEleccion == null);
});

test('Imgen Lagarto', () => {
  expect(stylesLagarto).not.toBe(null);
  expect(stylesLagarto).toMatch("background-image: url('../images2/Lagarto.PNG');");
});
test('Imgen Papel', () => {
  expect(stylesPapel).not.toBe(null);
  expect(stylesPapel).toMatch("background-image: url('../images2/Papel.PNG');");
});
test('Imgen Piedra', () => {
  expect(stylesPiedra).not.toBe(null);
  expect(stylesPiedra).toMatch("background-image: url('../images2/Piedra.PNG');");
});
test('Imgen Spock', () => {
  expect(stylesSpock).not.toBe(null);
  expect(stylesSpock).toMatch("background-image: url('../images2/Spock.PNG');");
});
test('Imgen Tijera', () => {
  expect(stylesTijera).not.toBe(null);
  expect(stylesTijera).toMatch("background-image: url('../images2/Tijera.PNG');");
});

test('Contenido en página html', () => {
  document.body.innerHTML = `
  <button class="juego__seleccionar" id="seleccion">Jugar</button>
  `;
});


