import Undead from '../undead';

test('name does not match the requirements', () => {
  expect(() => new Undead('Herakles', 'Bower')).toThrow('wrong type');
});

test('Correct Structure', () => {
  const hero = new Undead('Herakles', 'Undead');
  const correct = {
    _name: 'Herakles',
    _type: 'Undead',
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
  };
  expect(hero).toEqual(correct);
});
