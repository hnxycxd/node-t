const express = require('express')
const router = express.Router()
const { sleep } = require('../utils/index')

router.get('/get', async (req, res) => {
  const { type } = req.query
  console.log('type', type)
  if(type == 'init') {
    res.send({ code: 1, message: 'success', data: type })
    return
  }
  const ms = type === 'first' ? 1000 : 900
  await sleep (ms)
  res.send({
    code: 1,
    message: 'success',
    data: `${type} success`
  })
  // res.status(500).send({ name: 'zs' }); 
})

router.post('/post', (req, res) => {
  console.log(req.body)
  res.send({
    code: 1,
    message: 'success',
    data: 'post request success'
  })
})

module.exports = router
