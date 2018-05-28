const state = [{
    href: "flexBoxGallery/",
    text: "Simple Flexbox Gallery"
  },
  {
    href: "intervalTimer/",
    text: 'Interval Timer'
  },
  {
    href: "calculator/",
    text: 'Calculator'
  },
  {
    href: "taskList/",
    text: 'Task List'
  },
  {
    href: "randomPonyName/",
    text: 'MLP Name Generator'
  },
  {
    href: "secretSanta/",
    text: 'Secret Santa Generator'
  }
]

const render = () => state.reduce((str, project) => (str + `
  <li>
    <a href="${ project.href }">
      <span class="icon">
        <i class="fas fa-lg fa-folder"></i>
      </span>${ project.text }</a>
  </li>
`), '')

module.exports = {render}