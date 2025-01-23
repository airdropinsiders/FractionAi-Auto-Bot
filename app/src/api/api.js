  import { HttpsProxyAgent } from 'https-proxy-agent';
  import { Helper } from '../utils/helper.js';
  import a1_0x1f3274 from '../utils/logger.js';
  import a1_0x482375 from 'https';
  import a1_0xdfd129 from 'node-fetch';
  export class API {
    constructor(_0x1ba4fc) {
      this.proxy = _0x1ba4fc;
      this.ua = Helper.randomUserAgent();
    }
    async ['generateHeaders'](_0x2d605d) {
      const _0x310a85 = {
        'Accept': "application/json, text/plain, */*",
        'Accept-Language': 'en-US,en;q=0.9,id;q=0.8',
        'Content-Type': 'application/json',
        'Sec-Fetch-Dest': "empty",
        'Sec-Fetch-Site': 'same-site',
        'Sec-Fetch-Mode': 'cors',
        'User-Agent': this.ua
      };
      if (_0x2d605d) {
        _0x310a85.Authorization = "Bearer " + _0x2d605d;
      }
      return _0x310a85;
    }
    async ['fetch'](_0x258d33, _0x2b6370 = 'GET', _0x44e85d, _0x2ad972 = {}, _0x939c00 = {}) {
      try {
        const _0x154008 = {
          ...(await this.generateHeaders(_0x44e85d)),
          ..._0x939c00
        };
        a1_0x1f3274.info(_0x2b6370 + " : " + _0x258d33 + " " + (this.proxy ? this.proxy : ''));
        a1_0x1f3274.info("Request Header : " + JSON.stringify(_0x154008));
        a1_0x1f3274.info("Request Body : " + JSON.stringify(_0x2ad972));
        const _0x433d9b = {
          'method': _0x2b6370,
          'headers': _0x154008,
          'agent': this.proxy ? new HttpsProxyAgent(this.proxy) : new a1_0x482375.Agent({
            'rejectUnauthorized': false
          }),
          'body': _0x2b6370 !== "GET" ? JSON.stringify(_0x2ad972) : undefined
        };
        const _0x46e428 = await a1_0xdfd129(_0x258d33, _0x433d9b);
        if (_0x46e428.ok) {
          const _0x4a1562 = _0x46e428.headers.get('Content-Type');
          let _0x3ca236;
          if (_0x4a1562 && _0x4a1562.includes('application/json')) {
            _0x3ca236 = await _0x46e428.json();
          } else {
            _0x3ca236 = {
              'message': await _0x46e428.text()
            };
          }
          a1_0x1f3274.info("Response : " + _0x46e428.status + " " + _0x46e428.statusText);
          a1_0x1f3274.info("Response Data : " + JSON.stringify(_0x3ca236).substring(0x0, 0x96) + '...');
          const _0x5775a9 = {
            'status': _0x46e428.ok ? 0xc8 : _0x46e428.status,
            'data': _0x3ca236
          };
          return _0x5775a9;
        } else {
          throw _0x46e428;
        }
      } catch (_0x2ac914) {
        if (_0x2ac914.status) {
          const _0x3c43c5 = _0x2ac914.status;
          const _0xc89852 = _0x2ac914.headers.get('Content-Type');
          let _0x1afe69;
          if (_0xc89852 && _0xc89852.includes("application/json")) {
            _0x1afe69 = await _0x2ac914.json();
          } else {
            _0x1afe69 = {
              'message': await _0x2ac914.text()
            };
          }
          if (_0x3c43c5 == 0x190 || _0x3c43c5 == 0x193 || _0x3c43c5 == 0x199) {
            const _0x802659 = {
              'status': _0x3c43c5,
              'data': _0x1afe69
            };
            return _0x802659;
          } else {
            throw Error(_0x3c43c5 + " - " + (_0x2ac914.message ?? _0x2ac914.statusText));
          }
        } else {
          throw _0x2ac914;
        }
      }
    }
  }