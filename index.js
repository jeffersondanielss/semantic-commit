#!/usr/bin/env node

'use strict'

const commit = require('./src/commit')
const resolveArgs = require('./src/resolveArgs')
const arg = process.argv.slice(2, 3).toString()

arg ? resolveArgs(arg) : commit()
