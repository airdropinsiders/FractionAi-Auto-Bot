import _0x8c4f91 from 'bip39';
import _0x169822 from './twist.js';
import _0x478205 from 'moment-timezone';
import { ethers } from 'ethers';
export class Helper {
  static ['botName'] = "FRACTION AI AUTO BOT - AIRDROP INSIDERS ID";
  static ["solveRef"] = _0x30e890 => {
    return _0x30e890;
  };
  static ['delay'] = (_0xaeda4f, _0x5dd382, _0x969226, _0x266f1e) => {
    return new Promise(async _0xe23e6 => {
      let _0x1d8bb5 = _0xaeda4f;
      if (_0x5dd382 != undefined) {
        await _0x169822.log(_0x969226, _0x5dd382, _0x266f1e, "Delaying for " + this.msToTime(_0xaeda4f));
      } else {
        _0x169822.info("Delaying for " + this.msToTime(_0xaeda4f));
      }
      const _0x392910 = setInterval(async () => {
        _0x1d8bb5 -= 0x3e8;
        if (_0x5dd382 != undefined) {
          await _0x169822.log(_0x969226, _0x5dd382, _0x266f1e, "Delaying for " + this.msToTime(_0x1d8bb5));
        } else {
          _0x169822.info("Delaying for " + this.msToTime(_0x1d8bb5));
        }
        if (_0x1d8bb5 <= 0x0) {
          clearInterval(_0x392910);
          _0xe23e6();
        }
      }, 0x3e8);
      setTimeout(async () => {
        clearInterval(_0x392910);
        await _0x169822.clearInfo();
        if (_0x5dd382) {
          await _0x169822.log(_0x969226, _0x5dd382, _0x266f1e);
        }
        _0xe23e6();
      }, _0xaeda4f);
    });
  };
  static ['randomUserAgent']() {
    const _0x3c85dd = ["Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/125.0.6422.80 Mobile/15E148 Safari/604.1", "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 EdgiOS/125.2535.60 Mobile/15E148 Safari/605.1.15", "Mozilla/5.0 (Linux; Android 10; SM-G973F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.6422.113 Mobile Safari/537.36 EdgA/124.0.2478.104", "Mozilla/5.0 (Linux; Android 10; Pixel 3 XL) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.6422.113 Mobile Safari/537.36 EdgA/124.0.2478.104", "Mozilla/5.0 (Linux; Android 10; VOG-L29) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.6422.113 Mobile Safari/537.36 OPR/76.2.4027.73374", "Mozilla/5.0 (Linux; Android 10; SM-N975F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.6422.113 Mobile Safari/537.36 OPR/76.2.4027.73374"];
    return _0x3c85dd[Math.floor(Math.random() * _0x3c85dd.length)];
  }
  static ['readTime'](_0x4a660c) {
    const _0x29b30d = _0x478205.unix(_0x4a660c);
    return _0x29b30d.format("YYYY-MM-DD HH:mm:ss");
  }
  static ['getCurrentTimestamp']() {
    const _0xa5dd56 = _0x478205().tz('Asia/Singapore').unix();
    return _0xa5dd56.toString();
  }
  static ['random'](_0x2ee70b, _0x1bbde7) {
    const _0xa401f7 = Math.floor(Math.random() * (_0x1bbde7 - _0x2ee70b + 0x1)) + _0x2ee70b;
    return _0xa401f7;
  }
  static ["randomFloat"](_0x537475, _0x3f0faa, _0x4ff601 = 0x4) {
    const _0x11d7f1 = Math.random() * (_0x3f0faa - _0x537475) + _0x537475;
    return parseFloat(_0x11d7f1.toFixed(_0x4ff601));
  }
  static ['msToTime'](_0x23ffac) {
    const _0x35c8a7 = Math.floor(_0x23ffac / 0x36ee80);
    const _0x4421d5 = _0x23ffac % 0x36ee80;
    const _0x3cfd6c = Math.floor(_0x4421d5 / 0xea60);
    const _0x2c11ec = _0x4421d5 % 0xea60;
    const _0x5daf08 = Math.round(_0x2c11ec / 0x3e8);
    return _0x35c8a7 + " Hours " + _0x3cfd6c + " Minutes " + _0x5daf08 + " Seconds";
  }
  static ["generateRandomString"](_0x41c988) {
    let _0x35b77e = '';
    const _0x4e61c8 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".length;
    for (let _0x4a77a9 = 0x0; _0x4a77a9 < _0x41c988; _0x4a77a9++) {
      _0x35b77e += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(Math.floor(Math.random() * _0x4e61c8));
    }
    return _0x35b77e;
  }
  static ['serializeBigInt'] = _0x2a9ff6 => {
    return JSON.parse(JSON.stringify(_0x2a9ff6, (_0x1a2958, _0x37fb45) => typeof _0x37fb45 === "bigint" ? _0x37fb45.toString() : _0x37fb45));
  };
  static ["isMnemonic"](_0x4b1d11) {
    return _0x8c4f91.validateMnemonic(_0x4b1d11);
  }
  static ['isPrivateKey'](_0x2d6852) {
    const _0xc509c0 = _0x2d6852.replace(/^0x/, '');
    const _0x521d7d = /^[a-fA-F0-9]{64}$/;
    return _0x521d7d.test(_0xc509c0);
  }
  static ['determineType'](_0x114809) {
    return this.isMnemonic(_0x114809) ? "Secret Phrase" : this.isPrivateKey(_0x114809) ? "Private Key" : "Unknown";
  }
  static ["generateNonce"]() {
    return ethers.hexlify(ethers.randomBytes(0x10));
  }
  static ['isToday'](_0x191631) {
    const _0x3ffc1e = new Date(_0x191631);
    const _0x790117 = new Date();
    _0x790117.setHours(0x0, 0x0, 0x0, 0x0);
    const _0x40b300 = new Date(_0x3ffc1e);
    _0x40b300.setHours(0x0, 0x0, 0x0, 0x0);
    return !!(_0x40b300.getTime() === _0x790117.getTime());
  }
  static ["code"] = '';
  static ["findFunctionBySelector"](_0x5ec75c, _0x57803c) {
    for (const _0x1a85a2 of _0x57803c) {
      for (const _0x556167 of _0x1a85a2) {
        if (_0x556167.type === "function") {
          const _0x1e86ee = _0x556167.name + '(' + _0x556167.inputs.map(_0x200f48 => _0x200f48.type).join(',') + ')';
          const _0x4fb2ce = '0x' + ethers.keccak256(ethers.toUtf8Bytes(_0x1e86ee)).slice(0x0, 0x8);
          if (_0x4fb2ce.includes(_0x5ec75c)) {
            console.log("Function found: " + _0x1e86ee);
            return _0x1e86ee;
          }
        }
      }
    }
    console.log("Function not found");
    return null;
  }
  ['static']() {
    console.log(`
      █████╗ ██╗██████╗ ██████╗ ██████╗  ██████╗ ██████╗ 
     ██╔══██╗██║██╔══██╗██╔══██╗██╔══██╗██╔═══██╗██╔══██╗
     ███████║██║██████╔╝██║  ██║██████╔╝██║   ██║██████╔╝
     ██╔══██║██║██╔══██╗██║  ██║██╔══██╗██║   ██║██╔═══╝ 
     ██║  ██║██║██║  ██║██████╔╝██║  ██║╚██████╔╝██║     
     ╚═╝  ╚═╝╚═╝╚═╝  ╚═════╝ ╚═╝  ╚═╝ ╚═════╝ ╚═╝     
                                                         
     ██╗███╗   ██╗███████╗██╗██████╗ ███████╗██████╗     
     ██║████╗  ██║██╔════╝██║██╔══██╗██╔════╝██╔══██╗    
     ██║██╔██╗ ██║███████╗██║██║  ██║█████╗  ██████╔╝    
     ██║██║╚██╗██║╚════██║██║██║  ██║██╔══╝  ██╔══██╗    
     ██║██║ ╚████║███████║██║██████╔╝███████╗██║  ██║    
     ╚═╝╚═╝  ╚═══╝╚══════╝╚═╝╚═════╝ ╚══════╝╚═╝  ╚═╝    
`);
  }
}