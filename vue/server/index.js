const cors = require('cors')
const express = require('express')
const port = process.env.PORT || 5000
const router = require('./routes')
const bodyParser = require('body-parser');

const app = express()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())
app.use(express.json())
app.use('/api',router)
app.get('/',(reg,res) => {
    res.send('ura')
})

app.listen(port, ()=> console.log(`server start ${port}`))