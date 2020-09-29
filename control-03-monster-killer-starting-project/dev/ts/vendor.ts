const monsterHealthBar = document.getElementById(
  "monster-health"
)! as HTMLProgressElement;
const playerHealthBar = document.getElementById(
  "player-health"
)! as HTMLProgressElement;
const bonusLifeEl = document.getElementById("bonus-life")!;

const attackBtn = document.getElementById("attack-btn");
const strongAttackBtn = document.getElementById("strong-attack-btn");
const healBtn = document.getElementById("heal-btn");
const logBtn = document.getElementById("log-btn");

function adjustHealthBars(maxLife: number) {
  monsterHealthBar.max = maxLife;
  monsterHealthBar.value = maxLife;
  playerHealthBar.max = maxLife;
  playerHealthBar.value = maxLife;
}

function dealMonsterDamage(damage: number) {
  const dealtDamage = Math.random() * damage;
  monsterHealthBar.value = +monsterHealthBar.value - dealtDamage;
  return dealtDamage;
}

function dealPlayerDamage(damage: number) {
  const dealtDamage = Math.random() * damage;
  playerHealthBar.value = +playerHealthBar.value - dealtDamage;
  return dealtDamage;
}

function increasePlayerHealth(healValue: number) {
  playerHealthBar.value = +playerHealthBar.value + healValue;
}

function resetGame(value: number) {
  playerHealthBar.value = value;
  monsterHealthBar.value = value;
}

function removeBonusLife() {
  bonusLifeEl.parentNode?.removeChild(bonusLifeEl);
}

function setPlayerHealth(health: number) {
  playerHealthBar.value = health;
}
