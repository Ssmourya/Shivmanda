const { watch } = require("fs");

module.exports = {
    apps: [
        {
            name: "Shivmanda",
            script: "npm start",
            watch: true,
            port: 3000
        }
    ]
}