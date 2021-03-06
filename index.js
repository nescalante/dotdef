module.exports = dotDefine;

function dotDefine(obj, keySeparator) {
  keySeparator = keySeparator || '.';

  if (!isObject(obj)) {
    return obj;
  }

  if (obj instanceof Array) {
    return obj.map(function mapProps(prop) {
      return dotDefine(prop, keySeparator);
    });
  }

  return Object.keys(obj).reduce(function reducer(result, key) {
    var value = obj[key];
    var denormalizedProp = denormalizeProp(key, value);
    var definedObj = dotDefine(denormalizedProp.value, keySeparator);

    result[denormalizedProp.key] = deepMerge(definedObj, result[denormalizedProp.key]);

    return result;
  }, {});

  function denormalizeProp(key, value) {
    var keyIndex = key.indexOf(keySeparator);

    if (keyIndex >= 0) {
      var result = {};
      result[key.substring(keyIndex + 1)] = value;

      return denormalizeProp(
        key.substring(0, keyIndex),
        result
      );
    }

    return { key: key, value: value };
  }

  function deepMerge(target, source) {
    if (isObject(target) && isObject(source)) {
      for (var key in source) {
        if (Array.isArray(source[key])) {
          target[key] = source[key];
        } else if (isObject(source[key])) {
          if (!target[key]) {
            target[key] = {};
          }

          deepMerge(target[key], source[key]);
        } else {
          target[key] = source[key];
        }
      }
    }

    return target;
  }

  function isObject(item) {
    return (item && typeof item === 'object');
  }
}
