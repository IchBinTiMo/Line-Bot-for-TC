// import {Machine, interpreter} from "xstate";

const xstate = require("xstate");

const machine = xstate.Machine(
  {
    initial: "user",
    states:
    {
      user:
      {
        on:
        {
          STATE1: 
          {
            target: "state1",
            // actions: ["entryState1"]
          },
          STATE2: "state2"
        }
      },
      state1:
      {
        entry: entryState1,
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

    }    
  },
  {
    actions:
    {
      entryState1: (context, event) => console.log("Trigger state 1")
      
    }
  });

  module.exports = {machine};