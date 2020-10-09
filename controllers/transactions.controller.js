const Transation = require('../models/Transaction.model')

// @desc Get Transactions
// @route GET /api/v1/transactions
// @access Public
exports.getTransactions = async (req, res, next) => {
  try {
    const transactions = await Transation.find()
    res
      .status(200)
      .json({success: true, count: transactions.length, data: transactions})
  } catch (e) {
    res.status(500).json({success: false, error: 'Server Error'})
  }
}

// @desc Add Transaction
// @route POST /api/v1/transactions
// @access Public
exports.addTransaction = async (req, res, next) => {
  try {
    const {text, amount} = req.body
    const transaction = new Transation({...req.body})
    await transaction.save()
    res.status(201).json({success: true, data: transaction})
  } catch (e) {
    if (e.name === 'ValidationError') {
      const messages = Object.values(e.errors).map((val) => val.message)
      return res.status(400).json({success: false, error: messages})
    } else {
      return res.status(500).json({success: false, error: 'Server Error'})
    }
  }
}

// @desc Delete Transaction
// @route DELETE /api/v1/transactions
// @access Public
exports.deleteTransaction = async (req, res, next) => {
  try {
    // const {text, amount} = req.body
    // const transaction = new Transation({...req.body})
    // await transaction.save()
    // res.status(201).json({success: true, data: transaction})
    const transaction = await Transation.findById(req.params.id)
    if (!transaction) {
      return res
        .status(404)
        .json({success: false, error: 'No transaction found'})
    }
    await transaction.remove()
    return res.status(200).json({
      success: true,
      data: {},
    })
  } catch (e) {
    return res.status(500).json({success: false, error: 'Server Error'})
  }
}
