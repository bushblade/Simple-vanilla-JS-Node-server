const state = [{
    href: "https://github.com/bushblade",
    icon: "fa-lg fab fa-github",
    text: 'Github'
  }, {
    href: "https://www.facebook.com/bushblade",
    icon: "fa-lg fab fa-facebook-square",
    text: 'Facebook'
  },
  {
    href: "https://plus.google.com/u/0/+WillAdamsbushblade",
    icon: "fa-lg fab fa-google-plus-square",
    text: 'Google+'
  },
  {
    href: "mailto:bushblade@gmail.com",
    icon: "fa fa-lg fa-envelope",
    text: 'Email'
  }
]

const render = () => state.reduce((str, link) => (str += `
<li>
  <a href="${link.href}">
    <span class="icon">
      <i class="${link.icon}"></i>
    </span>${link.text}</a>
</li>
`), '')

module.exports = {render}