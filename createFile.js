const fs = require('fs');
const filePath = 'text.txt';
const fileSize = 1024; //字节

let t = 0;
fs.writeFileSync(filePath, '');
while(true) {
  if (fs.statSync(filePath).size >= fileSize) break;
  t++;
  fs.appendFileSync(filePath, `这句话重复了${t}遍，`)
}
console.log('size', fs.statSync(filePath).size);