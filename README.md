<h1 align="center">General Mathematics MOD</h1>

## CURRENT VERSION
Version **0.3** (see **CHANGELOG** for *more information*)

## CHANGELOG
[GeneralMathsMOD CHANGELOG](CHANGELOG.md)

# ATTENTION
### This MOD *is a **work in progress***. This means that, if you **deploy** *this repository*, there will be **lots of issues**. Look for the ***TO-DO** Section* on *this* **README** for *more information* about what is going *to be done* in this ***MOD***

## Features 
- Tons of apps & games
- History hider (about:blank Cloak)
- Sleek UI with good animations
- Tab cloaker(Change TAB's Name and Logo)
- Support page to help lost and confused people
- A working emulator
- And more!

## Suported Websites
- [Youtube](https://www.youtube.com)
- [CAPTCHA/hCAPTCHA](https://www.captcha.net)
- [Spotify](https://spotify.com)
- [Discord](https://discord.com)
- [Reddit](https://reddit.com)
- [GeForce NOW](https://play.geforcenow.com/) (Partially Supported)
- [Github](https://github.com/) (Having issues with GitHub login page when using ultraviolet)
- [Replit](https://replit.com/) (Partially Supported)
- Any static website
- And more❕

# Deploying and Setting up your own General Mathematics MOD

## General Mathematics MOD Quick Deploys

[![Run on Replit](https://raw.githubusercontent.com/BinBashBanana/deploy-buttons/master/buttons/remade/replit.svg)](https://replit.com/github/moddedstuffguy/GeneralMathsMOD)
[![Deploy to Heroku](https://raw.githubusercontent.com/BinBashBanana/deploy-buttons/master/buttons/remade/heroku.svg)](https://heroku.com/deploy/?template=https://github.com/moddedstuffguy/GeneralMathsMOD)
[![Deploy to Koyeb](https://binbashbanana.github.io/deploy-buttons/buttons/remade/koyeb.svg)](https://app.koyeb.com/deploy?type=git&repository=github.com/moddedstuffguy/GeneralMathsMOD)

## Basic Guide

```sh
$ git clone https://github.com/moddedstuffguy/GeneralMathsMOD --recursive
$ cd GeneralMathsMOD
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

# GeneralMathsMOD Documentation

## File Structure
```
Folders
static - Folder for files of General Mathematics MOD
node_modules - Files for bare-server-node
BlacklistServe - Used to block make General Math MOD undetectable to automod

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
- [x] Create CHANGELOG.md
- [x] Remove CHATBOX Feature
- [x] Upload a New Background to the Repository
- [x] ***Apply*** the *New Web ***Background***
- [ ] Remove the background and upload a different one (REASON: The white areas in BG hide the white text areas)
- [ ] **Fix** the *Background* by removing the ***anoying*** blue areas that *cover* the *background* (I've written anoying because, as I want a new BG but the css code covers the BG, it's anoying)
- [ ] ***Make*** *new* ***visual assets*** (such as *logos* and *icons*)
- [ ] ***Insert*** the *new **visual assets*** and ***remove*** the *original* ones
- [x] ***Change*** some Website info
- [x] Remove, Add and Modify some webs from `Sites` Page
- [x] Add GitHub to `Sites` Page
- [ ] Fix GitHub Site issues when using ultraviolet proxy
- [x] Add Replit to `Sites` Page
- [x] Add Koyeb deploy button
- [ ] Create a Discord Community 😁

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
