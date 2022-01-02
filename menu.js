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
              "color": "#62a586",
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
                  "text": "#dungeon",
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
                "text": "#dungeon"
              },
              "style": "primary",
              "color": "#62a586",
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
                  "text": "#shop",
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
                "text": "#shop"
              },
              "style": "primary",
              "color": "#62a586",
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
              "color": "#62a586",
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
              "color": "#62a586",
              "height": "sm"
            }
          ]
        }
      ],
      "backgroundColor": "#326448"
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
              "color": "#62a586",
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
              "color": "#62a586",
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
                  "text": "#attack",
                  "weight": "bold"
                },
                {
                  "type": "span",
                  "text": " to attack your enemy"
                }
              ]
            },
            {
              "type": "button",
              "action": {
                "type": "message",
                "label": "Attack",
                "text": "#attack"
              },
              "style": "primary",
              "color": "#62a586",
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
              "color": "#62a586",
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
                  "text": "#home",
                  "weight": "bold"
                },
                {
                  "type": "span",
                  "text": " to go home"
                }
              ]
            },
            {
              "type": "button",
              "action": {
                "type": "message",
                "label": "Home",
                "text": "#home"
              },
              "style": "primary",
              "color": "#62a586",
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
              "color": "#62a586",
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
              "color": "#62a586",
              "height": "sm"
            }
          ]
        }
      ],
      "backgroundColor": "#326448"
    }
  }
}

function status(player)
{
  return {
    "type": "bubble",
    "body": {
      "type": "box",
      "layout": "vertical",
      "contents": [
        {
          "type": "text",
          "color": "#FFFFFF",
          "contents": [
            {
              "type": "span",
              "text": player.name + ": ",
              "size": "30px",
              "weight": "bold"
            }
          ]
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
              "backgroundColor": "#FF0000",
              "position": "absolute",
              "width": "260px",
              "height": "20px",
              "offsetTop": "28px"
            },
            {
              "type": "box",
              "layout": "vertical",
              "contents": [],
              "backgroundColor": "#00BC00",
              "width": 260 * player.currentHp / player.maxHp + "px",
              "height": "20px"
            },
            {
              "type": "text",
              "text": player.currentHp + " / " + player.maxHp,
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
                  "text": "ATK: " + player.atk,
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
              "align": "start",
              "contents": [
                {
                  "type": "span",
                  "text": "DEF: " + player.def,
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
                  "text": "Coin: " + player.coin,
                  "size": "20px",
                  "weight": "bold"
                }
              ]
            }
          ]
        }
      ],
      "backgroundColor": "#326448"
    }
  }
}

function enemy(enemy)
{
  return {
    "type": "bubble",
    "body": {
      "type": "box",
      "layout": "vertical",
      "contents": [
        {
          "type": "text",
          "color": "#FFFFFF",
          "contents": [
            {
              "type": "span",
              "text": "Enemy:",
              "size": "30px",
              "weight": "bold"
            }
          ]
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
              "backgroundColor": "#FF0000",
              "position": "absolute",
              "width": "260px",
              "height": "20px",
              "offsetTop": "28px"
            },
            {
              "type": "box",
              "layout": "vertical",
              "contents": [],
              "backgroundColor": "#00BC00",
              "width": 260 * enemy.currentHp / enemy.maxHp + "px",
              "height": "20px"
            },
            {
              "type": "text",
              "text": enemy.currentHp + " / " + enemy.maxHp,
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
                  "text": "ATK: " + enemy.atk,
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
                  "text": "DEF: " + enemy.def,
                  "size": "20px",
                  "weight": "bold"
                }
              ]
            }
          ]
        }
      ],
      "backgroundColor": "#326448"
    }
  }
}

function healPotionS() 
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
              "text": "hello, world",
              "contents": [
                {
                  "type": "span",
                  "text": "Heal Potion",
                  "size": "30px",
                  "weight": "bold"
                }
              ],
              "color": "#FFFFFF"
            },
            {
              "type": "text",
              "text": "Heal 10% of max HP",
              "color": "#FFFFFF"
            }
          ]
        },
        {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "button",
              "action": {
                "type": "message",
                "label": "1x",
                "text": "#one"
              },
              "style": "secondary",
              "height": "sm"
            },
            {
              "type": "button",
              "action": {
                "type": "message",
                "label": "10x",
                "text": "ten"
              },
              "style": "secondary",
              "height": "sm",
              "offsetTop": "5px"
            },
            {
              "type": "button",
              "action": {
                "type": "message",
                "label": "100x",
                "text": "hundred"
              },
              "height": "sm",
              "offsetTop": "10px",
              "style": "secondary"
            }
          ],
          "height": "135px"
        }
      ],
      "backgroundColor": "#326448"
    }
  }
}

module.exports = {help, game, status, enemy, healPotionS};