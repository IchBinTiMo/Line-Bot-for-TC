exports.help = () => {
  return {
    "type": "bubble",
    "body": {
      "type": "box",
      "layout": "vertical",
      "contents": [
        {
          "type": "button",
          "action": {
            "type": "message",
            "label": "action",
            "text": "#current"
          }
        }
      ]
    }
  }
}