require("dotenv").config();
const express = require('express');
const line = require("@line/bot-sdk");
const middleware = line.middleware;

const machine = (require("./machine")).machine;
const menu = (require("./menu"));

const app = express();

const config = {
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
};

const client = new line.Client(config);

let input;
let action;
let current = machine.initial;

const ENTER_FAIL = "Not Entering Any State";
const WRONG_CMD = "Wrong Command!\nType #help to show all command";

app.post("/callback", middleware(config), (req, res) => 
{
  // console.log(req, res)

  Promise
    .all(req.body.events.map(eventHandler))
    .then((result) => res.json(result))
    .catch((err) => {
      console.error(err);
      res.status(500).end();
    });
});

function eventHandler(event)
{
  let req = event.message.text.split(" ");

  if(req[0][0] == '#'){
    action = req[0].substring(1);
    input = req[1];

    if(action == "location"){
      respond = {
      "type": "text",
      "text": current
    };
    }
    else if(action == "goto"){
      if(machine.transition(current, input) != null){
        console.log(machine.states[input].entry());
        current = machine.transition(current, input);
        respond = {
          "type": "text",
          "text": "Trigger " + input
        };
      }
      else{
        respond = {
          "type": "text",
          "text": ENTER_FAIL
        }
      }
    }
    else if(action == "help"){
      respond = {
        "type": "flex",
        "altText": "help flex",
        "contents": menu.help()

      }
    }
    
    else{
      respond = {
        "type": "text",
        "text": WRONG_CMD
      }
    }
  }
  else{
    respond = {
      "type": "text",
      "text": ""
    };
  }
  // use reply API
  return client.replyMessage(event.replyToken, respond);
}

app.listen(process.env.PORT || 3000, () => 
{
  console.log(`Listening on ${process.env.PORT}...`);
});

