const express = require('express'),
  app = express(),
  port = 80

app.use(express.static('public'))


//use sudo setcap cap_net_bind_service=+ep /bin/node 
app.listen(port, () => console.log(`server started on port ${port}`))