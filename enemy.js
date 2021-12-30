class enemy
{
  constructor(level, hpSeed, atkSeed, defSeed, coinSeed, basic){
    this.hp = Math.floor((100 + 2 * level * Math.sqrt(level) * (1 + hpSeed)) * Math.pow(basic, 1/3) * (1 + hpSeed));
    this.atk = Math.floor((10 + 2 * level * Math.sqrt(level) * (1 + atkSeed)) * Math.pow(basic, 1/3) * (1 + atkSeed));
    this.def = Math.floor((10 + 2 * level * Math.sqrt(level) * (1 + defSeed)) * Math.pow(basic, 1/3) * (1 + defSeed));
    this.coin = Math.floor(2 * level * Math.sqrt(level) * Math.pow(basic, 1.5) * (1 + coinSeed));
  }
  attack(){

  }
}

class enemySpawner
{
  constructor(){
    this.pool = new Array(100);
    this.pool.fill(0);
    this.interval = 0.15;

    this.pool = this.pool.map((x, i) => (i < 60) ? 1 : ( i < 95 ) ? 2 : 3);
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
    console.log(level, this.pool[i], h, hs, a, as, d, ds);
    let e = new enemy(level, hs, as, ds, cs, this.pool[i]);
    return e;

  }
}

module.exports = enemySpawner;