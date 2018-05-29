const form = document.querySelector('form'),
  name = document.getElementById('name'),
  email = document.getElementById('email'),
  emailMessage = document.getElementById('emailMessage'),
  text = document.getElementById('text'),
  submit = document.getElementById('submit')

let valid = false

email.addEventListener('keyup', validateEmail)

form.addEventListener('submit', e => {
  if (!valid) {
    e.preventDefault()
    validateEmail()
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
  } else {
    valid = true
    email.classList.remove('is-danger')
    email.classList.add('is-success')
    emailMessage.textContent = ''
  }
}