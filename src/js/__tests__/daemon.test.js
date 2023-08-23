import Daemon from '../daemon';

test('name does not match the requirements', () => {
  expect(() => new Daemon('Viviana', 'Undead')).toThrow('wrong type');
});

test('Correct Structure', () => {
  const hero = new Daemon('Alcaeos', 'Daemon');
  const correct = {
    _name: 'Alcaeos',
    _type: 'Daemon',
    attack: 10,
    defence: 40,
    health: 100,
    level: 1,
  };
  expect(hero).toEqual(correct);
});
