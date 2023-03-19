#! /usr/bin/env node
const { program } = require('commander')

const mycommander = require('./lib/core/mycommander')

mycommander(program)

program.parse(process.argv)