class player
{
  constructor(maxHp, currentHp, atk, def, coin){
    this.maxHp = 100;
    this.currentHp = 100;
    this.atk = 15;
    this.def = 15;
    this.coin = 0;
    this.name = "";
    this.item = [];
  }
  attack(){
    let interval = 0.2
    let random = Math.random() * 2 * interval - interval;
    return Math.floor(this.atk * (1 + random));
  }
  underAttack(atk){
    let interval = 0.2
    let random = Math.random() * 2 * interval - interval;
    let dmg = Math.floor(atk / this.def / 0.6 * Math.pow(atk, 2/3) * (1 + random));
    this.currentHp = this.currentHp - dmg;
    return dmg;
  }
  state(){
    return{

    }
  }
}

module.exports = player;