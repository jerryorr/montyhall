var _ = require('lodash')

var game = function () {
  var car = _.random(2)

  var doors = _.times(3, function (i) { return i === car })

  return _.partial(pick, doors)
}

function pick (doors, choice) {
  var picked = doors[choice]
  var remainingDoors = _.clone(doors)
  remainingDoors.splice(choice, 1)

  var choices = {
    picked: picked,
    remaining: _.contains(remainingDoors, true)
  }

  return _.partial(switchDoors, choices)
}

function switchDoors (choices, switched) {
  return switched ? choices.remaining : choices.picked
}

module.exports = game