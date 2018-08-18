/**
 * @author Edward P. Legaspi
 * @since 1.0
 */
if (process.env.NODE_ENV && process.env.NODE_ENV.trim() === 'production') {
  module.exports = require('./configureStore.prod');
} else {
  module.exports = require('./configureStore.dev');
}
