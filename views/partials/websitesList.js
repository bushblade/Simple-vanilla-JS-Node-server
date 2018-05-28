const state = [{
    href: "https://www.bushblade.co.uk/",
    text: 'Bushblade Knives'
  },
  {
    href: "http://www.louadamsphotography.com/",
    text: 'Lou Adams Photography'
  },
  {
    href: "http://www.westyorkshirebushcraft.co.uk/",
    text: 'West Yorkshire Bushcraft'
  }
]

const render = () => state.reduce((str, site) => (str += `
  <li>
    <a href="${ site.href }">
      <span class="icon">
        <i class="fa-lg fas fa-external-link-square-alt" aria-hidden="true"></i>
      </span>${ site.text }</a>
  </li>
`), '')

module.exports = {render}