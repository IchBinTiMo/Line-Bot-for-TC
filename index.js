const dotenv = require("dotenv");
const express = require('express');
const line = require("@line/bot-sdk");
const middleware = line.middleware;
const fs = require("fs");

const machine = (require("./machine")).machine;

const app = express();

const richmenuForDungeon = {
  "size": {
    "width": 2500,
    "height": 1686
  },
  "selected": true,
  "name": "Nice richmenu",
  "chatBarText": "Game Action",
  "areas": [
  // 區塊1：
    {
      "bounds": {
        "x": 0,
        "y": 0,
        "width": 2500,
        "height": 843
      },
      "action": {
        "type": "message",
        "label": "Forward",
        "text": "#forward"
      }
    },
// 區塊2：
    {
      "bounds": {
        "x": 0,
        "y": 843,
        "width": 833,
        "height": 843
      },
      "action": {
        "type": "message",
        "label": "Heal",
        "text": "#heal"
      }
    },
// 區塊3：   
    {
      "bounds": {
        "x": 833,
        "y": 843,
        "width": 833,
        "height": 843
      },
      "action": {
        "type": "message",
        "label": "Home",
        "text": "#home"
      }
    },
    {
      "bounds": {
        "x": 1667,
        "y": 843,
        "width": 833,
        "height": 843
      },
      "action": {
        "type": "message",
        "label": "Attack",
        "text": "#attack"
      }
    }
  ]
}

const richmenuForShop = {
  "size": {
    "width": 2500,
    "height": 1686
  },
  "selected": true,
  "name": "Nice richmenu",
  "chatBarText": "Shop",
  "areas": [
  // 區塊1：
    {
      "bounds": {
        "x": 0,
        "y": 0,
        "width": 2500,
        "height": 843
      },
      "action": {
        "type": "message",
        "label": "Forward",
        "text": "welcome"
      }
    },
// 區塊2：
    {
      "bounds": {
        "x": 0,
        "y": 843,
        "width": 833,
        "height": 843
      },
      "action": {
        "type": "message",
        "label": "HealPotion",
        "text": "#healPotionS"
      }
    },
// 區塊3：   
    {
      "bounds": {
        "x": 833,
        "y": 843,
        "width": 833,
        "height": 843
      },
      "action": {
        "type": "message",
        "label": "Home",
        "text": "#home"
      }
    },
    {
      "bounds": {
        "x": 1667,
        "y": 843,
        "width": 833,
        "height": 843
      },
      "action": {
        "type": "message",
        "label": "Attack",
        "text": "hi"
      }
    }
  ]
}
dotenv.config();



const config = {
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
};

const client = new line.Client(config);


let input;
let action;
let current = machine.initial;
let promise = Promise.resolve();
let gameMenu = false;
let shopMenu = false;

// const ENTER_FAIL = "Not Entering Any State";
// const WRONG_CMD = "Wrong Command!\nType #help to show all command";


// let dungeon = new Dungeon();
// let player = new Player();

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
  // console.log(event);
  let name;
  userId = event.source.userId;
  client.getProfile(userId)
    .then((profile) => {
      let path = {};
      path.dungeon = "./image/richmenuInDungeon.png";
      path.shop = "./image/richmenuInShop.png";
      name = profile.displayName;
      machine.player.name = name;
      respond = handler(event)
      setRichMenu(userId, path);
      
      // use reply API

      respond.forEach((el, idx) => {
        promise = promise.then(() => {
          client.pushMessage(event.source.userId, el).catch(err => console.error(err));
          return new Promise((resolve) => {
            setTimeout(resolve, 1000);
          });
        });
      });
  
    });
  // console.log(name);
  // console.log(userId, gameRmId);
  


}

function handler(event)
{
  
  let req = event.message.text.split(" ");
  let respond = [];

  if(req[0][0] == '#'){
    action = req[0].substring(1);
    input = req[1];
    
    // if(action == "help"){
    //   if(current == "home"){
    //     respond.push();
    //   }
    //   else{
    //     respond.push({
    //       type: "flex",
    //       altText: "Game Helper",
    //       contents: menu.game()
    //     });
    //   }      
    // }
    // else if(action == "status"){
    //   // console.log("status")
    //   respond.push({
    //     type: "flex",
    //     altText: "Status",
    //     contents: menu.status()
    //   });
    //   if(machine.enemy != undefined){
    //     respond.push({
    //       type: "flex",
    //       altText: "Status",
    //       contents: menu.enemy()
    //     });
    //   }
    //   // console.log(respond);
    // }
    // else if(action == "location"){
    //   // console.log(action, current)
    //   current = machine.current;
    //   // console.log(current);
    //   respond.push({
    //     type: "text",
    //     text: current
    //   });
    // }
    // else{
    //   // console.log("index.js, 89", current, action)
      

      
    // }
    if(Object.keys(machine.states[current]["on"]).includes(action.toUpperCase())){
      msg = machine.states[current]["on"][action.toUpperCase()].actions(action);
      current = machine.current;
      // console.log(current);
    }
    else{
      msg = ["Invalid command"];
    }

    console.log(msg);
    for(const r of msg){
      if(typeof(r) == "object"){
        respond.push(r);
      }
      else{
        respond.push({
          type: "text",
          text: r
        });
      }
      
    }
  }

  return respond;
}

function setRichMenu(userId, path)
{
  console.log(current);
  if(current != "home" && current != "shop"){
    client.createRichMenu(richmenuForDungeon)
      .then((id) => {
        if(gameMenu == false){
          let readStream = fs.createReadStream(path.dungeon);
          client.setRichMenuImage(id, 
            readStream)
            .then(() => {
              client.linkRichMenuToUser(userId, id);
              readStream.destroy();
              gameMenu = true;
            }).catch((err) => console.error(err));
        }
      });    
  }
  else if(current == "shop"){
    client.createRichMenu(richmenuForShop)
      .then((id) => {
        if(shopMenu == false){
          let readStream = fs.createReadStream(path.shop);
          client.setRichMenuImage(id, 
            readStream)
            .then(() => {
              client.linkRichMenuToUser(userId, id);
              readStream.destroy();
              shopMenu = true
            }).catch((err) => console.error(err));
        }
      });
  }
  else{
    client.getRichMenuIdOfUser(userId)
      .then((id) => {
        client.unlinkRichMenuFromUser(userId, id);
      }).catch((err) => {});
    // console.log(id);
    
    gameMenu = false;
    shopMenu = false;
  }
}

// function gameEventHandler(action, input)
// {
//   if(action == "forward"){
//     if(dungeon.fighting == 1){
//       respond = {
//         "type": "text",
//         "text": "You need to beat the enemy to go to next stage"
//       }
//     }
//     else{
//       let dungeonMsg = dungeon.forward();
//       if(dungeonMsg.type == "enemy"){
//         dungeon.fighting = 1;
//       }
//       respond = {
//         "type": "text",
//         "text": dungeonMsg.msg
//       }
//     }
    
//   }
//   else if(action == "heal"){
//     respond = {
//       "type": "text",
//       "text": "heal up"
//     }
//   }
//   else if(action == "attack"){
//     if(dungeon.fighting == 1){
//       respond = {
//         "type": "text",
//         "text": "attack!"
//       }
//     }
//     else{
//       respond = {
//         "type": "text",
//         "text": "No target!"
//       }
//     }
      
//   }
//   else if(action == "goto" && input == "home"){
//     current = machine.transition(current, input);
//     respond = {
//       "type": "text",
//       "text": machine.states[input].entry()
//     };
//   }
//   else if(action == "help"){
//     respond = {
//       "type": "flex",
//       "altText": "game action flex",
//       "contents": menu.game()

//     }
//   }
//   else{
//     respond = {
//       "type": "text",
//       "text": WRONG_CMD
//     }
//   }
//   return respond;
// }



app.listen(process.env.PORT || 3000, () => 
{
  console.log(`Listening on ${process.env.PORT}...`);
});

