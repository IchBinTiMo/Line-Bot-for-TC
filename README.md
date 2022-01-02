# Line-Bot-for-TC

## Introduction

Line-Bot-for-TC is a Dungeon-like game based on Line bot. With adding the line bot to your friend list, you can explore the unknown world through typing (Of course, you can also touch rich menu to achieve same results if you are too lazy to type in).

## Getting Started

### Prerequisite

- node.js
- https server
- Line (Rich menu will not show in desktop version)

### Setup

- Download

```
git clone https://github.com/IchBinTiMo/Line-Bot-for-TC.git
```

- Install

```
cd Line-Bot-for-TC
npm install
```

## Documentation

### States

- `home`: initial state
- `shop`: in shop
- `dungeon`: in dungeon but not fighting
- `enemy`: fighting state

### Command Format

`#[COMMAND]`

### Command

- `#help` to show all command you can use in the current state
- `#shop` to go to shop from home
- `#dungeon` to go to dungeon from home
- `#status` to show player status and enemy status if exists
- `#location` to show your current state
- `#forward` to go to next stage when in dungeon
- `#heal` to heal when player is not full health and has enough potion
- `#attack` to attack an enemy if exists
- `#home` to go home, but this command can not be used when in `enemy` state
- `#healPotionS` to buy heal potion(S) in shop

#### Still introduction

Unfortunately, there are not much interesting, eye-catching element in this game (actualy none) bucause of the lack of time. Maybe I will implement this project to make this game better if I have spare time.
