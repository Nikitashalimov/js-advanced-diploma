import Character from '../character';

test('проверка на запрет создания базового класса', () => {
	const unit1 = () => new Character('1', 'Boweman');
	expect(unit1).toThrow('Нельзя создавать экземпляр базового класса');
});