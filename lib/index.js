'use strict';

var _litespeed = require('litespeed');

var _litespeed2 = _interopRequireDefault(_litespeed);

var _auth = require('./utils/auth');

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _litespeed2.default().route({
  method: 'GET',
  url: '/',
  preHandlers: [_auth2.default],
  handler: function handler(req) {
    return 'Server is running!';
  }
}).start();
//# sourceMappingURL=index.js.map