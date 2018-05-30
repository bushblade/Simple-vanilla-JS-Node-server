const priv = require('./private'),
      mailgun = require('mailgun-js')({apiKey: priv().apiKey, domain: priv().domain})

const mail = formMessage => {
  const data = {
    from: `${formMessage.name} <${formMessage.email}>`,
    to: priv().to,
    subject: 'Message recieved from your website',
    text: formMessage.message
  }
  mailgun.messages().send(data, (error, body) => console.log(body))
}

module.exports = mail