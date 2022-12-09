const express = require('express')
const router = express.Router()
const { sleep } = require('../utils/index')

router.post('/product/finBankAcceptanceConfig/queryConfigPage', async (req, res) => {
  await sleep(500)
  res.send({
    code: '0000',
    message: 'success',
    data: {
      current: 1,
      pages: 1,
      size: 10,
      total: 5,
      records: [
        {
          cfgType: '类型DEMO',
          cfgValue: '1234',
          acceptanceBank: '101',
          effectStatus: '0',
          id: '0',
        },
        {
          cfgType: '类型DEMO',
          cfgValue: '12345',
          acceptanceBank: '102',
          effectStatus: '1',
          id: '1',
        },
      ],
    },
  })
})

router.get('/engineeringContract/getContractParam/:applyNo', async (req, res) => {
  console.log('req', req.params)
  await sleep(500)
  res.send({
    code: '0000',
    message: 'hhh',
    data: {
      custData: {
        leaseCustName: '测试',
        guarantorNames: '王勇、小明',
        guaranteeMethod: '01',
      },
      leaseData: {
        leaseType: '1',
        isFirstLicense: '0',
        totalRentPrice: 100000,
        downPayAmt: 20000,
        loanAmt: 80000,
        loanTerm: 36,
        repaymentFrequency: '0',
        totalRentAmt: 90248.76,
      },
      costData: {
        custMarginAmt: 800,
        firmMarginAmt: 800,
        custHandlingAmt: 1,
        insuranceFee: 0,
        safeControllerFee: 0,
        firstTermRent: 2506.91,
        firmServiceAmt: 0,
        // firmServiceAmt: Math.random() > .5 ? 0 : 33,
        // firmServiceSignType: '0'
      },
      bankcardData: {
        accountName: '测试',
        accountNo: '6217920198027381',
        bankBranch: '浦发银行',
      },
      invoiceData: {
        invoiceProvide: '30',
      },
      insuranceData: {
        insuranceRequire: '无须投保',
        insuranceProvide: '无保险',
      },
      gpsData: {
        gpsActiveRequire: '无要求',
      },
    },
  })
})

router.post('/post', (req, res) => {
  console.log(req.body)
  res.send({
    code: 1,
    message: 'success',
    data: 'post request success',
  })
})

module.exports = router
