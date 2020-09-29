"use strict";
console.log("Moster fighting");
var ATTACK_VALUE = 10;
var BONUS_LIFE_COEFFICIENT = 0.2;
var DEFAULT_MAX_LIFE_VALUE = 100;
var HARD_ATTACK_VALUE = 17;
var HEAL_VALUE = 20;
var MONSTER_ATTACK_VALUE = 14;
var chosenMaxLife = userInputMaxLife(prompt("Set max life", "" + DEFAULT_MAX_LIFE_VALUE));
var currentMosterHealth = chosenMaxLife;
var currentPlayerHealth = chosenMaxLife;
var hasBonusLife = true;
var battleLog = [];
adjustHealthBars(chosenMaxLife);
attackBtn === null || attackBtn === void 0 ? void 0 : attackBtn.addEventListener("click", attackHandler);
strongAttackBtn === null || strongAttackBtn === void 0 ? void 0 : strongAttackBtn.addEventListener("click", hardAttackHandler);
healBtn === null || healBtn === void 0 ? void 0 : healBtn.addEventListener("click", healHandler);
logBtn === null || logBtn === void 0 ? void 0 : logBtn.addEventListener("click", showBattleLog);
function userInputMaxLife(userInputValue) {
    var value;
    return userInputValue && (value = parseInt(userInputValue))
        ? Math.abs(value)
        : DEFAULT_MAX_LIFE_VALUE;
}
function attackHandler() {
    attack(ATTACK_VALUE);
}
function hardAttackHandler() {
    attack(HARD_ATTACK_VALUE);
}
function attack(attackValue) {
    var damageMonster = dealMonsterDamage(attackValue);
    currentMosterHealth -= damageMonster;
    var damagePlayer = dealPlayerDamage(attackValue);
    currentPlayerHealth -= damagePlayer;
    var data2log = {
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
function checkWinner() {
    if (currentPlayerHealth <= 0 && hasBonusLife) {
        hasBonusLife = false;
        removeBonusLife();
        var increaseLifeValue = chosenMaxLife * BONUS_LIFE_COEFFICIENT;
        currentPlayerHealth = increaseLifeValue;
        increasePlayerHealth(increaseLifeValue);
    }
    if (currentMosterHealth <= 0 && currentPlayerHealth > 0) {
        console.log("You won!");
    }
    else if (currentPlayerHealth <= 0 && currentMosterHealth > 0) {
        console.log("Monster won!");
    }
    else if (currentMosterHealth <= 0 && currentPlayerHealth <= 0) {
        alert("You have a draw");
    }
    if (currentMosterHealth <= 0 || currentPlayerHealth <= 0) {
        reset();
    }
}
function healHandler() {
    var healValue = currentPlayerHealth >= chosenMaxLife - HEAL_VALUE
        ? chosenMaxLife - currentPlayerHealth
        : HEAL_VALUE;
    increasePlayerHealth(healValue);
    var data2Log = {
        healValue: healValue,
        currentPlayerHealth: currentPlayerHealth += healValue,
        prevCurrentPlayerHealth: currentPlayerHealth - healValue,
        currentMosterHealth: currentMosterHealth,
    };
    writeLog(data2Log);
    checkWinner();
}
function reset() {
    resetGame(chosenMaxLife);
    currentMosterHealth = chosenMaxLife;
    currentPlayerHealth = chosenMaxLife;
}
function writeLog(data) {
    battleLog.push(data);
}
function showBattleLog() {
    console.log("battleLog:>> ", battleLog);
}
