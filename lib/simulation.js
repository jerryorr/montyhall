var game = require('./game')
  , _ = require('lodash')

module.exports = function (choice) {
  var results = _.times(1000, function () {
    return game()(_.random(2))(choice)
  })

  return _.countBy(results, function (result) {
    return result ? 'car' : 'goat'
  })
}
