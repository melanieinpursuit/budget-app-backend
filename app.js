const express = require('express')
const cors = require('cors')
const app = express()
const budgetController = require('./controllers/budgetControllers')

app.use(express.json())
app.use(cors());
app.use('/transactions', budgetController)

app.get('/', (req, res) => {
    res.send(`Welcome to The Budget App`)
})

app.get('*', (req, res) => {
    res.status(404).json({ error: 'Page Not Found!' })
})


module.exports = app;