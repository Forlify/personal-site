// REQUIRE ////////////////////////////////////////////////////////////////////

const express = require('express')
const validator = require('validator')
const bodyParser = require('body-parser')
const request = require('request')

const sendEmail = require('./public/resources/nodejs/email')

const app = express()

// BASIC SETUP ////////////////////////////////////////////////////////////////////

app.use(express.static(__dirname + '/public'))
app.set('views', __dirname + '/public')
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')

app.use(express.urlencoded({ extended: false }))
app.use(bodyParser.json())

// GET / POST ////////////////////////////////////////////////////////////////////

app.get('/', (req, res) => {
    res.render('index.html')
})

app.post('/submit-form', (req, res) => {
    const name = req.body.name
    const email = req.body.email
    const message = req.body.message

    if(
        !validator.isEmail(email) ||
        name.length > 50 || 
        email.length > 50 || 
        message.length > 800 
    ) return res.json({"success": false, "msg":"Wrong input."})
    
    if(
        req.body.captcha === undefined ||
        req.body.captcha === '' ||
        req.body.captcha === null 
    ) return res.json({"success": false, "msg":"Please select captcha."})
        
    const secretKey = process.env.RECAPTCHA_API_KEY 
    const verifyUrl = `https://google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${req.body.captcha}&remoteip=${req.connection.remoteAddress}`
    
    request(verifyUrl, (err, response, body) => {
        body = JSON.parse(body)

        if(body.success !== undefined && !body.success) {
            return res.json({"success": false, "msg":"Captcha verification failed."})
        }

        sendEmail(name,email,message)

        return res.json({"success": true, "msg":"Sent successfully!"})
    })
})

app.get('*', (req, res) => {
    res.render('404.html')
})

// LISTEN ////////////////////////////////////////////////////////////////////

app.listen(50000, () => {
    console.log(`Server running at http://blazejkustra:50000/`)
})

