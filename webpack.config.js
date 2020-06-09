const path = require('path')
const gamemodeName = 'gamemode'

const common = {
  plugins: [],
  resolve: {
    extensions: [
      '.js'
    ]
  },
  node: {
    __dirname: false
  },
}

const client = {
  entry: './client/index.js',
  output: {
    path: path.join(__dirname, '..', 'client_packages'),
    filename: 'index.js'
  }
}

const server = {
  entry: './server/index.js',
  output: {
    path: path.join(__dirname, '..', 'packages', gamemodeName),
    filename: 'index.js'
  },
  target: 'node'
}

module.exports = [
  Object.assign({}, common, client),
  Object.assign({}, common, server)
]