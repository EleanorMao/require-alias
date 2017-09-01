/**
 * @Author :  EleanorMao(danningmao@outlook.com)
 * @Date   : 9/1/2017, 11:38:45 PM
 */
const path = require('path')
const Module = require('module').Module
const old_findPath = Module._findPath

const ALIAS = {}

Module._findPath = function (request, paths, isMain) {
  var aliasKey = Object.keys(ALIAS)
  for (var i = 0, len = aliasKey.length; i < len; i++) {
    var key = aliasKey[i]
    if (request.startsWith(key + '/') || request === key) {
      request = request.replace(key, '')
      request = path.join(ALIAS[key], request)
      break
    }
  }
  return old_findPath(request, paths, isMain)
}

function assign (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i]
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key]
      }
    }
  }
  return target
}

function setAlias (alias, path) {
  if (typeof alias === 'object') {
    assign(ALIAS, alias)
  } else if (typeof alias === 'string' && typeof path === 'string') {
    ALIAS[alias] = path
  } else {
    throw Error('params must be object or string')
  }
}

exports.setAlias = setAlias
