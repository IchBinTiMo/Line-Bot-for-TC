require("dotenv").config();
// const machine = (require("./machine")).machine;
const machine = require("./stateMachine").machine;
const linebot = require("linebot");

let input;
let action;
let states = Object.keys(machine.config.states);
let current = machine.initialState;

const ENTER_FAIL = "Not Entering Any State";


let bot = linebot(
  {
    channelId: process.env.CHANNEL_ID,
    channelSecret: process.env.CHANNEL_SECRET,
    channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
  });


bot.on('message', function(event)
{
  let req = event.message.text.split(" ");
  let tmp = machine;

  // console.log(req);

  action = req[0].substring(1);
  input = req[1];

  // console.log(action);

  // if(action == "current"){
  //   respond = machine[action];
  // }
  // else if(action == "goto"){
  console.log("action = " + action);
  if(action == "current"){
    respond = current.value;
  }
  else if(action == "goto"){
    console.log("after: " + tmp.transition(current, input.toUpperCase()).value)
    if(states.includes(input) && current.value != tmp.value){
      console.log("input = " + input);
      current = machine.transition(current, input.toUpperCase());
      respond = "Trigger " + input;      
    }
    else{
      respond = ENTER_FAIL;
    }
  }
  
  //   respond = states[machine.current][action][input]
  //   if(respond){
  //     respond = respond.apply(machine);
  //   }
  //   else{
  //     respond = "Not Entering any State";
  //   }
  // }

  // // switch(event.message.text){
  // //   case "#goto state1":
  // //     input = "state1";
  // //     break;
  // //   case "#goto state2":
  // //     input = "state2";
  // //     break
  // //   case "#goto user":
  // //     input = "user";
  // //     break;
  // // }
  
  // console.log(input, respond);

  // // if(respond){
  // //   respond = respond.apply(machine)
  // // }
  // // else{
  // //   respond = "Not Entering any State";
  // // }

  event.reply(respond).then(function()
  {
    console.log("Respond Successfully!");
  }).catch(function()
  {
    console.log("Respond Failed!");
  });
  
});

bot.listen("/callback", process.env.PORT || 3000, function(response)
{
  console.log("listening at 3000...");
});
