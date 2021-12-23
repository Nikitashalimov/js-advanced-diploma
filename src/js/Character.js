export default class Character {
  constructor(level, type = 'generic') {
    this.level = level;
    this.attack = 0;
    this.defence = 0;
    this.health = 50;
    this.type = type;
    //TODO: throw error if user use "new Character()"
    if (new.target.type === 'generic') {
      throw new Error('Нельзя создавать экземпляр базового класса')
    }
  }
  levelUp() {
    if (this.health > 0) {
      this.attack = Math.max(this.attack * (1.8 - this.health / 100));
      this.defence = Math.max(this.defence * (1.8 - this.health / 100));
      this.level += 1;
      this.health += 80;
      if (this.health > 100) {
        this.health = 100;
      }
    } else {
      throw new Error('it is impossible to level up a dead character');
    }
  }
}