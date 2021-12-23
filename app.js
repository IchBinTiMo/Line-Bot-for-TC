require("dotenv").config();
const machine = (require("./machine")).machine;
const linebot = require("linebot");



let bot = linebot(
  {
    channelId: process.env.CHANNEL_ID,
    channelSecret: process.env.CHANNEL_SECRET,
    channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
  });


bot.on('message', function(event)
{
  let req = event.message.text.split(" ");
  let input;
  let command;
  let states = machine.state;

  console.log(req);

  command = req[0].substring(1);

  console.log(command);

  if(command == "current"){
    respond = machine[command];
  }
  else if(command == "goto"){
    input = req[1];
    respond = states[machine.current][command][input]
    if(repond){
      respond = respond.apply(machine);
    }
    else{
      respond = "Not Entering any State";
    }
  }

  // switch(event.message.text){
  //   case "#goto state1":
  //     input = "state1";
  //     break;
  //   case "#goto state2":
  //     input = "state2";
  //     break
  //   case "#goto user":
  //     input = "user";
  //     break;
  // }
  
  console.log(input, respond);

  // if(respond){
  //   respond = respond.apply(machine)
  // }
  // else{
  //   respond = "Not Entering any State";
  // }

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
