import { expect } from 'chai';
import { Service } from '../src/service';

describe('Service', () => {
  it('processes message', () => {
    const s = new Service();
    expect(s.processMessage('hello')).to.equal('Processed: hello');
  });
});
