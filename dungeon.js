const enemySpawner = require('./enemy');
class dungeon
{
  constructor(){
    this.event = new Array(10);
    this.event.fill(0);
    this.event = this.event.map((x, i) => (i < 6) ? 1 : ( i < 7 ) ? 2 : 3)
    this.level = 1;
    this.fighting = 0;
    this.type = "nothing";
  }
  foward(){
    let t = Math.floor(Math.random() * this.event.length);
    return this.nextStage(this.event[t]);
  }
  nextStage(type){
    if(type == 3){
      this.type = "nothing"
      return {
        type: this.type,
        msg: "There is nothing here..."}
    }
    else if(type == 1){
      this.fighting = 1;
      let e = new enemySpawner();
      this.type = "enemy"
      return {
        type: this.type, 
        msg: "An enemy blocks your way",
        enemy: e
      }
    }
    else if(type == 2){
      this.type = "treasure"
      return{
        type: this.type,
        msg: "You see something..."
      }
    }
   
  }
}

module.exports = dungeon;