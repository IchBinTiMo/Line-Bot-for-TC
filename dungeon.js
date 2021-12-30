const enemySpawner = require('./enemy').enemySpawner;
class dungeon
{
  constructor(){
    this.event = ["enemy", "enemy", "enemy", "enemy", "enemy", "enemy", "enemy", "treasure", "nothing", "nothing"];
    this.level = 1;
    this.fighting = 0;
    this.type = "nothing";
  }
  foward(){
    let t = Math.random(this.event.length);
    console.log(t);
    return newStage(this.event[t]);
  }
  nextStage(type){
    if(type == "nothing"){
      return {
        type: type,
        msg: "There is nothing here..."}
    }
    else if(type == "enemy"){
      this.fighting = 1;
      let e = new enemySpawner();
      return {
        type: type, 
        msg: "An enemy blocks your way",
        enemy: e
      }
    }
    else if(type == "treasure"){
      return{
        type: type,
        msg: "You see something..."
      }
    }
   
  }
}

module.exports = dungeon;