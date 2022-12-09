const express = require('express')
const router = express.Router()
const { sleep } = require('../utils/index')

router.get('/engineeringLoanMng/queryContractInfo', async (req, res) => {
  await sleep(1000)
  res.send({
    code: '0000',
    message: 'success',
    data: {
      invoiceUnit: '河南三湘机械设备有限公司',
      buyerName: '洛阳明华货运有限公司',
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

router.post('/engineeringGpsInfo/locationbute', (req, res) => {
  res.send({
    code: '0000',
    data: {
      resultDTOS: [
        {
          appcode: 'EP2209100001001',
          battery: 96,
          equiplocalation: '副驾驶',
          equipment: '14210337174',
          equiptypestr: '2',
          flag: false,
          imei: '14210337174',
          lat: 29.09695,
          lng: 111.752716,
          locateMode: 0,
          locationAdd: '湖南省常德市鼎城区s306.离306省道附近桃花源酒家约28米',
          locationTime: '2022-11-03 11:46:33',
          sbcstatus: '在线',
          sim: '1440747134136',
          typestr: '无线主机',
          vin: 'LZZ8BYVF7LC321092',
        },
      ],
      success: true,
    },
    msg: 'success',
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
