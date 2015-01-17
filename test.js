var game = require('./lib/game')
  , _ = require('lodash')


var results = _.times(100, function () {
  return game()(_.random(2))(true)
})

results = _.countBy(results, function (result) {
  return result.toString()
})

console.log('Car: ', results.true)
console.log('Goat: ', results.false)