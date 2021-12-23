import Character from '../Character';

test('проверка на запрет создания базового класса', () => {
	const unit1 = () => new Character('1');
	expect(unit1).toThrow('Нельзя создавать экземпляр базового класса');
});