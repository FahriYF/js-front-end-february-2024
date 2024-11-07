function solve(lostFight, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let moneySpend = 0;

    moneySpend += Math.trunc(lostFight / 2) * helmetPrice;
    moneySpend += Math.trunc(lostFight / 3) * swordPrice;
    moneySpend += Math.trunc(lostFight / 6) * shieldPrice;
    moneySpend += Math.trunc(lostFight / 12) * armorPrice;

    console.log(`Gladiator expenses: ${moneySpend.toFixed(2)} aureus`); 
}