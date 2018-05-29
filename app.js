const express = require('express'),
  app = express(),
  render = require('./render'),
  priv = require('./private'),
  index = require('./views/index'),
  contact = require('./views/contact')
  notFound = require('./views/notFound')
port = 80

app.use(express.static('public'))


app.get('/', (req, res) => render(index).then(page => res.send(page)))

app.get('/contact', (req, res) => render(contact).then(page => res.send(page)))

//invalid routes
app.use((req, res) => res.status(404) ? render(notFound).then(page => res.send(page)) : false)


app.listen(port, () => console.log(`server started on port ${port}`))