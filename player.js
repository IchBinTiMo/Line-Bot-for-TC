class player
{
  constructor(maxHp, currentHp, atk, def, coin){
    this.maxHp = maxHp;
    this.currentHp = currentHp;
    this.atk = atk;
    this.def = def;
    this.coin = coin;
  }
}

module.exports = player;