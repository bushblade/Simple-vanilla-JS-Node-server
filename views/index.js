const header = require('./partials/header.js'),
  footer = require('./partials/footer.js'),
  socialList = require('./partials/socialList'),
  projectsList = require('./partials/projectsList'),
  websitesList = require('./partials/websitesList')

const index = () => (`
${header.render()}
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
            <ul>${socialList.render()}</ul>
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
            <ul>${projectsList.render()}</ul>
          </div>
          <!-- websites -->
          <div class="column is-one-half">
            <h5 class="is-size-5 has-text-weight-semibold">Websites</h5>
            <hr>
            <ul>${websitesList.render()}</ul>
          </div>
        </div>
      </div>
    </div>
  </div>
${footer.render()}
`)

module.exports = index