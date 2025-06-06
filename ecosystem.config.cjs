const { watch } = require("fs");

module.exports = {
    apps: [
        {
            name: "Shivmanda",
            script: "/src/page.tsx",
            watch: true,
            port: 3000
        }
    ]
}