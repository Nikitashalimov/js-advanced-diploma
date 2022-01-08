import { calcTileType } from '../utils';

test('проверка 1-го угла', () => {
	const corner1 = calcTileType(0, 4);
	expect(corner1).toBe('top-left');
});

test('проверка 2-го угла', () => {
	const corner2 = calcTileType(3, 4);
	expect(corner2).toBe('top-right');
});

test('проверка 3-го угла', () => {
	const corner3 = calcTileType(12, 4);
	expect(corner3).toBe('bottom-left');
});

test('проверка 4-го угла', () => {
	const corner4 = calcTileType(15, 4);
	expect(corner4).toBe('bottom-right');
});

test('проверка верхних клеток', () => {
	const topSide = calcTileType(2, 4);
	expect(topSide).toBe('top');
});

test('проверка левых клеток', () => {
	const leftSide = calcTileType(4, 4);
	expect(leftSide).toBe('left');
});

test('проверка правых клеток', () => {
	const rightSide = calcTileType(11, 4);
	expect(rightSide).toBe('right');
});

test('проверка нижних клеток', () => {
	const bottomSide = calcTileType(13, 4);
	expect(bottomSide).toBe('bottom');
});

test('проверка внутренних клеток', () => {
	const center = calcTileType(10, 4);
	expect(center).toBe('center');
});