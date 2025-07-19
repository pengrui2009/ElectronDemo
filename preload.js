/**
 * The preload script runs before `index.html` is loaded
 * in the renderer. It has access to web APIs as well as
 * Electron's renderer process modules and some polyfilled
 * Node.js functions.
 *
 * https://www.electronjs.org/docs/latest/tutorial/sandbox
 */

const { contextBridge } = require('electron')
const { spawn, exec } = require('child_process')
const path = require('path')

contextBridge.exposeInMainWorld('myAPI', {
  startServerForSpawn: () => {
    console.log('startServerForSpawn')
    let path1 = path.join(__dirname, 'app/ruoyi-admin.jar');
    const ls = spawn('java', ['-jar', path1]);
    ls.stdout.on('data', (data) => {
      if(data.toString().indexOf("Started RuoYiApplication") !== -1){
        window.location.href="http://localhost:80";
      }
    });
    ls.stderr.on('data', (data) => {
      console.error('stderr: ${data}');
      alert("启动服务异常");
    });
    ls.on('close', (code) => {
      console.log('child process exited with code ${code}');
    });
  },
  startServerForbat: () =>{
    console.log('startServerForbat')
    let path1 = path.join(__dirname, 'app/ruoyi-admin.bat');
    const bat = spawn('cmd.exe',['/c', path1]);
    bat.stdout.on('data', (data) => {
      console.log(data.toString());
      if(data.toString().indexOf("Started RuoYiApplication") !== -1){
        window.location.href="http://localhost:80";
      }
    });
    bat.stderr.on('data', (data) => {
      console.error(data.toString());
    });
    bat.on('exit', (code) => {
      console.log('Child exited with code ${code}');
    });
  }
})


// window.addEventListener('DOMContentLoaded', () => {
//   const replaceText = (selector, text) => {
//     const element = document.getElementById(selector)
//     if (element) element.innerText = text
//   }

//   for (const type of ['chrome', 'node', 'electron']) {
//     replaceText(`${type}-version`, process.versions[type])
//   }
// })
