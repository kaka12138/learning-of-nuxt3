const path = require("path")
const fs = require("fs")
const os = require("os")
const { execSync } = require("child_process")

const nvmConfigpath = path.join(process.cwd(), ".nvmrc")

function run() {
    if(fs.existsSync(nvmConfigpath)){
        let nvmVersion = fs.readFileSync(nvmConfigpath, "utf-8").trim()

        if(os.platform() === "win32") {
            nvmVersion = execSync(`type .nvmrc`, { encoding: "utf-8" }).trim()
        }

        if(nvmVersion.length === 0) {
            console.warn('\x1b[31m%s\x1b[0m', ".nvmrc file is empty")
            return
        }
        // the same version
        try {
            const currentVersion = execSync(`nvm current`, { encoding: "utf-8", stdio: "inherit"})
            if(currentVersion === null) {
                console.log('\x1b[32m%s\x1b[0m', `No need to switch version`)
                return
            }
        } catch (error) {
            console.error('\x1b[31m%s\x1b[0m', `compare version failed: ${error.message}`)
        }
        
        //  switch
        try {
            const output = execSync(`nvm use ${nvmVersion}`, { stdio: "inherit" })
            if(output === null) {
                console.error('\x1b[31m%s\x1b[0m', "The above erorr from nvm, Because execSync reuturn null")
                return
            }
            console.log('\x1b[32m%s\x1b[0m', `current node version is ${nvmVersion}`)
        } catch (error) {
            console.error('\x1b[31m%s\x1b[0m', `switch node version failed: ${error.message}`)
        }
    } else {
        console.warn('\x1b[31m%s\x1b[0m', ".nvmrc file not found")
    }
}

run()
