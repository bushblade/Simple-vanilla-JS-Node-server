const footer = () => {
  return `<br>
  <footer class="footer">
    <div class="container">
      <div class="columns">
        <div class="column is-one-half">
          <p>This site uses the
            <a href="https://bulma.io/" target="_blank">Bulma</a> css framework.</p>
          <p>Icons are from
            <a href="http://fizzed.com/oss/font-mfizz" target="_blank">
              <span class="icon">
                <i class="icon-svg"></i>
              </span>Font Mfizz</a> and
            <a href="http://fontawesome.io/" target="_blank">
              <span class="icon">
                <i class="fab fa-font-awesome"></i>
              </span>Font Awesome</a>
          </p>
          <br>
          <p>
            <small>Last updated Saturday 26th May 2018</small>
          </p>
          <br>
        </div>
        <div class="column">
          <img src="img/made-with-bulma--semiblack.png" alt="" class="bulma">
        </div>
      </div>
    </div>
  </footer>

</body>

</html>`
}

module.exports = footer