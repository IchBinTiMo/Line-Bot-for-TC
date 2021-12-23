require("dotenv").config();
const {machine} = require("./machine");
const linebot = require("linebot");



let bot = linebot(
  {
    channelId: process.env.CHANNEL_ID,
    channelSecret: process.env.CHANNEL_SECRET,
    channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
  });


bot.on('message', function(event)
{
  let input;
  switch(event.message.text){
    case "go to state 1":
      input = "state1";
      break;
    case "go to state 2":
      input = "state2";
      break
    case "go back":
      input = "user";
      break;
  }
  let respond = machine["state"][machine.current]

  if(respond){
    respond = respond.apply(machine)
  }
  else{
    respond = "Not Entering any State";
  }

  event.reply(respond).then(function()
  {
    console.log("Respond Successfully!");
  }).catch(function()
  {
    console.log("Respond Failed!");
  });
  
});

bot.listen("", process.env.PORT || 3000, function(response)
{
  console.log("listening at 3000...");
});
