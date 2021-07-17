const express = require('express')
const connectDB = require('./config/db')

const app = express()

// Connect DB
connectDB

app.get('/', (req,res) => res.send('API Running'))

//Define Routes
app.use('/api/users', require('./routes/api/users'))
app.use('/api/auth', require('./routes/api/auth'))
app.use('/api/resultmale', require('./routes/api/resultmale'))
app.use('/api/resultfemale', require('./routes/api/resultmale'))

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=> console.log(`Server start on port ${PORT}`))