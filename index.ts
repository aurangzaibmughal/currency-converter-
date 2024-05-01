#! /usr/bin/env node

import inquirer from 'inquirer';
import chalk from "chalk"

console.log(chalk.blue.bold("\n \tWelcome to Aurangzaib Mughal- Currency Converter\n"))

// Define the list of currencies and thier exchange rates
let exchange_rate:any = {

    "USD": 1 , //BASE CURRENCY
    "EUR": 0.91,
    "JYP": 113,
    "CAD": 1.3,
    "AUD": 1.65,
    "PKR": 277.7,
    // ADD MORE CURRENCY AND THIR EXCHANGE REATES HERE
}
let user_answer = await inquirer.prompt(
    [
        {
            name:"from_currency",
            message:"Select the currency to convert from:",
            type:'list',
            choices:["USD","EUR","JYP","CAD","AUD","PKR"],
        },
        {
            name:"to_currency",
            message:"Select the currency to convert into:",
            type:'list',
            choices:["USD","EUR","JYP","CAD","AUD","PKR"]
        },
        {
            name:'amount',
            message:"Enter the Amount to convert",
            type:'input'
        }
    ]);

let from_amount = exchange_rate [user_answer.from_currency];

let to_Amount = exchange_rate [user_answer.to_currency];

let amount = user_answer.amount;

// formula of converter

let base_amount = amount / from_amount;

let converte_amount = base_amount * to_Amount;

console.log(chalk.blue.bold(`converted amount = ${converte_amount}`));



