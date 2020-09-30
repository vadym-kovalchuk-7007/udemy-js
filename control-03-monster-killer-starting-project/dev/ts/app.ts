console.log("Moster fighting");
const ATTACK_VALUE = 10;
const BONUS_LIFE_COEFFICIENT = 0.2;
const DEFAULT_MAX_LIFE_VALUE = 100;
const HARD_ATTACK_VALUE = 17;
const HEAL_VALUE = 20;
const MONSTER_ATTACK_VALUE = 14;
let chosenMaxLife = userInputMaxLife(
  prompt("Set max life", `${DEFAULT_MAX_LIFE_VALUE}`)
);
let currentMosterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;
let battleLog: object[] = [];
type battleLog = {
  attackValue: number;
  damageMonsterValue: number;
  damagePlayerValue: number;
  currentPlayerHealth: number;
  currentMonsterHealth: number;
  hasBonusLife: boolean;
};
type healLog = {
  healValue: number;
  currentPlayerHealth: number;
  prevCurrentPlayerHealth: number;
  currentMosterHealth: number;
};
adjustHealthBars(chosenMaxLife);

attackBtn?.addEventListener("click", attackHandler);
strongAttackBtn?.addEventListener("click", hardAttackHandler);
healBtn?.addEventListener("click", healHandler);
logBtn?.addEventListener("click", showBattleLog);

/**
 * Validate user input max life value.
 */
function userInputMaxLife(userInputValue: string | null): number {
  let value: number;

  return userInputValue && (value = parseInt(userInputValue))
    ? Math.abs(value)
    : DEFAULT_MAX_LIFE_VALUE;
  /*
    Or try throw new Error(""); || throw {message: "error msg"} catch(error);
    */
}
/**
 * Attack monster and give monster's feedback.
 */
function attackHandler(): void {
  attack(ATTACK_VALUE);
}

/**
 * Hard attack monster and give feedback from him.
 */
function hardAttackHandler(): void {
  attack(HARD_ATTACK_VALUE);
}

/**
 * Attack of players.
 * @param attackValue
 */
function attack(attackValue: number): void {
  const damageMonster: number = dealMonsterDamage(attackValue);
  currentMosterHealth -= damageMonster;
  const damagePlayer: number = dealPlayerDamage(attackValue);
  currentPlayerHealth -= damagePlayer;
  let data2log: battleLog = {
    attackValue: attackValue,
    damageMonsterValue: damageMonster,
    damagePlayerValue: damagePlayer,
    currentMonsterHealth: currentMosterHealth,
    currentPlayerHealth: currentPlayerHealth,
    hasBonusLife: hasBonusLife,
  };
  writeLog(data2log);
  checkWinner();
}
/**
 * Check who is winner.
 */
function checkWinner(): void {
  // Player has bonus life
  if (currentPlayerHealth <= 0 && hasBonusLife) {
    hasBonusLife = false;
    removeBonusLife();
    let increaseLifeValue = chosenMaxLife * BONUS_LIFE_COEFFICIENT;
    currentPlayerHealth = increaseLifeValue;
    increasePlayerHealth(increaseLifeValue);
  }
  if (currentMosterHealth <= 0 && currentPlayerHealth > 0) {
    console.log("You won!");
  } else if (currentPlayerHealth <= 0 && currentMosterHealth > 0) {
    console.log("Monster won!");
  } else if (currentMosterHealth <= 0 && currentPlayerHealth <= 0) {
    alert("You have a draw");
  }
  if (currentMosterHealth <= 0 || currentPlayerHealth <= 0) {
    reset();
  }
}

/**
 * Heal of player.
 */
function healHandler(): void {
  let healValue: number =
    currentPlayerHealth >= chosenMaxLife - HEAL_VALUE
      ? chosenMaxLife - currentPlayerHealth
      : HEAL_VALUE;
  increasePlayerHealth(healValue);
  let data2Log: healLog = {
    healValue: healValue,
    currentPlayerHealth: currentPlayerHealth += healValue,
    prevCurrentPlayerHealth: currentPlayerHealth - healValue,
    currentMosterHealth: currentMosterHealth,
  };
  writeLog(data2Log);
  checkWinner();
}

/**
 * Set health to max.
 */
function reset(): void {
  resetGame(chosenMaxLife);
  currentMosterHealth = chosenMaxLife;
  currentPlayerHealth = chosenMaxLife;
}

function writeLog(data: battleLog | healLog): void {
  battleLog.push(data);
}

function showBattleLog(): void {
  console.log("battleLog:>> ", battleLog);
}
