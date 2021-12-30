const machine = {
    initial: "home",
    current: "home",
    maxHp: 100,
    currentHp: 100,
    atk: 10,
    def: 10,
    states:
    {
      home:
      {
        entry: () => {return machine.actions.entryHome()},
        exit: () => {console.log("exit home")},
        on:
        {
          DUNGEON: 
          {
            target: "dungeon",
            actions: () => {console.log("trigger dungeon");}
          },
          SHOP: "shop"
        }
      },
      shop:
      {entry: () => {return machine.actions.entryShop()},
        on:
        {
          HOME: "home"
        }
      },
      dungeon:
      {
        entry: () => {return machine.actions.entryDungeon()},
        on:
        {
          HOME: "home",

        }
      }

    },
    actions:
    {
      entryDungeon: () => {
        msg = "Welcome to Dungeon!";
        return msg;
      },
      entryShop: () => {
        msg = "Welcome to Shop!";
        return msg;
      },
      entryHome: () => {
        msg = "Home Sweet Home";
        return msg;
      }
    },
    transition: (cur, nxt) => {
      let current = machine.states[cur];
      let currentNode = Object.keys(current);
      let states = Object.keys(current.on);
        
      if(states.includes(nxt.toUpperCase())){
        if(currentNode.includes("exit")){
          current.exit();
        }
        if(Object.keys(current.on[nxt.toUpperCase()]).includes("actions")){
          current.on[nxt.toUpperCase()].actions();
        }
        machine.current = nxt;
        let next = machine.states[nxt];
        let nextNode = Object.keys(next);
        if(nextNode.includes("entry")){
          next.entry();
        }
      }
      else{
        machine.current = null;
      }
      return machine.current;
    }
  }


// const machine = {
//   current: "home",
//   state: {
//     home: {
//       goto:{
//         state1: function(){
//           return this.goToState_1();
//         }, 
//         shop: function() {
//           return this.goToState_2();
//         }
//       }      
//     },
//     state1: {
//       goto: {
//         home: function() {
//           return this.goToUser();
//         }
//       },      
//     },
//     shop: {
//       goto: {
//         home: function() {
//           return this.goToUser();
//         }
//       }      
//     }
//   },
//   goToUser(){
//     let message = "Trigger home\nSelect state1 or shop";
//     this.changeState("home");
//     return message;
    
//   },
//   goToState_1(){
//     let message = "Trigger state1";
//     this.changeState("state1");
//     return message;
//   },

//   goToState_2(){
//     let message = "Trigger shop";
//     this.changeState("shop");
//     return message;
//   },

//   changeState(newState){
//     this.current = newState;
//   }
// }


module.exports = {machine};