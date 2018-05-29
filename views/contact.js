const header = require('./partials/header.js'),
      footer = require('./partials/footer.js')
const render = () => (` ${header.render()}
<div class="container">
  <div class="columns">
    <div class="column is-two-thirds">

      <form action="/contact" method="post" accept-charset="utf-8">

        <div class="field">
          <label class="label">Name</label>
          <div class="control has-icons-left has-icons-right">
            <input id="name" class="input" type="text" placeholder="" name="name">
            <span class="icon is-small is-left">
              <i class="fas fa-user"></i>
            </span>
            <span id="nameFail" class="icon is-small is-right is-hidden">
              <i class="fas fa-exclamation-triangle"></i>
            </span>
            <span id="nameSuccess" class="icon is-small is-right is-hidden">
              <i class="fas fa-check"></i>
            </span>
          </div>
        </div>

        <div class="field">
          <label class="label">Email</label>
          <div class="control has-icons-left has-icons-right">
            <input id="email" class="input" type="email" placeholder="" name="email">
            <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
            </span>
            <span id="emailFail" class="icon is-small is-right is-hidden">
              <i class="fas fa-exclamation-triangle"></i>
            </span>
            <span id="emailSuccess" class="icon is-small is-right is-hidden">
              <i class="fas fa-check"></i>
            </span>
          </div>
          <p id="emailMessage"></p>
        </div>

        <div class="field">
          <label class="label">Message</label>
          <div class="control has-icons-left has-icons-right">
            <textarea id="text" class="textarea" placeholder="Enter message" name="message" maxlength="400"></textarea>
            <span id="textFail" class="icon is-small is-right is-hidden">
              <i class="fas fa-exclamation-triangle"></i>
            </span>
            <span id="textSuccess" class="icon is-small is-right is-hidden">
              <i class="fas fa-check"></i>
            </span>
          </div>
        </div>

        <div class="field">
          <div class="control">
            <input type="submit" class="button is-link" value="Submit">
          </div>
        </div>
      </form>

    </div>
  </div>
</div>
${footer.render(`<script src="/contactValidate.js"></script>`)} 
`)

module.exports = render