export default class Character {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = undefined;
    this.defence = undefined;
  }

  set name(value) {
    if (value.length >= 2 && value.length <= 10) {
      // eslint-disable-next-line no-underscore-dangle
      this._name = value;
      return;
    }
    throw new Error('Short name');
  }

  set type(value) {
    const typesHeroes = ['Bowerman', 'Swordsman', 'Swordsman', 'Daemon', 'Undead', 'Zombie'];
    if (typesHeroes.includes(value)) {
      // eslint-disable-next-line no-underscore-dangle
      this._type = value;
      return;
    }
    throw new Error('There is no such type');
  }
}
