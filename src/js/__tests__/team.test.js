import Team from '../team';
import Zombie from '../zombie';
import Undead from '../undead';

test('Ошибка при дублировании', () => {
  const teamUser = new Team();
  const zombie = new Zombie('Viviana', 'Zombie');
  teamUser.add(zombie);
  expect(() => teamUser.add(zombie)).toThrow(Error);
});

test('Корректное добавление нескольких персонажей', () => {
  const teamUser = new Team();
  const zombie = new Zombie('Viviana', 'Zombie');
  const undead = new Undead('Herakles', 'Undead');
  teamUser.addAll(zombie, undead, zombie);
  expect(teamUser.members.size).toBe(2);
});

test('Корректный массив объектов', () => {
  const teamUser = new Team();
  const zombie = new Zombie('Viviana', 'Zombie');
  const undead = new Undead('Herakles', 'Undead');
  teamUser.addAll(zombie, undead, zombie);
  const correctArr = [{
    _name: 'Viviana', _type: 'Zombie', attack: 40, defence: 10, health: 100, level: 1,
  }, {
    _name: 'Herakles', _type: 'Undead', attack: 25, defence: 25, health: 100, level: 1,
  }];
  expect(teamUser.toArray()).toEqual(correctArr);
});
