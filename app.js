// REQUIRE ////////////////////////////////////////////////////////////////////

const express = require('express')
const app = express()

// BASIC SETUP ////////////////////////////////////////////////////////////////////

const port = process.env.PORT || 3000;
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

app.listen(port, () => {
    console.log(`Server running at http://localhost:3000`)
})

