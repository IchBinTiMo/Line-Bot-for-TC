const enemySpawner = require('./enemy');
class dungeon
{
  constructor(){
    this.event = new Array(10);
    this.event.fill(0);
    this.event = this.event.map((x, i) => (i < 6) ? 1 : ( i < 7 ) ? 2 : 3)
    this.level = 1;
    this.fighting = 0;
  }
  forward(){
    let t = Math.floor(Math.random() * this.event.length);
    return this.nextStage(this.event[t]);
  }
  nextStage(type){
    if(type == 3){
      return "nothing";
    }
    else if(type == 1){
      let e = new enemySpawner();
      return "enemy";
    }
    else if(type == 2){
      return "treasure";
    }
   
  }
}

module.exports = dungeon;