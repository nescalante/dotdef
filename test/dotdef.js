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

    assert.deepStrictEqual(result, {
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

    assert.deepStrictEqual(result, {
      foo: {
        bar: {
          baz: 123,
          quux: 456
        }
      }
    });
  });

  it('support arrays', () => {
    const result = dotDefine({
      'foo.bar': [{
        'baz.quux': [123]
      }],
      'foo.baz': 456
    });

    assert.deepStrictEqual(result, {
      foo: {
        bar: [{
          baz: {
            quux: [123]
          }
        }],
        baz: 456
      }
    });
  });
});
