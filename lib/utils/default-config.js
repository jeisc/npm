
var log = require("./log")
  , path = require("path")
  , hasSSL = false
try {
  crypto = process.binding("crypto") && require("crypto")
  hasSSL = true
} catch (ex) {
  crypto = {}
}

module.exports =
  { "auto-activate" : "always"
  , "auto-deactivate" : true
  , tag : "latest"
  , configFile : path.join(process.execPath, "..", "..", "etc", "npmrc")
  , root : path.join(process.execPath, "..", "..", "lib", "node")
  , binroot : path.dirname(process.execPath)
  , registry : hasSSL ? "https://registry.npmjs.org/"
             : "http://registry.npmjs.org/"
  }
