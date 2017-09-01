# require-alias
add alias when require file

# USAGE
```
const path = require("path")
require('require-alias').setAlias({
    "@": path.join(__dirname, "this/is/a/path")
})
// or require('require-alias').setAlias("@", path.join(__dirname, "this/is/a/path"))
```