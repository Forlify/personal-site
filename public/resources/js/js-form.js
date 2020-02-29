const messageForm = document.querySelector('form')

const formMessage = document.querySelector('.contact-form')

const name = document.querySelector('#name')
const email = document.querySelector('#email')
const message = document.querySelector('#message')

const messageRespond = document.querySelector('#messageRespond')

messageForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const captcha = document.querySelector('#g-recaptcha-response').value

    fetch('/submit-form', {
        method:'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-type':'application/json'
        },
        body:JSON.stringify({name:name.value, email:email.value, message:message.value, captcha: captcha})
    })
    .then((res) => res.json())
    .then((data) => {
        console.log(data)

        messageRespond.textContent = data.msg
        if(data.success) grecaptcha.reset();
    });
})