import { sum, aleatorio, restart } from './juego1';
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('numero random', () => {
  expect(aleatorio()).not.toBe(5);
});

test('funcion restart', () => {
  expect(restart()).toBe(usuarioEleccion = 0);
});

