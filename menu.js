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
                  "text": "#Game",
                  "weight": "bold"
                },
                {
                  "type": "span",
                  "text": " to show game menu"
                }
              ]
            },
            {
              "type": "button",
              "action": {
                "type": "message",
                "label": "Game",
                "text": "#goto game"
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

  }
}

module.exports = {help, game};