import Magician from '../magician';

test('name does not match the requirements', () => {
  expect(() => new Magician('Oliver', 'Mag')).toThrow('wrong type');
});

test('Correct Structure', () => {
  const hero = new Magician('Oliver', 'Magician');
  const correct = {
    _name: 'Oliver',
    _type: 'Magician',
    attack: 10,
    defence: 40,
    health: 100,
    level: 1,
  };
  expect(hero).toEqual(correct);
});
