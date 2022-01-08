export function calcTileType(index, boardSize) {
  // TODO: write logic here
  // отображение элементов игрового поля
  let corner1 = 0;
  let corner2 = boardSize - 1;
  let corner3 = corner2 * boardSize;
  let corner4 = (boardSize ** 2) - 1;
  if (index === corner1) {
    return 'top-left';
  } else if (index === corner2) {
    return 'top-right';
  } else if (index === corner3) {
    return 'bottom-left';
  } else if (index === corner4) {
    return 'bottom-right';
  } else if (index > corner1 && index < corner2) {
    return 'top';
  } else if (index > corner3 && index < corner4) {
    return 'bottom';
  } else if (index % boardSize === 0) {
    return 'left';
  } else if (index % boardSize === corner2) {
    return 'right';
  } else {
    return 'center';
  }
}

export function calcHealthLevel(health) {
  if (health < 15) {
    return 'critical';
  }

  if (health < 50) {
    return 'normal';
  }

  return 'high';
}
