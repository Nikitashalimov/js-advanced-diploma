/**
 * Entry point of app: don't change this
 */
import GamePlay from './GamePlay';
import GameController from './GameController';
import GameStateService from './GameStateService';
import Bowman from './bowman';
import Swordsman from './swordsman';
import PositionedCharacter from './PositionedCharacter';


const gamePlay = new GamePlay();
gamePlay.bindToDOM(document.querySelector('#game-container'));

const stateService = new GameStateService(localStorage);

const gameCtrl = new GameController(gamePlay, stateService);
gameCtrl.init(); //отрисовка игрового поля на экране

const unit1 = new Bowman('Luchnik');
const unit2 = new Swordsman('Mechnik');

const char1 = new PositionedCharacter(unit1, 8);
const char2 = new PositionedCharacter(unit2, 16);

const units = [char1, char2]

gamePlay.redrawPositions(units); //отрисовка персонажей на экране
