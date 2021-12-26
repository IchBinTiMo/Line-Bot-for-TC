const machine = {
    initial: "home",
    current: "home",
    states:
    {
      home:
      {
        exit: () => {console.log("exit home")},
        on:
        {
          GAME: 
          {
            target: "game",
            actions: () => {console.log("actions from home to state1");}
          },
          STATE2: "state2"
        }
      },
      state1:
      {
        entry: () => {machine.actions.entryState1()},
        on:
        {
          HOME: "home"
        }
      },
      state2:
      {
        on:
        {
          HOME: "home"
        }
      },
      game:
      {
        on:
        {
          HOME: "home",

        }
      }

    },
    actions:
    {
      entryState1: () => {
        console.log("Trigger state 1");
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
//         state2: function() {
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
//     state2: {
//       goto: {
//         home: function() {
//           return this.goToUser();
//         }
//       }      
//     }
//   },
//   goToUser(){
//     let message = "Trigger home\nSelect state1 or state2";
//     this.changeState("home");
//     return message;
    
//   },
//   goToState_1(){
//     let message = "Trigger state1";
//     this.changeState("state1");
//     return message;
//   },

//   goToState_2(){
//     let message = "Trigger state2";
//     this.changeState("state2");
//     return message;
//   },

//   changeState(newState){
//     this.current = newState;
//   }
// }


module.exports = {machine};