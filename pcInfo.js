const os = require('os');

const info = {
  name: os.hostname(),
  system: os.type(),
  arch: os.arch(),
  // totalmem: os.totalmem() / 1024 / 1024 / 1024,
  cups: os.cpus(),
}
console.log('info', info);
