
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./epo-react-lib.cjs.production.min.js')
} else {
  module.exports = require('./epo-react-lib.cjs.development.js')
}
