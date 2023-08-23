import Zombie from '../zombie';

test('name does not match the requirements', () => {
  expect(() => new Zombie('Viviana', 'Zom')).toThrow('wrong type');
});

test('Correct Structure', () => {
  const hero = new Zombie('Viviana', 'Zombie');
  const correct = {
    _name: 'Viviana',
    _type: 'Zombie',
    attack: 40,
    defence: 10,
    health: 100,
    level: 1,
  };
  expect(hero).toEqual(correct);
});
