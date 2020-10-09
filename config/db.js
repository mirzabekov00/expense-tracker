const mongoose = require('mongoose')
const config = require('config')

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(config.get('mongoUri'), {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    })
    console.log(
      `MongoDB connected: ${conn.connection.host}`.cyan.underline.bold
    )
  } catch (error) {
    console.log(`Error: ${error.message}`)
    process.exit(1)
  }
}

module.exports = connectDB
