'use strict';

var enumOwnProps = require('@fav/prop.enum-own-props');
var isPlainObject = require('@fav/type.is-plain-object');

function defaultsDeep(dest /* , ...src */) {
  if (!isPlainObject(dest)) {
    dest = {};
  }

  for (var i = 1, n = arguments.length; i < n; i++) {
    defaultsDeepEach(dest, arguments[i]);
  }
  return dest;
}

function defaultsDeepEach(dest, src) {
  var props = enumOwnProps(src);
  for (var i = 0, n = props.length; i < n; i++) {
    var prop = props[i];
    var srcProp = src[prop];
    var destProp = dest[prop];

    if (isPlainObject(srcProp)) {
      if (destProp == null) {
        dest[prop] = destProp = {};
      } else if (!isPlainObject(destProp)) {
        continue;
      }
      defaultsDeepEach(destProp, srcProp);
      continue;
    }

    if (destProp != null) {
      continue;
    }

    if (srcProp == null) {
      continue;
    }

    try {
      dest[prop] = srcProp;
    } catch (e) {
      // If a property is read only, TypeError is thrown,
      // but this function ignore it.
    }
  }
}

module.exports = defaultsDeep;
