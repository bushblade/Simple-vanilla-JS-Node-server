const render = async (file, data) => {
  const pageData = await file(data = null).replace(/\s{2,}|\n/g, '')
  return pageData
}

module.exports = render