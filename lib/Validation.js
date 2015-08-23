'use strict';

/*!
 * ws: a node.js websocket client
 * Copyright(c) 2011 Einar Otto Stangvik <einaros@gmail.com>
 * MIT Licensed
 */

try {

  if( require('os').platform() === 'linux' ){
    throw 'use fallback';
  }

  module.exports = require('utf-8-validate');
  
} catch (e) {
  module.exports = require('./Validation.fallback');
}
