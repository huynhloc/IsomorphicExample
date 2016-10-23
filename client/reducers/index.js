'use strict';

var { combineReducers } = require('redux');

module.exports = combineReducers({
  posts: require('./posts')
});