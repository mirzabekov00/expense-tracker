const {Router} = require('express')
const {
  getTransactions,
  addTransaction,
  deleteTransaction,
} = require('../controllers/transactions.controller')

const router = Router()

router.route('/').get(getTransactions).post(addTransaction)

router.route('/:id').delete(deleteTransaction)

module.exports = router
