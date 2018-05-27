const express = require('express'),
  app = express(),
  routes = [{
    route: '/',
    page: './views/index',
    data: null
  }],
  port = 80

app.use(express.static('public'))

const render = async (file, data) => {
  const pageData = await file(data = null)
  return pageData
}

for (const r of routes) {
  app.get(r.route, (req, res) => {
    const page = require(r.page)
    render(page, r.data).then(p => res.send(p))
  })
}

app.listen(port, () => console.log(`server started on port ${port}`))