// //console.log('hi');
// const fs = require('fs')


//This is a command JS code

// fs.writeFileSync('notes.txt','wow its fine')
// fs.appendFileSync('notes.txt',' wow its fine for me too')


//this is how you can import other folder!!
/* const add = require('./utils');
const name = require('./utils')


//console.log(name);



const sum = add(5, 5)
console.log(sum); */
/* 
const getNotes = require('./notes')

const get = getNotes()

console.log(get);
 */

/* const {printMulti,printDiv} = require('./notes')

const pMulti = printDiv(5,5)
const pDiv = printMulti(5,5)

console.log(pMulti);
console.log(pDiv); */

/* const validator = require('validator')

console.log(validator.isEmail('vonn12@gmail.com'));

//sample of npm chalk!!
const chalk = require('chalk')

console.log(chalk.red.bgRedBright.bold('mind it ') + chalk.greenBright.underline('Success','wow')); */


//this is a rewrite es6 command
/* import {getNotes} from "./notes.js";

const msg = getNotes();
console.log(msg); */





const f1 = () => {
    console.log('hi there');
}

const f2 = () => {
    console.log('hi there also');
}

const args = process.argv.slice[2];

switch (args) {
    case 'f1':
        console.log(f1());
        break;
    case 'f2':    
        console.log(f2());
        break;

    default:
        console.log('wrong one');
        break;
}

