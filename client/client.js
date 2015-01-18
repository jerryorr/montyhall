var $ = require('jquery')
  , sim = require('../lib/simulation')
  , _ = require('lodash')
  , fastClick = require('fastclick');

$(document).ready(function () {
  fastClick(document.body)

  $('button.stick').click(_.partial(run, false))
  $('button.switch').click(_.partial(run, true))
  $('button.again').click(again)
})

function run (switched) {
  $('.choice-buttons').hide()

  var results = sim(switched)

  $('.results .car .times').html(results.car + ' times')
  $('.results .car .percent').html(pct(results.car))

  $('.results .goat .times').html(results.goat + ' times')
  $('.results .goat .percent').html(pct(results.goat))

  if (results.car > results.goat) {
    $('.results caption').html('You have chosen... wisely.')
  } else {
    $('.results caption').html('You chose... poorly.')
  }

  $('.results').show()
  $('.result-buttons').show()
}

function pct (n) {
  return new Number((n/1000) * 100).toFixed(0) + '%'
}

function again () {
  $('.results').hide()
  $('.result-buttons').hide()
  $('.choice-buttons').show()
}
