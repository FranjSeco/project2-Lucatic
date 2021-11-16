import { jest } from '@jest/globals';
import {generarMazo, victoriaDerrota,Carta} from './Script';

jest.useFakeTimers();

/*
test('sumar 1 + 2 es igual a 3', () => {
  expect(suma(1, 2)).toBe(3);
});

test('the data is peanut butter', async () => {
  const data = await fetchData();
  expect(data).toBe('peanut butter');
});

test('the fetch fails with an error', async () => {
  expect.assertions(1);
  try {
    await fetchData();
  } catch (e) {
    expect(e).toMatch('error');
  }
});

*/

/*
test('the data is peanut butter', async () => {
  await expect(victoriaDerrota("derrota")).resolves.toBeGreaterThan(-1);
});
*/

test('sumar 1 + 2 es igual a 3', () => {
var mazo =generarMazo();

  expect(generarMazo).toBeInstanceOf(Carta);


});