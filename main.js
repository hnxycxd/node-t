const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const expressWs = require('express-ws')
const sha1 = require('sha1')
const dayjs = require('dayjs')
const tempData = require('./tempData')
const demo = require('./router/demo')
const wechat = require('./router/wechat')
const applyUI = require('./router/applyUI')
const uiApprove = require('./router/uiApprove')

const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.all('*', (req, res, next) => {
  // res.header('Access-Control-Allow-Origin', '*')
  // res.header('Access-Control-Allow-Headers', '*')
  // res.header('Access-Control-Allow-Credentials', 'true')
  res.header('Set-Cookie', 'name=zs')
  next()
})

app.use('/demo', demo)
app.use('/wechat', wechat)
app.use('/apply', applyUI)
app.use('/api', uiApprove)
// app.use('/engineering', applyUI)
app.use(express.static(__dirname + '/dist'))
// expressWs(app);

// 微信api接入
// app.get('/', async (req, res) => {
//   const TOKEN = 'chengxudong'
//   console.log('time------->', dayjs().format('hh:mm:ss'))
//   const { timestamp, nonce, signature, echostr } = req.query
//   let str = [TOKEN, timestamp, nonce].sort().join('')
//   str = sha1(str)
//   if (str === signature) {
//     res.send(echostr)
//     return
//   }
//   res.send({
//     code: '0000',
//     message: 'success',
//     data: {
//       access_token:
//         'eyJraWQiOiI2OTU4YWFhYTliZDA1YTIxZjVmNmZiZTFkNDBmZjY3YyIsInR5cCI6IkpXVCIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJhZG1pbiIsImF1ZCI6InBjIiwibmJmIjoxNjYxNTUyMzI3LCJzY29wZSI6WyJzZXJ2ZXIiLCJub3Bhc3MiXSwiZXhwIjoxNjYxNTU1OTI3LCJpYXQiOjE2NjE1NTIzMjcsImp0aSI6ImRiNTdiM2JkLTFlNzMtNDQ4MC05MTc1LWU2ZjhjYmI5MGQ0NSJ9.UysM5GnXrZjGpo0uY9Ofp6QMs816o9b5yO0jhrZdhketEqKoJf5PtsQwGESbLUNDw1vSfWbQs8-xnxSGpLCljGnX6GHolEvSF-qYKsqKS6q0D-K0tsZR_G2VEs1XT6LSiRhT6SRsXD2LPdibSxCaaj3TfLiGJtp596bN5yY99uHqQ9nMukXTFEcNpRJWa9OITB5HMlmEqM3qInbMBXfq1g_8z5G3oOVtDMsuYm-d2fpBta9jwPdg3xq6jbg-X-l26ZEkxEUco8aQk6WWr6764f_ERQgxEsnwDj--xRAS097PRn9IL73uIKgTox2XsCyAOa8EVYVE4o4QRggUGXh1ig',
//       expires_in: 3600,
//       refresh_token:
//         'S1L4aqcqt-Mc0KFFWvYuBYjCKpMq3esd-lQcyxIchi_tz8neQLopi8TXMg3j0XfbulGJIgy2nJJ5rSifb8Xodxaz4BaoRRmAEMaepEBdcU6YFJPgEjCNrDDOqiZ0P2mp',
//       scope: 'server nopass',
//       token_type: 'Bearer',
//     },
//   })
// })

// app.ws('/ws/api', (ws, req) => {
//   ws.send('连接成功');
//   setInterval(() => {
//     ws.send(
//       JSON.stringify({
//         type: 'common',
//         data: [{ name: 'zs', age: Math.random() }],
//       })
//     );
//   }, 10000);
// });

app.listen(8090, () => {
  console.log('serve is running at http://localhost:8090')
})
