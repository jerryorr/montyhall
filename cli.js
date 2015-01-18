var readline = require('readline')
  , sim = require('./lib/simulation')
  , messages = require('./lib/messages')
  , wrap = require('wordwrap')(80)
  , _ = require('lodash')

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

out(messages.problem, '\n')

// TODO send question through wrap
rl.question('Will you (k)eep your original choice, or (s)witch to the remaining door? ', handleAnswer)

function handleAnswer (choice) {
  var switched
  if (choice.substring(0,1).toLowerCase() === 's') {
    switched = true
  } else if (choice.substring(0,1).toLowerCase() === 'k') {
    switched = false
  } else {
    return rl.question('Huh? ', handleAnswer)
  }

  var results = sim(switched)

  // TODO all console.out's should go through wrap
  console.log('\nYou won a car', results.car, 'times, and a goat', results.goat, 'times.')

  if (results.car > results.goat) {
    console.log('You have chosen... wisely.')
  } else {
    console.log('You chose... poorly.')
  }

  rl.close()
}

function out () {
  // TODO can I get proper wrap length at runtime?
  console.log.apply(console, _.map(arguments, function (arg) { return wrap(arg) }))
}
