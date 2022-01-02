class enemy
{
  constructor(level, hpSeed, atkSeed, defSeed, coinSeed, basic){
    this.maxHp = Math.floor((50 + 2 * level * Math.sqrt(level) * (1 + hpSeed)) * Math.pow(basic, 1.5) * (1 + hpSeed));
    this.currentHp = this.maxHp;
    this.atk = Math.floor((10 + 2 * level * Math.sqrt(level) * (1 + atkSeed)) * Math.pow(basic, 1/3) * (1 + atkSeed));
    this.def = Math.floor((10 + 2 * level * Math.sqrt(level) * (1 + defSeed)) * Math.pow(basic, 1/3) * (1 + defSeed));
    this.coin = Math.floor(2 * level * Math.sqrt(level) * Math.pow(basic, 1.5) * (1 + coinSeed));
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
}

class enemySpawner
{
  constructor(){
    this.pool = new Array(100);
    this.pool.fill(0);
    this.interval = 0.15;

    this.pool = this.pool.map((x, i) => (i < 75) ? 1 : ( i < 95 ) ? 2 : 3);
  }
  spawn(level){
    let i = Math.floor(Math.random() * 100);
    let h = Math.random();
    let a = Math.random();
    let d = Math.random();
    let hs = h * 2 * this.interval - this.interval;
    let as = a * 2 * this.interval - this.interval;
    let ds = d * 2 * this.interval - this.interval;
    let cs = (h + a + d) * this.interval;
    // console.log(level, this.pool[i], h, hs, a, as, d, ds);
    let e = new enemy(level, hs, as, ds, cs, this.pool[i]);
    return e;

  }
}

module.exports = enemySpawner;