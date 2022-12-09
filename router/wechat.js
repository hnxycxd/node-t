const express = require('express')
const sha1 = require('sha1')
const router = express.Router()
const fs = require('fs')
const path = require('path')
const dayjs = require('dayjs')
const { sleep } = require('../utils/index')

const TOKEN = 'chengxudong'

// 微信api接入
router.get('/', async (req, res) => {
  console.log('time------->', dayjs().format('hh:mm:ss'))
  const { timestamp, nonce, signature, echostr } = req.query
  let str = [TOKEN, timestamp, nonce].sort().join('')
  str = sha1(str)
  if (str === signature) {
    res.send(echostr)
    return
  }
  res.send({
    code: '0000',
    message: 'success',
    data: 'wechat api fial',
  })
})

const t =
  'eyJraWQiOiI2OTU4YWFhYTliZDA1YTIxZjVmNmZiZTFkNDBmZjY3YyIsInR5cCI6IkpXVCIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJ4aWFvbWluZyIsImF1ZCI6InBjIiwibmJmIjoxNjYyNDUzODA1LCJzY29wZSI6WyJzZXJ2ZXIiLCJub3Bhc3MiXSwiZXhwIjoxNjYyNDU3NDA1LCJpYXQiOjE2NjI0NTM4MDUsImp0aSI6ImVkODhlMTljLWQzMmQtNGJlMC04NzdmLWVmMTU5ZGM1MWVmYiJ9.JjQxRqsq_aqad1TdixquL1X7K7bHSmdmdTPskS5D3MYdE3NiDp5SpuEGNLK5x7NaeTgQid9WCKLZ5p3eDLOoq2EiUo6r4mpQds6BWEGEaJm0IY-sXKRFwd1h6PwCzeiQ9X13d4iwpbmjIeG_xQgWzBd7RAIoVhNZefULcZcBPMzTG4j_axLBlU_bp2zz9agTHUoxzti9wywO_1zOUYT5xhnnweSR-CNpB3BkzUaw9V-64UaGImPE59tsZf2HrUccbpMn6vWv0SHr2HgwAd9qfmzh9s9eBarlp_h7zUaU_fM6wpOT_CowWLN92qRP5pvLbAdMddPL7SLbbN1SOy0rHQ'
router.get('/login', async (req, res) => {
  console.log('req', req.query)
  await sleep(2000)
  res.send({
    code: '0000',
    message: 'success',
    data: {
      accountName: '张国',
      access_token: t,
      expires_in: 3600,
      certNo: '120101199508087259',
      tel: ''
    },
  })
})

module.exports = router
