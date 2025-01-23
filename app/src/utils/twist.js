import { Twisters } from 'twisters';
import _0x2b71e2 from './logger.js';
import _0x39ddbe from '../core/core.js';
import { privateKey } from '../../accounts/accounts.js';
import { RPC } from '../core/network/rpc.js';
class Twist {
  constructor() {
    this.twisters = new Twisters();
  }
  async ["log"](_0xc2f28c = '', _0x397abf = '', _0x34c8cb = new _0x39ddbe(), _0x585475) {
    const _0x8229ae = privateKey.indexOf(_0x397abf);
    if (_0x585475 == undefined) {
      _0x2b71e2.info("Account " + (_0x8229ae + 0x1) + " - " + _0xc2f28c);
      _0x585475 = '-';
    }
    const _0x32198a = _0x34c8cb.address ?? '-';
    const _0x4d8ad5 = _0x34c8cb.balance ?? {};
    const _0x1bc283 = _0x4d8ad5.ETH ?? '-';
    const _0x2bbf0d = _0x34c8cb.user ?? {};
    const _0x4b7ae8 = _0x2bbf0d.fractal ?? '?';
    const _0x1bb97f = _0x34c8cb.agentList?.['length'] ?? '?';
    this.twisters.put(_0x397abf, {
      'text': "\n================== Account " + (_0x8229ae + 0x1) + " =================\nAddress         : " + _0x32198a + "\nBalance         : " + _0x1bc283 + " " + RPC.SYMBOL + "\nFractal         : " + _0x4b7ae8 + "\nAgent           : Total " + _0x1bb97f + " Agent\n               \nStatus : " + _0xc2f28c + "\nDelay  : " + _0x585475 + "\n=============================================="
    });
  }
  ["info"](_0x632354 = '') {
    this.twisters.put(0x2, {
      'text': "\n==============================================\nInfo : " + _0x632354 + "\n=============================================="
    });
    return;
  }
  ["clearInfo"]() {
    this.twisters.remove(0x2);
  }
  ['clear'](_0xe85ae7) {
    this.twisters.remove(_0xe85ae7);
  }
}
export default new Twist();