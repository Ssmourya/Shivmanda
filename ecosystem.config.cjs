const { watch } = require("fs");

module.exports = {
    apps: [
        {
            name: "Shivmanda",
            script: "app.js",
            watch: true,
            port: 3000
        }
    ]
}