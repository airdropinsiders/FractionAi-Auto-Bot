import { privateKey } from './accounts/accounts.js';
import _0x1d5b89 from './src/core/core.js';
import { Helper } from './src/utils/helper.js';
import _0x48b9c7 from './src/utils/logger.js';
import _0x3596ce from './src/utils/twist.js';
async function operation(_0x422999) {
  const _0x13b4a6 = new _0x1d5b89(_0x422999);
  try {
    await _0x13b4a6.connectWallet();
    await _0x13b4a6.getBalance();
    await _0x13b4a6.signIn();
    await _0x13b4a6.getUserAgent();
    if (_0x13b4a6.agentList.length == 0x0) {
      await Helper.delay(0xea60, _0x422999, "Account " + _0x13b4a6.address + " Don't Have AI Agent Created, Please Create at Least 1 AI Agent With Automation OFF", _0x13b4a6);
    }
    for (const _0x578e7b of _0x13b4a6.agentList) {
      if (_0x578e7b.automationEnabled == false) {
        await _0x13b4a6.matchmarking(_0x578e7b);
      }
    }
    await Helper.delay(0x3a980, _0x422999, "Account " + (privateKey.indexOf(_0x422999) + 0x1) + " Processing Done, Delaying for " + Helper.msToTime(0x3a980) + " until Next Matchmarking", _0x13b4a6);
    await operation(_0x422999);
  } catch (_0x4acc1c) {
    if (_0x4acc1c.message) {
      await Helper.delay(0x2710, _0x422999, "Error : " + _0x4acc1c.message + ", Retry again after 10 Second", _0x13b4a6);
    } else {
      await Helper.delay(0x2710, _0x422999, "Error :" + JSON.stringify(_0x4acc1c) + ", Retry again after 10 Second", _0x13b4a6);
    }
    await operation(_0x422999);
  }
}
async function startBot() {
  return new Promise(async (_0x5884c6, _0x482201) => {
    try {
      _0x48b9c7.info("BOT STARTED");
      if (privateKey.length == 0x0) {
        throw Error("Please input your account first on accounts.js file");
      }
      const _0x40d14f = [];
      for (const _0x144be6 of privateKey) {
        _0x40d14f.push(operation(_0x144be6));
      }
      await Promise.all(_0x40d14f);
      _0x5884c6();
    } catch (_0x380c26) {
      _0x48b9c7.info("BOT STOPPED");
      _0x48b9c7.error(JSON.stringify(_0x380c26));
      _0x482201(_0x380c26);
    }
  });
}
(async () => {
  try {
    _0x48b9c7.clear();
    _0x48b9c7.info('');
    _0x48b9c7.info("Application Started");
    console.log();
    console.log(Helper.botName);
    console.log("Join Us : https://t.me/AirdropInsiderID");
    await startBot();
  } catch (_0x41f961) {
    _0x3596ce.clear();
    _0x3596ce.clearInfo();
    console.log("Error During executing bot", _0x41f961);
    await startBot();
  }
})();