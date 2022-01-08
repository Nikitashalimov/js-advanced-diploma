/**
 * Entry point of app: don't change this
 */
import GamePlay from './GamePlay';
import GameController from './GameController';
import GameStateService from './GameStateService';
import Bowman from './bowman';
import Swordsman from './swordsman';
import Daemon from './daemon';
import Undead from './undead';
import PositionedCharacter from './PositionedCharacter';

const gamePlay = new GamePlay();
gamePlay.bindToDOM(document.querySelector('#game-container'));

const stateService = new GameStateService(localStorage);

//отрисовка игрового поля на экране
const gameCtrl = new GameController(gamePlay, stateService);
gameCtrl.init();

// создаем 2 персонажа
const unit1 = new Bowman('Luchnik');
const unit2 = new Swordsman('Mechnik');
const unitBot1 = new Daemon('Demon');
const unitBot2 = new Undead('Undead');

// массивы с индексами возможных месторасположений персонажей
const arrPosPlayer1 = [];
const arrPosPlayer2 = [];
const arrPosBot1 = [];
const arrPosBot2 = [];
// циклом пробегаемся по количеству ячеек, и добавляем в массивы, разрешенные числа, для каждого игрока
for (let i = 0; i < gamePlay.boardSize ** 2; i += 1) {
	if (i % gamePlay.boardSize === 0) {
		arrPosPlayer1.push(i);
	} else if (i % gamePlay.boardSize === 1) {
		arrPosPlayer2.push(i);
	} else if (i % gamePlay.boardSize === gamePlay.boardSize - 2) {
		arrPosBot1.push(i);
	} else if (i % gamePlay.boardSize === gamePlay.boardSize - 1) {
		arrPosBot2.push(i);
	}
}

// позиционируем их на рандомные места
const char1 = new PositionedCharacter(unit1, arrPosPlayer1[Math.floor(Math.random() * arrPosPlayer1.length)]);
const char2 = new PositionedCharacter(unit2, arrPosPlayer2[Math.floor(Math.random() * arrPosPlayer2.length)]);
const charBot1 = new PositionedCharacter(unitBot1, arrPosBot1[Math.floor(Math.random() * arrPosBot1.length)]);
const charBot2 = new PositionedCharacter(unitBot2, arrPosBot2[Math.floor(Math.random() * arrPosBot2.length)]);

// массив с персонажами
const units = [char1, char2, charBot1, charBot2]

// отрисовываем персонажей
gamePlay.redrawPositions(units); //отрисовка персонажей на экране
