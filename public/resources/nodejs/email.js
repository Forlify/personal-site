const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendEmail = (name, email, message) => {
    sgMail.send({
        from: 'forlify@gmail.com',
        to: 'kustrablazej@gmail.com',
        subject: `Message sent from ${email} - ${name}`,
        text: `${message}`
    })
}

module.exports = sendEmail 
