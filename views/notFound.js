const header = require('./partials/header.js'),
      footer = require('./partials/footer.js')

const render = () => (`
  ${header.render()}
    <div class="container">
      <div class="columns">
        <div class="column is-two-thirds">
          <article class="message is-danger">
            <div class="message-header">
              <p>Error!</p>
            </div>
            <div class="message-body">
              <p>
                The page you are looking for does not exist on this server!
              </p>
              <br>
              <div class="container">
                <a class="button is-outlined" href="/">Save me from this scary message!</a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  ${footer.render()}
`)

module.exports = render