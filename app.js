const express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  render = require('./render'),
  mail = require('./mail'),
  index = require('./views/index'),
  contact = require('./views/contact'),
  notFound = require('./views/notFound'),
  port = 80

app.use(express.static('public'))
app.use(bodyParser.urlencoded({
  extended: true
}))


app.get('/', (req, res) => render(index).then(page => res.send(page)))

app.get('/contact', (req, res) => render(contact).then(page => res.send(page)))
app.get('/contact/success', (req, res) => render(contact, true).then(page => res.send(page)))

app.post('/contact', (req, res) => {
  console.log(req.body)
  mail(req.body)
  res.redirect('/contact/success')
})

//invalid routes
app.use((req, res) => {
  if (res.status(404)) {
    render(notFound).then(page => res.send(page))
  }
})


app.listen(port, () => console.log(`server started on port ${port}`))