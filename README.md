# node-require-alias
add alias when require file

# SUPPORT
node >= 6.0.0

# USAGE
```
const path = require("path")
require('node-require-alias').setAlias({
    "@": path.join(__dirname, "this/is/a/path")
})
// or require('node-require-alias').setAlias("@", path.join(__dirname, "this/is/a/path"))
```
