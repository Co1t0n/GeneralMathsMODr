<h1 align="center">General Mathematics MOD</h1>

# ATTENTION
### This MOD ***is a work in progress***. This means that, if you deploy this repository, there will be **lots of issues**. See TO-DO Section for more information about what is going to be done in this MOD.

## Features 
- Tons of apps & games
- History hider (about:blank Cloak)
- Sleek UI with good animations
- Tab cloaker(Change TAB's Name and Logo)
- Support page to help lost and confused people
- A working emulator
- ~~A chatroom~~ BROKEN FEATURE
- And more!

## Suported Websites
- [Youtube](https://www.youtube.com)
- [CAPTCHA/hCAPTCHA](https://www.captcha.net)
- [Spotify](https://spotify.com)
- [Discord](https://discord.com)
- [Reddit](https://reddit.com)
- [GeForce NOW](https://play.geforcenow.com/) (Partially Supported)
- [Github](https://github.com/)
- [Replit](https://replit.com/) (Partially Supported)
- Any static website
- And more❕

# Deploying and Setting up your own General Mathematics MOD

## General Mathematics MOD Quick Deploys

[![Deploy to Heroku](https://raw.githubusercontent.com/BinBashBanana/deploy-buttons/master/buttons/remade/heroku.svg)](https://heroku.com/deploy/?template=https://github.com/moddedstuffguy/GeneralMaths)
[![Run on Replit](https://raw.githubusercontent.com/BinBashBanana/deploy-buttons/master/buttons/remade/replit.svg)](https://replit.com/github/moddedstuffguy/GeneralMaths)

## Basic Guide (For Linux and Bash based Terminals)

```sh
$ git clone https://github.com/moddedstuffguy/GeneralMaths --recursive
$ cd GeneralMaths
$ npm install
$ npm start
```

## Replit Setup Guide

Click the ***Run on Replit*** button and ***CHOOSE*** Node.JS as the language.
To setup on Replit, first click on the ***"Run on Replit"*** button. After loading into your repl, run the following commands:
```sh
$ npm install
$ chmod +x main.sh
$ ./main.sh
```
**IMPORTANT:** On Repl, make sure to run the `git submodule update --init` command in shell ***before running other commands***.

## Updating Bare
```
git submodule update --remote
```

However, this may override files in `static/` so *be careful*.

# GeneralMaths Documentation

## File Structure
```
Folders
static - Folder for files of General Math
node_modules - Files for bare-server-node
BlacklistServe - Used to block make General Math undetectable to automod

Static
css - Contains all CSS for the website and themes
gfiles - Contains all files for games and SWF games
img - For all images used within the website
intergrations - Contains all integrated features
nohist - Allows for people to use About:Blank for no history
scripts - Contains all Javascript files
uv - Contains all files for Ultraviolet Backend Script
```

## TO-DO List (for General Mathematics MOD)

- [x] Change README.md Info
- [x] Upload New Background to the Repository
- [ ] Apply the New Web Background
- [ ] Add or change some images
- [ ] Change Website info
- [ ] Remove, Add and Modify some Links from `Apps` Page

## Credits

General Mathematics Original Repo https://github.com/GeneralMathematics/General-Mathematics-Beta

Ultraviolet https://github.com/titaniumnetwork-dev/Ultraviolet

Lightspeed Blocker https://github.com/NebulaServices/Nebula

Package-lock.json https://github.com/AstralService/Lucid/blob/main/package-lock.json

FoxMoss https://mediaology.com

Gfiles https://github.com/BinBashBanana/gfiles

Some More Gfiles https://github.com/caracal-js/gfiles

EmulatorJS https://github.com/ethanaobrien/emulatorjs

EaglerCraft https://github.com/LAX1DUDE/eaglercraft
