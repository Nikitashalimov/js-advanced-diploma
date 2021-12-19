/**
 * Generates random characters
 *
 * @param allowedTypes iterable of classes
 * @param maxLevel max character level
 * @returns Character type children (ex. Magician, Bowman, etc)
 */
export function* characterGenerator(allowedTypes, maxLevel) {
  let randomHero = allowedTypes[Math.floor(Math.random() * allowedTypes.length)];
  let levelRandomHero = Math.floor(Math.random() * maxLevel)
  yield new randomHero(levelRandomHero);
  // TODO: write logic here
}

export function generateTeam(allowedTypes, maxLevel, characterCount) {
  // TODO: write logic here
  let team = [];
  characterGenerator(allowedTypes, maxLevel);
  for (let i = 0; i < characterCount; i++) {
    team.push(characterGenerator.next());
  }
}

// массив с классами для игрока
//const allowedTypesPlayer = [Swordsman, Bowman, Magician];
// массив с классами для компьютера
//const allowedTypesComputer = [Daemon, Undead, Vampire];