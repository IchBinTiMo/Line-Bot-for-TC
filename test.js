const machine = (require("./machine")).machine;
const machineD = (require("./stateMachine"));
// let machine = {
//     initial: "user",
//     states:
//     {
//       user:
//       {
//         on:
//         {
//           STATE1: 
//           {
//             target: "state1",
//             actions: ["entryState1"]
//           },
//           STATE2: "state2"
//         }
//       },
//       state1:
//       {
//         entry: "entryState1",
//         on:
//         {
//           USER: "user"
//         }
//       },
//       state2:
//       {
//         on:
//         {
//           USER: "user"
//         }
//       }

//     }    
//   }

console.log(machine.actions.transtion("user", "state2"));
console.log(machine.current);
// console.log(machineD.initial);
// let num = Object.keys(machine.state);
// let states = Object.keys(machine.config.states);

// let currentState = machine.initialState;

// // console.log(currentState);

// currentState = machine.transition(currentState, "STATE3");

// console.log(currentState.value);
// console.log(machine.transition(currentState, "STATE2").value);

// console.log(machine.transition(currentState, "STATE1").value);