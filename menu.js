const machine = require('./machine').machine;

function help()
{
  return {
    "type": "bubble",
    "body": {
      "type": "box",
      "layout": "vertical",
      "contents": [
        {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "text",
              "text": "#help to show all command",
              "align": "center",
              "contents": [
                {
                  "type": "span",
                  "text": "#help",
                  "weight": "bold"
                },
                {
                  "type": "span",
                  "text": " to show all command"
                }
              ],
              "color": "#FFFFFF"
            },
            {
              "type": "button",
              "action": {
                "type": "message",
                "label": "Help",
                "text": "#help"
              },
              "height": "sm",
              "color": "#8a4500",
              "style": "primary"
            }
          ]
        },
        {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "text",
              "text": "hello, world",
              "color": "#FFFFFF",
              "position": "relative",
              "align": "center",
              "contents": [
                {
                  "type": "span",
                  "text": "#goto dungeon",
                  "weight": "bold"
                },
                {
                  "type": "span",
                  "text": " to go to dungeon"
                }
              ]
            },
            {
              "type": "button",
              "action": {
                "type": "message",
                "label": "Dungeon",
                "text": "#goto dungeon"
              },
              "style": "primary",
              "color": "#8a4500",
              "height": "sm"
            }
          ]
        },
        {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "text",
              "text": "hello, world",
              "color": "#FFFFFF",
              "position": "relative",
              "align": "center",
              "contents": [
                {
                  "type": "span",
                  "text": "#goto shop",
                  "weight": "bold"
                },
                {
                  "type": "span",
                  "text": " to go to shop"
                }
              ]
            },
            {
              "type": "button",
              "action": {
                "type": "message",
                "label": "Shop",
                "text": "#goto shop"
              },
              "style": "primary",
              "color": "#8a4500",
              "height": "sm"
            }
          ]
        },
        {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "text",
              "text": "hello, world",
              "color": "#FFFFFF",
              "position": "relative",
              "align": "center",
              "contents": [
                {
                  "type": "span",
                  "text": "#status",
                  "weight": "bold"
                },
                {
                  "type": "span",
                  "text": " to show current status"
                }
              ]
            },
            {
              "type": "button",
              "action": {
                "type": "message",
                "label": "Status",
                "text": "#status"
              },
              "style": "primary",
              "color": "#8a4500",
              "height": "sm"
            }
          ]
        },
        {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "text",
              "text": "hello, world",
              "color": "#FFFFFF",
              "position": "relative",
              "align": "center",
              "contents": [
                {
                  "type": "span",
                  "text": "#location",
                  "weight": "bold"
                },
                {
                  "type": "span",
                  "text": " to show where you are"
                }
              ]
            },
            {
              "type": "button",
              "action": {
                "type": "message",
                "label": "Location",
                "text": "#location"
              },
              "style": "primary",
              "color": "#8a4500",
              "height": "sm"
            }
          ]
        }
      ],
      "backgroundColor": "#331A00"
    }
  }
}

function game()
{
  return {
    "type": "bubble",
    "body": {
      "type": "box",
      "layout": "vertical",
      "contents": [
        {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "text",
              "text": "#help to show all command",
              "align": "center",
              "contents": [
                {
                  "type": "span",
                  "text": "#help",
                  "weight": "bold"
                }
              ],
              "color": "#FFFFFF"
            },
            {
              "type": "text",
              "text": " to show all you can do in dungeon",
              "color": "#FFFFFF",
              "align": "center"
            },
            {
              "type": "button",
              "action": {
                "type": "message",
                "label": "Help",
                "text": "#help"
              },
              "height": "sm",
              "color": "#8a4500",
              "style": "primary"
            }
          ]
        },
        {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "text",
              "text": "hello, world",
              "color": "#FFFFFF",
              "position": "relative",
              "align": "center",
              "contents": [
                {
                  "type": "span",
                  "text": "#forward",
                  "weight": "bold"
                },
                {
                  "type": "span",
                  "text": " to go forward"
                }
              ]
            },
            {
              "type": "button",
              "action": {
                "type": "message",
                "label": "Forward",
                "text": "#forward"
              },
              "style": "primary",
              "color": "#8a4500",
              "height": "sm"
            }
          ]
        },
        {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "text",
              "text": "hello, world",
              "color": "#FFFFFF",
              "position": "relative",
              "align": "center",
              "contents": [
                {
                  "type": "span",
                  "text": "#heal",
                  "weight": "bold"
                },
                {
                  "type": "span",
                  "text": " to heal up if you have potion"
                }
              ]
            },
            {
              "type": "button",
              "action": {
                "type": "message",
                "label": "Heal",
                "text": "#heal"
              },
              "style": "primary",
              "color": "#8a4500",
              "height": "sm"
            }
          ]
        },
        {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "text",
              "text": "hello, world",
              "color": "#FFFFFF",
              "position": "relative",
              "align": "center",
              "contents": [
                {
                  "type": "span",
                  "text": "#goto home",
                  "weight": "bold"
                },
                {
                  "type": "span",
                  "text": " to go to shop"
                }
              ]
            },
            {
              "type": "button",
              "action": {
                "type": "message",
                "label": "Home",
                "text": "#goto home"
              },
              "style": "primary",
              "color": "#8a4500",
              "height": "sm"
            }
          ]
        },
        {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "text",
              "text": "hello, world",
              "color": "#FFFFFF",
              "position": "relative",
              "align": "center",
              "contents": [
                {
                  "type": "span",
                  "text": "#status",
                  "weight": "bold"
                },
                {
                  "type": "span",
                  "text": " to show current status"
                }
              ]
            },
            {
              "type": "button",
              "action": {
                "type": "message",
                "label": "Status",
                "text": "#status"
              },
              "style": "primary",
              "color": "#8a4500",
              "height": "sm"
            }
          ]
        },
        {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "text",
              "text": "hello, world",
              "color": "#FFFFFF",
              "position": "relative",
              "align": "center",
              "contents": [
                {
                  "type": "span",
                  "text": "#location",
                  "weight": "bold"
                },
                {
                  "type": "span",
                  "text": " to show where you are"
                }
              ]
            },
            {
              "type": "button",
              "action": {
                "type": "message",
                "label": "Location",
                "text": "#location"
              },
              "style": "primary",
              "color": "#8a4500",
              "height": "sm"
            }
          ]
        }
      ],
      "backgroundColor": "#331A00"
    }
  }
}

function status()
{
  return {
    "type": "bubble",
    "body": {
      "type": "box",
      "layout": "vertical",
      "contents": [
        {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "text",
              "align": "start",
              "contents": [
                {
                  "type": "span",
                  "text": "HP: ",
                  "weight": "bold",
                  "size": "20px"
                }
              ],
              "color": "#FFFFFF"
            },
            {
              "type": "box",
              "layout": "vertical",
              "contents": [],
              "backgroundColor": "#00BC00",
              "width": "260px",
              "height": "20px"
            },
            {
              "type": "text",
              "text": machine.currentHp + " / " + machine.maxHp,
              "position": "relative",
              "color": "#FFFFFF",
              "offsetBottom": "20px",
              "align": "center"
            }
          ], 
          "height": "50px"
        },
        {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "text",
              "align": "start",
              "contents": [
                {
                  "type": "span",
                  "text": "ATK: " + machine.atk,
                  "weight": "bold",
                  "size": "20px"
                }
              ],
              "color": "#FFFFFF"
            }
          ]
        },
        {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "text",
              "contents": [
                {
                  "type": "span",
                  "color": "#FFFFFF",
                  "text": "DEF: " + machine.def,
                  "size": "20px",
                  "weight": "bold"
                }
              ]
            }
          ]
        }
      ],
      "backgroundColor": "#331A00"
    }
  }
}

module.exports = {help, game, status};