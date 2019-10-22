const path = require('path')

module.exports = {
  resolve: {
    // for intellij
    alias: {
      '@': path.resolve(__dirname),
      '~': path.resolve(__dirname)
    }
  }
}
