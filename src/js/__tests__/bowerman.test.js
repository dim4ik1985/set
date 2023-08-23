import Bowman from '../bowerman';

test('name does not match the requirements', () => {
  expect(() => new Bowman('Viviana', 'Bower')).toThrow('wrong type');
});

test('Correct Structure', () => {
  const hero = new Bowman('Viviana', 'Bowerman');
  const correct = {
    _name: 'Viviana',
    _type: 'Bowerman',
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
  };
  expect(hero).toEqual(correct);
});
