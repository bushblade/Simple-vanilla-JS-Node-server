const express = require('express'),
  app = express(),
  index = require('./views/index'),
  port = 80

app.use(express.static('public'))

app.get('/', (req, res) => res.send(index()))

//use sudo setcap cap_net_bind_service=+ep /bin/node 
app.listen(port, () => console.log(`server started on port ${port}`))