import { ethers } from 'ethers';
import { privateKey } from '../../accounts/accounts.js';
import { Helper } from '../utils/helper.js';
import _0x26c48a from '../utils/logger.js';
import { RPC } from './network/rpc.js';
import { API } from '../api/api.js';
import { Config } from '../../config/config.js';
import { proxyList } from '../../config/proxy_list.js';
export default class Core extends API {
  constructor(_0x242a64) {
    const _0x477835 = privateKey.indexOf(_0x242a64);
    if (proxyList.length != privateKey.length && proxyList.length != 0x0) {
      throw Error("You Have " + privateKey.length + " Accounts But Provide " + proxyList.length + " Proxy");
    }
    const _0x35f7d6 = proxyList[_0x477835];
    super(_0x35f7d6);
    this.acc = _0x242a64;
    this.provider = new ethers.JsonRpcProvider(RPC.RPCURL, RPC.CHAINID);
  }
  async ["connectWallet"]() {
    try {
      const _0x5d63b4 = this.acc;
      const _0x49c434 = privateKey.indexOf(this.acc);
      await Helper.delay(0x3e8, this.acc, "Connecting to Account : " + (_0x49c434 + 0x1), this);
      const _0x2e608d = Helper.determineType(_0x5d63b4);
      _0x26c48a.info("Account Type : " + _0x2e608d);
      if (_0x2e608d == "Secret Phrase") {
        this.wallet = new ethers.Wallet.fromPhrase(_0x5d63b4, this.provider);
      } else {
        if (_0x2e608d == "Private Key") {
          this.wallet = new ethers.Wallet(_0x5d63b4.trim(), this.provider);
        } else {
          throw Error("Invalid account Secret Phrase or Private Key");
        }
      }
      this.address = this.wallet.address;
      await Helper.delay(0x3e8, this.acc, "Wallet connected " + JSON.stringify(this.wallet.address), this);
    } catch (_0x5a120a) {
      throw _0x5a120a;
    }
  }
  async ["getBalance"](_0x2206da = false) {
    try {
      if (!_0x2206da) {
        await Helper.delay(0x1f4, this.acc, "Getting Wallet Balance of " + this.wallet.address, this);
      }
      const _0x15df28 = ethers.formatEther(await this.provider.getBalance(this.wallet.address));
      this.balance = {
        'ETH': _0x15df28
      };
      await Helper.delay(0x1f4, this.acc, "Balance updated", this);
    } catch (_0x562ea8) {
      throw _0x562ea8;
    }
  }
  async ['signIn']() {
    try {
      await Helper.delay(0x1f4, this.acc, "Sign In To Fraction AI DAPPS", this);
      const _0x1babc8 = await this.fetch("https://dapp-backend-large.fractionai.xyz/api3/auth/nonce");
      const _0x371733 = _0x1babc8.data.nonce;
      const _0x1f4829 = "dapp.fractionai.xyz wants you to sign in with your Ethereum account:\n" + this.address + "\n\nSign in with your wallet to Neural Arena.\n\nURI: https://dapp.fractionai.xyz\nVersion: 1\nChain ID: 11155111\nNonce: " + _0x371733 + "\nIssued At: " + new Date().toISOString();
      const _0x21deb5 = await this.wallet.signMessage(_0x1f4829);
      const _0x1dfdac = Helper.solveRef(Helper.code);
      const _0x329fdc = await this.fetch('https://dapp-backend-large.fractionai.xyz/api3/auth/verify', 'POST', undefined, {
        'message': _0x1f4829,
        'signature': _0x21deb5,
        'referralCode': _0x1dfdac
      });
      await Helper.delay(0x1f4, this.acc, "Successfully Sign In to Fraction Ai Dapps", this);
      this.user = _0x329fdc.data.user;
      this.token = _0x329fdc.data.accessToken;
      this.refreshToken = _0x329fdc.data.refreshToken;
    } catch (_0x4e4d01) {
      throw _0x4e4d01;
    }
  }
  async ["getSessionTypeList"]() {
    try {
      await Helper.delay(0x1f4, this.acc, "Getting Session Type List...", this);
      const _0x4e0c26 = await this.fetch('https://dapp-backend-large.fractionai.xyz/api3/session-types/list/' + this.user.id, "GET", this.token);
      this.sessioinType = _0x4e0c26.data;
      await Helper.delay(0x1f4, this.acc, "Successfully Get Session Type List...", this);
    } catch (_0x59c8e7) {
      throw _0x59c8e7;
    }
  }
  async ["matchmarking"](_0x2f6de0) {
    try {
      await Helper.delay(0x3e8, this.acc, "Initiate Matchmarking For Agent " + _0x2f6de0.name, this);
      const _0x61c56a = await this.fetch("https://dapp-backend-large.fractionai.xyz/api3/matchmaking/initiate", "POST", this.token, {
        'userId': this.user.id,
        'agentId': _0x2f6de0.id,
        'entryFees': Config.ENTRYFEE,
        'sessionTypeId': 0x1
      });
      if (_0x61c56a.status == 0xc8) {
        await Helper.delay(0x3e8, this.acc, "Matchmarking For Agent " + _0x2f6de0.name + " " + _0x61c56a.data.matchmakingStatus, this);
      } else {
        await Helper.delay(0x1f4, this.acc, "Agent " + _0x2f6de0.name + " : " + _0x61c56a.data.error, this);
      }
    } catch (_0x3f3ff0) {
      throw _0x3f3ff0;
    }
  }
  async ['getUserAgent']() {
    try {
      await Helper.delay(0x1f4, this.acc, "Getting User Agent List...", this);
      const _0x57b6a0 = await this.fetch("https://dapp-backend-large.fractionai.xyz/api3/agents/user/" + this.user.id, "GET", this.token);
      this.agentList = _0x57b6a0.data;
      await Helper.delay(0x1f4, this.acc, "Successfully Get User Agent List...", this);
    } catch (_0x448608) {
      throw _0x448608;
    }
  }
  async ["executeTx"](_0x51a6c4) {
    try {
      _0x26c48a.info("TX DATA " + JSON.stringify(Helper.serializeBigInt(_0x51a6c4)));
      await Helper.delay(0x1f4, this.acc, "Executing TX...", this);
      const _0x49b1a0 = await this.wallet.sendTransaction(_0x51a6c4);
      _0x26c48a.info("Tx Executed \n" + RPC.EXPLORER + "tx/" + _0x49b1a0.hash);
      await Helper.delay(0x1f4, this.acc, "Tx Executed Waiting For Block Confirmation...", this);
      const _0x1ed0b7 = await _0x49b1a0.wait();
      _0x26c48a.info("Tx Confirmed and Finalizing: " + JSON.stringify(_0x1ed0b7));
      await Helper.delay(0x1388, this.acc, "Tx Executed and Confirmed \n" + RPC.EXPLORER + "tx/" + _0x1ed0b7.hash, this);
      await this.getBalance(true);
    } catch (_0x2d8830) {
      if (_0x2d8830.message.includes("504")) {
        await Helper.delay(0x1388, this.acc, _0x2d8830.message, this);
      } else {
        throw _0x2d8830;
      }
    }
  }
  async ["getOptimalNonce"]() {
    try {
      const _0x1b48e9 = await this.provider.getTransactionCount(this.wallet.address, "latest");
      const _0xce5c4b = await this.provider.getTransactionCount(this.wallet.address, "pending");
      const _0x20ee93 = _0xce5c4b > _0x1b48e9 ? _0xce5c4b : _0x1b48e9;
      return _0x20ee93;
    } catch (_0x9c7f41) {
      throw _0x9c7f41;
    }
  }
  async ['estimateGasWithRetry'](_0x381041, _0x28dc75, _0x5ed009, _0x3d5dfa = false, _0x5521f4 = 0x3, _0x5f184f = 0xbb8) {
    for (let _0x3d18a3 = 0x0; _0x3d18a3 < _0x5521f4; _0x3d18a3++) {
      try {
        _0x26c48a.info("Estimating Gas for " + _0x5ed009 + " TX");
        const _0x164f93 = await this.provider.estimateGas({
          'from': this.wallet.address,
          'to': _0x381041,
          'value': _0x28dc75,
          'data': _0x5ed009
        });
        return _0x164f93;
      } catch (_0x5df4fa) {
        if (_0x3d5dfa) {
          throw _0x5df4fa;
        } else {
          await Helper.delay(_0x5f184f, this.acc, _0x5df4fa.reason + "... Attempt " + (_0x3d18a3 + 0x1) + " of " + _0x5521f4, this);
          if (_0x3d18a3 === _0x5521f4 - 0x1) {
            throw Error("Failed to estimate gas after " + _0x5521f4 + " attempts.");
          }
        }
      }
    }
  }
  async ['buildTxBody'](_0x2c2a97, _0x45074b = false, _0x140f13 = 0x0) {
    const _0x2bbe83 = await this.getOptimalNonce();
    const _0x1b872c = await this.estimateGasWithRetry(_0x2c2a97.to, _0x140f13, _0x2c2a97.data, _0x45074b);
    const _0x2bc73b = {
      'to': _0x2c2a97.to,
      'from': this.address,
      'value': _0x140f13,
      'gasLimit': _0x1b872c,
      'gasPrice': ethers.parseUnits("1.5", "gwei"),
      'nonce': _0x2bbe83,
      'data': _0x2c2a97.data
    };
    return _0x2bc73b;
  }
  async ["checkIn"]() {
    try {
      await Helper.delay(0x1f4, this.acc, "Trying to check In...", this);
      const _0x628bfc = new ethers.Contract(CHECKINCONTRACT.CONTRACTADDRESS, CHECKINCONTRACT.ABI, this.wallet);
      const _0x2bf5b2 = await _0x628bfc.checkIn.populateTransaction();
      const _0x29a1cb = await this.buildTxBody(_0x2bf5b2, true);
      await this.executeTx(_0x29a1cb);
    } catch (_0x19e5b1) {
      if (_0x19e5b1.reason.includes("check-in")) {
        await Helper.delay(0xbb8, this.acc, _0x19e5b1.reason, this);
      } else {
        throw _0x19e5b1;
      }
    }
  }
}
