const columns = [
  {
    title: '渠道',
    key: 'channel',
  },
  {
    title: '开户人',
    key: 'accountName',
  },
  {
    title: '身份证',
    key: 'idCard',
  },
  {
    title: '开户人银行卡号',
    key: 'accountNo',
  },
  {
    title: '开户银行',
    key: 'bankBranch',
  },
  {
    title: '预留手机号',
    key: 'bankPhone',
  },
  {
    title: '操作',
    slot: 'action',
    width: 190,
  },
]

const getMockDataByColumns = (columns, n) => {
  const data = []
  Array.from({ length: n }, () => {
    const dataItem = {}
    columns.forEach(({ key }) => {
      dataItem[key] = Math.random().toFixed(2)
    })
    data.push(dataItem)
  })
  return data
}
// const data = getMockDataByColumns(columns, 3)

const response = Array.from({ length: 56 }, (_, key) => ({
  key,
  id: Math.random().toFixed(4),
  certNo: '331082198311067594',
  accountNo: '6217002830003322388',
  accountName: Math.random().toFixed(2),
  bankPhone: '16621253278',
  bindChannel: key,
  bankCode: '105',
  bankBranch: '中国建设银行',
  bindSource: 'LOAN_APPLY',
  signStatus: 'alreadySign',
}))

module.exports = response
