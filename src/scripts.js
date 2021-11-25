let height = '3', damage, game = 'half-life'; let unit;

function getVelocity(n) {
  return Math.sqrt(2 * 800 * n);
}

function unit2meter(n) {
  return n / 39.3701;
}

function unit2ft(n) {
  return n / 12;
}

function getDamage(n) {
  switch (game) {
    case 'half-life': {
      damage = Math.floor((25/111) * (getVelocity(n) - 580));
      if (damage <= 0) damage = 0;
      return damage
    }
    case 'nmrih': {
      damage = Math.floor((25/55) * (getVelocity(n) - 480));
      if (damage <= 0) damage = 0;
      return damage
    }
    case 'l4d': {
      damage = Math.floor((25/40) * (getVelocity(n) - 560));
      if (damage <= 0) damage = 0;
      if (damage >= 200) damage += ' (instant death [no incap])';
      return damage
    }
    case 'tf2': {
      damage = Math.floor(5 * (getVelocity(n) / 300));
      if (n < 264) damage = 0;
      return damage
    }
  }
}

document.addEventListener('input', () => {
  game = document.getElementById('game').value; //setting game value
  height = document.getElementById('height-range').value; //height in meters
  unit = height * 39.3701;
  document.getElementById('result-height').innerText = `Height: ${height} m; ${Math.floor(height*3.28*10)/10} ft`;
  document.getElementById('result-damage').innerText = `Damage: ${getDamage(unit)}`;
  document.getElementById('formula').src = `formula/${document.getElementById('game').value}.png`;
});
