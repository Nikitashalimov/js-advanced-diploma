import Character from './character';

export default class Vampire extends Character {
  constructor(name, type = 'Vampire') {
    super(name, type);
    this.attack = 25;
    this.defence = 25;
  }
}
