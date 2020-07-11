// REQUIRE ////////////////////////////////////////////////////////////////////

const express = require('express')
const bodyParser = require('body-parser')

const app = express()

// BASIC SETUP ////////////////////////////////////////////////////////////////////

app.use(express.static(__dirname + '/public'))
app.set('views', __dirname + '/public')
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')

// GET / POST ////////////////////////////////////////////////////////////////////

app.get('/', (req, res) => {
    res.render('index.html')
})

app.get('*', (req, res) => {
    res.render('404.html')
})

// LISTEN ////////////////////////////////////////////////////////////////////

app.listen(3000, () => {
    console.log(`Server running at http://localhost:3000`)
})

