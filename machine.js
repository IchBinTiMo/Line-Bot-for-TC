const Dungeon = require("./dungeon");
const Player = require("./player");
const enemySpawner = require("./enemy");
const menu = (require("./menu"));
const potions = require("./potion");

let dungeon = new Dungeon();
let player = new Player();

const machine = {
    initial: "home",
    current: "home",
    buying: undefined,
    player: player,
    dungeon: dungeon,
    enemy: undefined,
    states:
    {
      home:
      {
        exit: () => {console.log("exit home")},
        on:
        {
          DUNGEON: 
          {
            target: "dungeon",
            actions: (input) => {
              // console.log(machine.current, input);
              machine.transition(machine.current, input);
              return [machine.actions.entryDungeon()];
            }
          },
          SHOP: {
            target: "shop",
            actions: (input) => {
              machine.transition(machine.current, input);
              return [machine.actions.entryShop()];
            }
          },
          HELP:
          {
            target: "help",
            actions: (input) => {
              return [{
                type: "flex",
                altText: "Helper",
                contents: menu.help()
              }];
            }
          },
          STATUS:
          {
            target: "status",
            actions: (input) => {
              return [{
                type: "flex",
                altText: "Your Status",
                contents: menu.status(machine.player)
              }];
            }
          },
          LOCATION:
          {
            target: "location",
            actions: (input) => {
              return [{
                type: "text",
                text: machine.current
              }]
            }
          }
        }
      },
      shop:
      {
        // entry: () => {return [machine.actions.entryShop()]},
        on:
        {
          HOME:{
            target: "home",
            actions: (input) => {
              machine.transition(machine.current, input);
              return [machine.actions.entryHome()];
            }
          },
          LOCATION:
          {
            target: "location",
            actions: (input) => {
              return [{
                type: "text",
                text: machine.current
              }];
            }
          },
          HEALPOTIONS:
          {
            target: "healPotionS",
            actions: (input) => {
              machine.buying = 0;
              return [{
                type: "flex",
                altText: "Buy Heal Potion",
                contents: menu.healPotionS()
              }]
            }
          },
          ONE:
          {
            target: "one",
            actions: (input) => {
              if(machine.buying != undefined){
                if(machine.player.coin >= potions()[machine.buying].price){
                  machine.player.item.filter((el) => el.id == potions[machine.buying].id).length > 0 ? 
                    machine.player.item.filter((el) => el.id == potions[machine.buying].id).forEach(el => el.num + 1) : 
                    arr.push({id: potions[machine.buying].id, num: 1});
                    return [`You've paid ${1 * potions()[machine.buying].price} dollars and got 1 ${potions[machine.buying].name}`];
                }
                return ["You don't have enough money!!!"];
              }
            }
          },
          TEN:
          {
            target: "ten",
            actions: (input) => {
              if(machine.buying != undefined){
                if(machine.player.coin >= potions()[machine.buying].price){
                  machine.player.item.filter((el) => el.id == potions[machine.buying].id).length > 0 ? 
                    machine.player.item.filter((el) => el.id == potions[machine.buying].id).forEach(el => el.num + 10) : 
                    arr.push({id: potions[machine.buying].id, num: 10});
                    return [`You've paid ${10 * potions()[machine.buying].price} dollars and got 10 ${potions[machine.buying].name}`];
                }
                return ["You don't have enough money!!!"];
              }
            }
          },
          HUNDRED:
          {
            target: "hundred",
            actions: (input) => {
              if(machine.buying != undefined){
                if(machine.player.coin >= potions()[machine.buying].price){
                  machine.player.item.filter((el) => el.id == potions[machine.buying].id).length > 0 ? 
                    machine.player.item.filter((el) => el.id == potions[machine.buying].id).forEach(el => el.num + 100) : 
                    arr.push({id: potions[machine.buying].id, num: 100});
                    return [`You've paid ${100 * potions()[machine.buying].price} dollars and got 100 ${potions[machine.buying].name}`];
                }
                return ["You don't have enough money!!!"];
              }
            }
          }
        }
      },
      dungeon:
      {
        on:
        {
          HOME: {
            target: "home",
            actions: (input) => {
              machine.transition(machine.current, input);
              return [machine.actions.entryHome()];
            }
          },
          FORWARD: {
            target: "forward",
            actions: (input) => {
              machine.transition(machine.current, input);
              return [machine.actions.entryForward()];
            }
          },
          HELP:
          {
            target: "help",
            actions: (input) => {
              return [{
                type: "flex",
                altText: "Game Helper",
                contents: menu.game()
              }];
            }
          },
          STATUS:
          {
            target: "status",
            actions: (input) => {
              return [{
                type: "flex",
                altText: "Your Status",
                contents: menu.status(machine.player)
              }];
            }
          },
          LOCATION:
          {
            target: "location",
            actions: (input) => {
              return [{
                type: "text",
                text: machine.current
              }];
            }
          }

        }
      },
      forward:
      {
        on:
        {
          ENEMY:
          {
            target: "enemy",
            actions: (input) => {
              machine.transition(machine.current, input);
              machine.enemy = new enemySpawner().spawn(machine.dungeon.level);
              console.log("enemy spawned");
              return machine.actions.entryEnemy();
            }
          },
          NOTHING: {
            target: "nothing",
            actions: (input) => {         
              machine.transition(machine.current, input);
              return machine.actions.entryNothing();
            }
          },
          TREASURE: {
            target: "treasure",
            actions: (input) => {        
              machine.transition(machine.current, input);
              return machine.actions.entryTreasure();
            }
          }
        }
      },
      enemy:
      {
        on:
        {
          ATTACK:
          {
            target: "attack",
            actions: (input) => {
              machine.transition(machine.current, input);
              msg = machine.actions.attackEnemy()
              return msg;
            }
          },
          FORWARD:
          {
            target: "forward",
            actions: (input) => {
              if(machine.enemy.hp != 0){
                return ["You can not escape from your enemy!"];
              }
            }
          },
          STATUS:
          {
            target: "status",
            actions: (input) => {
              return [{
                type: "flex",
                altText: "Your Status",
                contents: menu.status(machine.player)
              },
              {
                type: "flex",
                altText: "Enemy Status",
                contents: menu.enemy(machine.enemy)
              }];
            }
          },
          LOCATION:
          {
            target: "location",
            actions: (input) => {
              return {
                type: "text",
                text: machine.current
              }
            }
          }
        }
      },
      treasure:
      {
        on:
        {
          DUNGEON:
          {
            target: "dungeon",
            actions: () => {}
          }
        }
      },
      nothing:
      {
        on:
        {
          DUNGEON:
          {
            target: "dungeon",
            actions: () => {}
          }
        }
      },
      attack:
      {
        
        on:
        {
          ENEMY:
          {
            target: "enemy",
            actions: () => {

            }
          },
          DUNGEON:
          {
            target: "dungeon",
            actions: () => {

            }
          }
        }
      }

    },
    actions:
    {
      entryDungeon: () => {
        msg = "Good luck! " + machine.player.name;
        return msg;
      },
      entryShop: () => {
        msg = "Welcome to the Shop!\nWhat can I do for you?";
        return msg;
      },
      entryHome: () => {
        machine.player.currentHp = machine.player.maxHp;
        msg = "Home Sweet Home";
        return msg;
      },
      entryForward: () => {
        let stage = machine.dungeon.forward();
        machine.dungeon.level++;
        // console.log("machine.js 174", machine.current, stage);
        return machine.states[machine.current]["on"][stage.toUpperCase()].actions(stage);
        // machine.current = machine.transition(machine.current, stage);
        // console.log(machine.current)
        // return "walking...";
      },
      entryNothing: () => {
        msg = "There is nothing here...";
        // console.log("call from machine 187");
        machine.transition(machine.current, "dungeon");
        return msg;
      },
      entryEnemy: () => {
        msg = "An enemy has blocked your way";
        return msg;
      },
      entryTreasure: () => {
        msg = "You see something...";
        // console.log("call from machine 196");
        machine.transition(machine.current, "dungeon");
        return msg;
      },
      attackEnemy: () => {
        let p = machine.player;
        let e = machine.enemy;
        let player_dmg = machine.player.atk;
        let enemy_dmg = machine.enemy.atk;
        let coin = machine.enemy.coin;
        console.log(player_dmg, enemy_dmg);
        player_dmg = machine.enemy.underAttack(player_dmg);
        if(machine.enemy.currentHp <= 0){
          machine.player.coin = machine.player.coin + machine.enemy.coin;
          machine.player.currentHp = machine.enemy.currentHp + (machine.player.maxHp - machine.enemy.currentHp) * 0.5;
          machine.enemy = undefined;
          machine.transition(machine.current, "dungeon");
          return ["You deal " + player_dmg + " damage",
                  "The enemy can not fight anymore.",
                  "You win!",
                  "You've got " + coin + " coins"];
        }
        else{
          enemy_dmg = machine.player.underAttack(enemy_dmg);
          if(machine.player.currentHp <= 0){
            machine.transition(machine.current, "dungeon");
            machine.transition(machine.current, "home");
            machine.player.coin = Math.floor(machine.player.coin * 0.5);
            machine.player.currentHp = machine.player.maxHp;  
            machine.enemy = undefined;
            return ["You deal " + player_dmg + " damage",
                    "The enemy deals " + enemy_dmg + " damage",
                    "You have no more HP to fight back.",
                    "You Lose!"];
          }
          machine.transition(machine.current, "enemy");
          return ["You deal " + player_dmg + " damage",
                  "The enemy deal " + enemy_dmg + " damage"];
        }
        
      }
    },
    transition: (cur, nxt) => {
      let current = machine.states[cur];
      let currentNode = Object.keys(current);
      let states = Object.keys(current.on);
        
      if(states.includes(nxt.toUpperCase())){
        
        machine.current = nxt;
        let next = machine.states[nxt];
        let nextNode = Object.keys(next);
      }
    }
  }

module.exports = {machine};