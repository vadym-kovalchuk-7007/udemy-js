"use strict";
var monsterHealthBar = document.getElementById("monster-health");
var playerHealthBar = document.getElementById("player-health");
var bonusLifeEl = document.getElementById("bonus-life");
var attackBtn = document.getElementById("attack-btn");
var strongAttackBtn = document.getElementById("strong-attack-btn");
var healBtn = document.getElementById("heal-btn");
var logBtn = document.getElementById("log-btn");
function adjustHealthBars(maxLife) {
    monsterHealthBar.max = maxLife;
    monsterHealthBar.value = maxLife;
    playerHealthBar.max = maxLife;
    playerHealthBar.value = maxLife;
}
function dealMonsterDamage(damage) {
    var dealtDamage = Math.random() * damage;
    monsterHealthBar.value = +monsterHealthBar.value - dealtDamage;
    return dealtDamage;
}
function dealPlayerDamage(damage) {
    var dealtDamage = Math.random() * damage;
    playerHealthBar.value = +playerHealthBar.value - dealtDamage;
    return dealtDamage;
}
function increasePlayerHealth(healValue) {
    playerHealthBar.value = +playerHealthBar.value + healValue;
}
function resetGame(value) {
    playerHealthBar.value = value;
    monsterHealthBar.value = value;
}
function removeBonusLife() {
    var _a;
    (_a = bonusLifeEl.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(bonusLifeEl);
}
function setPlayerHealth(health) {
    playerHealthBar.value = health;
}
