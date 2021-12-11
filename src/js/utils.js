export function calcTileType(index, boardSize) {
  // TODO: write logic here
  if (index === 0) {
    return 'top-left';
  } else if (index === 7) {
    return 'top-right';
  } else if (index === 56) {
    return 'bottom-left';
  } else if (index === 63) {
    return 'bottom-right';
  } else if (index >= 1 && index <= 6) {
    return 'top';
  } else if (index >= 57 && index <= 62) {
    return 'bottom';
  } else if (index % 8 === 0) {
    return 'left';
  } else if (index % 8 === 7) {
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
