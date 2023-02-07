<h1 align="center">General Maths MOD</h1>
 
<p align="center">
  <img alt="Status Badge" src="https://img.shields.io/badge/Status-On-brightgreen?style=plastic">
  <img alt="Status Badge" src="https://img.shields.io/badge/Replit%20Deploy%20Status-Working-orange?style=plastic">
  <img alt="Status Badge" src="https://img.shields.io/badge/Vercel%20Deploy%20Status-Working-black?style=plastic">
  <img alt="Status Badge" src="https://img.shields.io/badge/Render%20Deploy%20Status-Removing it very Soon-red?style=plastic">
</p>
<p align="center">
  <img alt="Language badge" src="https://img.shields.io/badge/Language-Node.js-yellow?style=plastic">
  <img alt="Status Badge" src="https://img.shields.io/badge/Type-Static%20Site-blue?style=plastic">
</p>
<p align="center">
  
</p>

# IMPORTANT NOTE!
### Render deployed instances (GeneralMathsMOD links hosted on render)are going to be removed very soon due to my economical situation and will never be used again! I am currently testing netlify looking for support. Use, till I put as the main link a non hosted on render link, use this one [gmaths tmp](https://gmaths-tmp.moddedstuffguy.repl.co/)
 
## CURRENT VERSION
Version **7.1b** (see **CHANGELOG** for *more information*)

## CHANGELOG
[GeneralMathsMOD CHANGELOG](CHANGELOG.md)

## JS Bookmarks Credits
[JS Bookmarklet Credits](jscredits.md)

## MIRROR LINKS
[MIRROR_LINKS.md](MIRROR_LINKS.md)

# ATTENTION
This MOD ***is a work in progress***. This means that, if you **deploy *this repository***, there *might be some **issues***. Look inside the [TO DO Section](#generalmathsmod-to-do-list) on *this README* for *more information* about what is going *to be done* in this ***MOD***

## Features 
- Tons of apps & games
- History hider (about:blank Cloak)
- Sleek UI with good animations
- Tab cloaker (Change TAB's Name and Logo)
- Support page to help lost and confused people
- 2 working emulators
- Mirror links page
- 3 unblockers / proxies
- And more!

## Suported Websites in Ultraviolet
- [Youtube](https://www.youtube.com)
- [CAPTCHA](https://www.captcha.net) / [hCAPTCHA](https://hcaptcha.com/)
- [Spotify](https://spotify.com)
- [Discord](https://discord.com)
- [Instagram](https://instagram.com/)
- [Reddit](https://reddit.com)
- [GeForce NOW](https://play.geforcenow.com/) (Partially Supported)
- [Github](https://github.com/)
- Any static website
- And more❕

# Deploying and Setting up your own General Mathematics MOD

## General Mathematics MOD Quick Deploys

[![Run on Replit](https://raw.githubusercontent.com/BinBashBanana/deploy-buttons/master/buttons/remade/replit.svg)](https://replit.com/github/moddedstuffguy/GeneralMathsMOD)
[![Deploy to Render](https://binbashbanana.github.io/deploy-buttons/buttons/remade/render.svg)](https://render.com/deploy?repo=https://github.com/moddedstuffguy/GeneralMathsMOD)
[![Deploy to Netlify](https://binbashbanana.github.io/deploy-buttons/buttons/remade/netlify.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/moddedstuffguy/GeneralMathsMOD)
[![Deploy to Vercel](https://binbashbanana.github.io/deploy-buttons/buttons/remade/vercel.svg)](https://vercel.com/new/clone?repository-url=https://github.com/moddedstuffguy/GeneralMathsMOD/tree/vercelVersion/)
## Basic Guide (for terminal users)

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
$ chmod +x main.sh
$ ./main.sh
```
OR
```sh
$ bash main.sh
```
**NOTE:** On Repl, The command `git submodule update --init` has to be executed (This shouldn't be necessary because the command is automatically executed when running the `main.sh` script)

## Vercel Setup Guide
Click on the "Deploy to Vercel" button and deploy the branch named `vercelVersion`

## Render Setup Guide
Click on the `Deploy to Render` green button...

## Updating Bare from git
```
git submodule update --remote
```

***IMPORTANT:*** This may override files in `static/` so ***be careful***.

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

## GeneralMathsMOD TO-DO List

- [x] Change README.md Info
- [x] Create CHANGELOG.md
- [x] Remove CHATBOX Feature
- [x] Upload a New Background to the Repository
- [x] ***Apply*** the *New Web ***Background***
- [x] Remove the background and upload a different one (REASON: The white areas in BG hide the white text areas)
- [x] **Fix** the *Background* by removing the ***anoying*** blue areas that *cover* the *background* (I've written anoying because, as I want a new BG but the css code covers the BG, it's anoying)
- [ ] ***Make*** *new* ***visual assets*** (such as *logos* and *icons*)
- [ ] ***Insert*** the *new **visual assets*** and ***remove*** the *original* ones
- [x] ***Change*** some of the Website and Repository info
- [x] Remove, Add and Modify some webs from `Sites` Page
- [x] Add GitHub to `Sites` Page
- [x] Fix GitHub Site issues when using ultraviolet proxy
- [x] Fix ultraviolet proxy
- [x] Update Bare-Server-Node on the dependencies inside `package.json` and `package-lock.json`
- [x] Add Replit to `Sites` Page
- [x] Add Vercel to `Sites` Page
- [ ] Create a Discord Community
- [x] Create mirror_links.md
- [x] Add `mirrors.html` into sidebar
- [x] Add mirror access files into `mirrors.html`
- [x] ~Deploy GeneralMathsMOD into Koyeb~ Remove `Deploy to Koyeb` Button from `README.md` (As *Koyeb Deploy* is **NOT supported**)
- [x] ~(Deploy GeneralMathsMOD into Vercel) Remove `Deploy to Vercel` Button from `README.md` (As *Vercel Deploy* is **NOT supported**)~
- [x] Add ***WEBRETRO EMULATOR*** into `./static/gfiles/rarch`
- [x] Add *WEBRETRO* into `g.html` and *add* some downloadable ROMs into `g.html` page.
- [x] Add webretro help in `support.html`
- [ ] Add at least *10 **downloadable** ROMs* into `g.html` page
- [x] Add **Futbin** web into `Sites` Page (for FIFA)
- [x] Add a ***NEW* PROXY** ***(Womginx)***
- [x] Add ***Node Unblocker PROXY***
- [x] Fix Womginx
- [x] Change Womginx search style to generalmaths style (change womginx search page aspect)
- [x] Fix Node Unblocker
- [x] Create scripts for Womginx and Nodeunb for using proxy with iframe method
- [ ] Add another proxy server
- [ ] ***Remove** Deployed render instances (Links hosted on render.)* ***NOTE:*** Users will ***still** be able to deploy* the project into render if they can afford it!
- [x] ***Fix Endless** building* step on **netlify** and on **vercel**
- [x] Create Branch for Vercel Deploys
- [x] ***Deploy* GeneralMathsMOD** into **vercel** once the *endless build* bug gets fixed so I can *test for support*.
- [ ] Put vercel deployed instance link into the repository
- [ ] Deploy into netlify

## Credits

General Mathematics Original Repo https://github.com/GeneralMathematics/General-Mathematics-Beta

Ultraviolet https://github.com/titaniumnetwork-dev/Ultraviolet

Bare Server Node https://github.com/tomphttp/bare-server-node

Node Unblocker https://github.com/829qqvsvchwj/node-unblocker-heroku

Womginx https://github.com/binary-person/womginx

Lightspeed Blocker https://github.com/NebulaServices/Nebula

Package-lock.json https://github.com/AstralService/Lucid/blob/main/package-lock.json

FoxMoss https://mediaology.com

Gfiles & RetroArch https://github.com/BinBashBanana/gfiles

Some More Gfiles https://github.com/caracal-js/gfiles

EmulatorJS https://github.com/ethanaobrien/emulatorjs

EaglerCraft https://github.com/LAX1DUDE/eaglercraft
