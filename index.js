#!/usr/bin/env node

'use strict'

const help = require('./src/help')
const commit = require('./src/commit')
const arg = process.argv.slice(2, 3).toString()

arg ? help() : commit()
