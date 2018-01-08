#!/usr/bin/env node

// @flow

const log = require('./lib/log')
const semanticCommit = require('./lib/semanticCommit')
const { args, resolveArgs } = require('./lib/resolveArgs')

args
  ? log(resolveArgs, args)
  : log(semanticCommit)
