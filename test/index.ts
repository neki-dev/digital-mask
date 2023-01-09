import assert from 'assert';
import { applyStringMask } from '../dist';

describe('apply mask', () => {
  it('should pad empty chars', () => {
    const mask = '__-__';

    assert.equal(applyStringMask('chars12and34', mask).length, mask.length);
    assert.equal(applyStringMask('', mask), mask);
    assert.equal(applyStringMask('12', mask), '12-__');
  });

  it('should replace not digital chars', () => {
    assert.equal(applyStringMask('12-34', '__-__'), '12-34');
    assert.equal(applyStringMask('chars12and34', '__-__'), '12-34');
    assert.equal(applyStringMask('chars12and', '__-__'), '12-__');
  });

  it('should format with custom char', () => {
    const mask = '--- --- ---';
    const char = '-';

    assert.equal(applyStringMask('', mask, char), mask);
    assert.equal(applyStringMask('ag435hi438httg', mask, char), '435 438 ---');
  });
});
