const header = require('./partials/header.js'),
      footer = require('./partials/footer.js')

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
              <li>
                <a href="https://github.com/bushblade">
                  <span class="icon">
                    <i class="fa-lg fab fa-github" aria-hidden="true"></i>
                  </span>Github</a>
              </li>
              <li>
                <a href="https://www.facebook.com/bushblade">
                  <span class="icon">
                    <i class="fa-lg fab fa-facebook-square" aria-hidden="true"></i>
                  </span>Facebook</a>
              </li>
              <li>
                <a href="https://plus.google.com/u/0/+WillAdamsbushblade">
                  <span class="icon">
                    <i class="fa-lg fab fa-google-plus-square" aria-hidden="true"></i>
                  </span>Google+</a>
              </li>
              <li>
                <a href="mailto:bushblade@gmail.com">
                  <span class="icon">
                    <i class="fa fa-lg fa-envelope" aria-hidden="true"></i>
                  </span>bushblade@gmail.com</a>
              </li>
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
              <li>
                <a href="flexBoxGallery/">
                  <span class="icon">
                    <i class="fas fa-lg fa-folder"></i>
                  </span>Simple Flexbox Gallery</a>
              </li>
              <li>
                <a href="intervalTimer/">
                  <span class="icon">
                    <i class="fas fa-lg fa-folder"></i>
                  </span>Interval Timer</a>
              </li>
              <li>
                <a href="calculator/">
                  <span class="icon">
                    <i class="fas fa-lg fa-folder"></i>
                  </span>Calculator</a>
              </li>
              <li>
                <a href="taskList/">
                  <span class="icon">
                    <i class="fas fa-lg fa-folder" aria-hidden="true"></i>
                  </span>Task List</a>
              </li>
              <li>
                <a href="randomPonyName/">
                  <span class="icon">
                    <i class="fas fa-lg fa-folder" aria-hidden="true"></i>
                  </span>MLP Name Generator</a>
              </li>
              <li>
                <a href="secretSanta/">
                  <span class="icon">
                    <i class="fas fa-lg fa-folder" aria-hidden="true"></i>
                  </span>Secret Santa Generator</a>
              </li>
            </ul>
          </div>
          <!-- websites -->
          <div class="column is-one-half">
            <h5 class="is-size-5 has-text-weight-semibold">Websites</h5>
            <hr>
            <ul>
              <li>
                <a href="https://www.bushblade.co.uk/">
                  <span class="icon">
                    <i class="fa-lg fas fa-external-link-square-alt" aria-hidden="true"></i>
                  </span>Bushblade Knives</a>
              </li>
              <li>
                <a href="http://www.louadamsphotography.com/">
                  <span class="icon">
                    <i class="fa-lg fas fa-external-link-square-alt" aria-hidden="true"></i>
                  </span>Lou Adams Photography</a>
              </li>
              <li>
                <a href="http://www.westyorkshirebushcraft.co.uk/">
                  <span class="icon">
                    <i class="fa-lg fas fa-external-link-square-alt" aria-hidden="true"></i>
                  </span>West Yorkshire Bushcraft</a>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  </div>

${footer()}`
}

module.exports = index