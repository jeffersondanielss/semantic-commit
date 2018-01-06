#!/usr/bin/env node

// @flow

const commit = require('./lib/commit')
const { args, resolveArgs } = require('./lib/resolveArgs')

args
  ? resolveArgs(args)
  : commit()
