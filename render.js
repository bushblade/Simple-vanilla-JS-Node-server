const render = async (file, data = null) => {
  const pageData = await file(data).replace(/\s{2,}|\n/g, '')
  return pageData
}

module.exports = render