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


    if(current == "dungeon"){
      respond = gameEventHandler(action, input);
    }
    else if(current == "home"){
      respond = homeEventHandler(action, input);
    }
    if(action == "location"){
      respond = {
        "type": "text",
        "text": current
      };
    }
    else if(action == "status"){
      respond = {
        "type": "flex",
        "altText": "status flex",
        "contents": menu.status()
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

function homeEventHandler(action, input)
{
  
  if(action == "goto"){
    if(machine.transition(current, input) != null){
      current = machine.transition(current, input);
      respond = {
        "type": "text",
        "text": machine.states[input].entry()
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

  return respond;
}

function gameEventHandler(action, input)
{
  if(action == "forward"){
    respond = {
      "type": "text",
      "text": "gogo"
    }
  }
  else if(action == "heal"){
    respond = {
      "type": "text",
      "text": "heal up"
    }
  }
  else if(action == "attack"){
    respond = {
      "type": "text",
      "text": "attack!"
    }
  }
  else if(action == "goto" && input == "home"){
    current = machine.transition(current, input);
    respond = {
      "type": "text",
      "text": machine.states[input].entry()
    };
  }
  else if(action == "gameAction"){
    respond = {
      "type": "flex",
      "altText": "help flex",
      "contents": menu.game()

    }
  }
  else{
    respond = {
      "type": "text",
      "text": WRONG_CMD
    }
  }
  return respond;
}

app.listen(process.env.PORT || 3000, () => 
{
  console.log(`Listening on ${process.env.PORT}...`);
});

