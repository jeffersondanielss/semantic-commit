#!/usr/bin/env node

'use strict'

const inquirer = require('inquirer')
const commitMessage = require('./src/commitMessage')
const questions = require('./src/questions')

inquirer
  .prompt(questions)
  .then(
    answers => commitMessage(answers.type, answers.message),
    err => console.log('Error: ', err)
  )