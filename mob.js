class mob
{
  constructor(){
    this.maxHp = 100;
    this.currentHp = 100;
    this.atk = 10;
    this.def = 10;
  }
}

class player extends mob 
{
  init(){
    this.weapon = 0;
    this.armor = 0;
  }
}

class enemy extends mob
{
  init(){
    this.drop = 0;
    this.dropRate = [];
  }
}