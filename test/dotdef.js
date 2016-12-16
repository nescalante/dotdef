const assert = require('assert');
const dotDefine = require('../index');

describe('dotDefine', () => {
  it('return an object', () => {
    const result = dotDefine({
      'foo.bar': {
        'baz': 123,
        'quux.nox': { value: 456 }
      }
    });

    assert.deepEqual(result, {
      foo: {
        bar: {
          baz: 123,
          quux: {
            nox: { value: 456 }
          }
        }
      }
    });
  });

  it('merge properties', () => {
    const result = dotDefine({
      'foo.bar.baz': 123,
      'foo.bar.quux': 456
    });

    assert.deepEqual(result, {
      foo: {
        bar: {
          baz: 123,
          quux: 456
        }
      }
    });
  });
});
