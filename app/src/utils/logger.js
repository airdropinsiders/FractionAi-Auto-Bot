import { createLogger, format, transports } from 'winston';
import _0x541f11 from 'fs';
const {
  combine,
  timestamp,
  printf,
  colorize
} = format;
const customFormat = printf(({
  level: _0x535ea9,
  message: _0x36ce0a,
  timestamp: _0x583a59
}) => {
  return _0x583a59 + " [" + _0x535ea9 + "]: " + _0x36ce0a;
});
class Logger {
  constructor() {
    this.logger = createLogger({
      'level': "debug",
      'format': combine(timestamp({
        'format': "YYYY-MM-DD HH:mm:ss"
      }), colorize(), customFormat),
      'transports': [new transports.File({
        'filename': "log/app.log"
      })],
      'exceptionHandlers': [new transports.File({
        'filename': 'log/app.log'
      })],
      'rejectionHandlers': [new transports.File({
        'filename': "log/app.log"
      })]
    });
  }
  ["info"](_0x41d7d0) {
    this.logger.info(_0x41d7d0);
  }
  ["warn"](_0x2ab1a0) {
    this.logger.warn(_0x2ab1a0);
  }
  ["error"](_0x44c90d) {
    this.logger.error(_0x44c90d);
  }
  ['debug'](_0x280a04) {
    this.logger.debug(_0x280a04);
  }
  ["setLevel"](_0x7dd59e) {
    this.logger.level = _0x7dd59e;
  }
  ["clear"]() {
    _0x541f11.truncate("log/app.log", 0x0, _0x12c632 => {
      if (_0x12c632) {
        this.logger.error("Failed to clear the log file: " + _0x12c632.message);
      } else {
        this.logger.info("Log file cleared");
      }
    });
  }
}
export default new Logger();