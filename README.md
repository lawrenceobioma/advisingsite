# Advising Project
> CSCI 4060 Capstone Project

## To Run
- type `npm start` in the terminal
- open http://localhost:8080 on your computer

## Setup
- Open Git Bash on your desktop (right click)
- Run a few commands in your Git Bash before continuing: 
    -   `npm install npm -g` downloads the latest version of npm
    -   `node -v` will check to see if you already have NodeJS downloaded. If you do, run this command: `npm install update-node`. Run `node -v` again and ensure you have version 10.16.0. *We all need to have the same version.*
> Run the following commands in Git Bash in the order they are listed:
```shell
$ npm install -g create-react-app
$ npx create-react-app advisingsite 
```
- I called mine advisingsite. If you already downloaded/created a ReactApp, create a new App titled *advisingsite*. We need to have the same primary directory name.
```shell
$ cd advisingsite
$ npm init --yes
```
- This creates a package.json file which we will need
```shell
$ npm install --save express body-parser 
$ npm install express-session
$npm install dotenv --save
```
- This creates a .env file. We don't need it yet, so leave it blank.
```shell
$ npm install react-bootstrap react-router --save
$ npm install -D nodemon
$ npm install react-typescript --save
```

> Some side notes

- You'll have to download my files or you can copy/paste into files you made of the same name. Up to you. ReactJS gives you some files automatically when you use `create-react-app`, so make sure to delete the files I don't have in my repo. They won't hurt anything; they just waste space. *Basically, try to sure everything matches what's both inside and outside my files.*
- Port 3000 is the client port.
- Port 8080 is the database/server port.
