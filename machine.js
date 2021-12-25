const machine = {
    initial: "user",
    current: "user",
    states:
    {
      user:
      {
        exit: () => {console.log("exit user")},
        on:
        {
          STATE1: 
          {
            target: "state1",
            actions: () => {console.log("actions from user to state1");}
          },
          STATE2: "state2"
        }
      },
      state1:
      {
        entry: () => {machine.actions.entryState1()},
        on:
        {
          USER: "user"
        }
      },
      state2:
      {
        on:
        {
          USER: "user"
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
//   current: "user",
//   state: {
//     user: {
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
//         user: function() {
//           return this.goToUser();
//         }
//       },      
//     },
//     state2: {
//       goto: {
//         user: function() {
//           return this.goToUser();
//         }
//       }      
//     }
//   },
//   goToUser(){
//     let message = "Trigger user\nSelect state1 or state2";
//     this.changeState("user");
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