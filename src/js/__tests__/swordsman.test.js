import Swordsman from '../swordsman';

test('name does not match the requirements', () => {
  expect(() => new Swordsman('Filvendor', 'Filvendor')).toThrow('wrong type');
});

test('Correct Structure', () => {
  const hero = new Swordsman('Filvendor', 'Swordsman');
  const correct = {
    _name: 'Filvendor',
    _type: 'Swordsman',
    attack: 40,
    defence: 10,
    health: 100,
    level: 1,
  };
  expect(hero).toEqual(correct);
});
