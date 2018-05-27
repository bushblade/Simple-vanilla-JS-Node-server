const header = require('./partials/header.js'),
  footer = require('./partials/footer.js'),
  state = {
    socialLinks: [{
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
    ],
    projects: [{
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
    ],
    websites: [{
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
  }
  
const index = data => {
  return `${header()}
<div class="container">
    <div class="columns">
      <div class="column is-half">
        <article class="media">
          <div class="media-left">
            <figure class="image container is-128x128">
              <img src="img/profile.jpg" alt="">
            </figure>
          </div>
          <div class="media-content">
            <ul>
            ${state.socialLinks.reduce((str, link) => (str +=
              `<li>
                <a href="${link.href}">
                  <span class="icon">
                    <i class="${link.icon}"></i>
                  </span>${link.text}</a>
              </li>`
              ),'')}
            </ul>
          </div>
        </article>
      </div>
    </div>
  </div>

  <!-- about -->
  <div class="container">
    <div class="columns">
      <div class="column is-two-thirds">
        <div class="content">
          <br>
          <p>
            <strong>Bushblade Projects</strong> is a platform for my projects and websites as I learn the technologies of web development.</p>
          <p>The server itself is part of that process, running on a
            <a href="https://www.linode.com/" target="_blank">Linode</a> virtual machine with an arch Linux install and remotely managed via ssh. It is currently running a <span class="strike">Apache/httpd</span> NodeJS server session.</p>
        </div>
      </div>
    </div>
  </div>

  <!-- lists -->
  <div class="container">
    <div class="columns">
      <div class="column is-two-thirds">
        <div class="columns">
          <!-- projects -->
          <div class="column is-one-half">
            <h5 class="is-size-5 has-text-weight-semibold">Projects</h5>
            <hr>
            <ul>
            ${state.projects.reduce((str, project) => (str +=
              `<li>
                <a href="${ project.href }">
                  <span class="icon">
                    <i class="fas fa-lg fa-folder"></i>
                  </span>${ project.text }</a>
              </li>`
            ), '')}
            </ul>
          </div>
          <!-- websites -->
          <div class="column is-one-half">
            <h5 class="is-size-5 has-text-weight-semibold">Websites</h5>
            <hr>
            <ul>
            ${state.websites.reduce((str, site) => (str +=
              `<li>
                <a href="${ site.href }">
                  <span class="icon">
                    <i class="fa-lg fas fa-external-link-square-alt" aria-hidden="true"></i>
                  </span>${ site.text }</a>
              </li>`
            ), '')}
            </ul>
          </div>

        </div>
      </div>
    </div>
  </div>

${footer()}`
}

module.exports = index