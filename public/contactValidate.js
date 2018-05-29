const form = document.querySelector('form'),
  name = document.getElementById('name'),
  email = document.getElementById('email'),
  emailMessage = document.getElementById('emailMessage'),
  emailSuccess = document.getElementById('emailSuccess'),
  emailFail = document.getElementById('emailFail'),
  text = document.getElementById('text'),
  submit = document.getElementById('submit')

let valid = false

email.addEventListener('keyup', validateEmail)
name.addEventListener('keyup', validateName)
text.addEventListener('keyup', validateText)

form.addEventListener('submit', e => {
  if (!valid) {
    e.preventDefault()
    validateEmail()
    validateName()
    validateText()
  }
})

function validateEmail() {
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
  if (!re.test(email.value)) {
    valid = false
    email.classList.remove('is-success')
    email.classList.add('is-danger')
    emailMessage.classList.add('help', 'is-danger')
    emailMessage.textContent = 'This email is invalid!'
    emailSuccess.classList.add('is-hidden')
    emailFail.classList.remove('is-hidden')
  } else {
    valid = true
    email.classList.remove('is-danger')
    email.classList.add('is-success')
    emailMessage.textContent = ''
    emailSuccess.classList.remove('is-hidden')
    emailFail.classList.add('is-hidden')
  }
}

function validateName () {
  if (name.value.length > 1) {
    valid = true
    name.classList.remove('is-danger')
    name.classList.add('is-success')
    nameSuccess.classList.remove('is-hidden')
    nameFail.classList.add('is-hidden')
  }
  else {
    valid = false
    name.classList.remove('is-success')
    name.classList.add('is-danger')
    nameSuccess.classList.add('is-hidden')
    nameFail.classList.remove('is-hidden')
  }
}

function validateText () {
  if (text.value.length > 1) {
    valid = true
    text.classList.remove('is-danger')
    text.classList.add('is-success')
    textSuccess.classList.remove('is-hidden')
    textFail.classList.add('is-hidden')
  }
  else {
    valid = false
    text.classList.remove('is-success')
    text.classList.add('is-danger')
    textSuccess.classList.add('is-hidden')
    textFail.classList.remove('is-hidden')
  }
}