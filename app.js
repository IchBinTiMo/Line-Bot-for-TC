require("dotenv").config();
const machine = (require("./machine")).machine;
// const machine = require("./stateMachine").machine;
const linebot = require("linebot");
const menu = require("./menu");
let type;

let input;
let action;
let current = machine.initial;

const ENTER_FAIL = "Not Entering Any State";
const WRONG_CMD = "Wrong Command!";


let bot = linebot(
  {
    channelId: process.env.CHANNEL_ID,
    channelSecret: process.env.CHANNEL_SECRET,
    channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
  });


bot.on('message', function(event)
{
  let req = event.message.text.split(" ");

  if(req[0][0] == '#'){
    action = req[0].substring(1);
    input = req[1];
    console.log(action);

    if(action == "location"){
      respond = current;
      type = "text";
    }
    else if(action == "goto"){
      if(machine.transition(current, input) != null){
        current = machine.transition(current, input);
        respond = "Trigger " + input;
        type = "text";
      }
      else{
        respond = ENTER_FAIL;
        type = "text";
      }
    }
    else if(action == "help"){
      respond = menu.help();
      type = "flex"
    }
    else if(action == "status"){

    }
    else{
      respond = WRONG_CMD;
      type = "text";
    }
  }
  else{
    respond = "";
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

  console.log(respond);
  if(type === "text"){
    event.reply({type: type, text: respond}).then(function()
    {
      console.log("Respond Successfully!");
    }).catch(function()
    {
      console.log("Respond Failed!");
    });
  }
  else if(type === "flex"){
    event.reply({type: "template", template: respond}).then(function()
    {
      console.log("Respond Successfully!");
    }).catch(function()
    {
      console.log("Respond Failed!");
    });
  }
  
  
});

bot.listen("/callback", process.env.PORT || 3000, function(response)
{
  console.log("listening at 3000...");
});
