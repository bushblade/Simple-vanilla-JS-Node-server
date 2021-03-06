const state = {
  icons: ["mfizz icon-html5", "mfizz icon-css3", "mfizz icon-javascript", "fab fa-linux fa-lg", "fab fa-linode fa-lg", "mfizz icon-apache", "mfizz icon-nodejs"]
}

const render = () => (`
<!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Bushblade Projects</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.1/css/bulma.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-mfizz/2.4.1/font-mfizz.css">
    <link href="https://use.fontawesome.com/releases/v5.0.8/css/all.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Source+Code+Pro:400,700" rel="stylesheet">
    <link rel="icon" href="img/favicon-code.ico">
    <link rel="stylesheet" href="style.css">
  
  </head>
  
  <body>
    <section class="hero is-light">
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column is-two-thirds">
              <h1 class="title">Bushblade Projects</h1>
              <h2 class="subtitle">The web development learning journey of Will Adams</h2>
              ${state.icons.reduce((str, icon) => str.concat(`<i class="${icon}"></i> `),'')}
            </div>
            <div class="column is-one-third">
            </div>
          </div>
        </div>
      </div>      
    </section>
  `)

module.exports = {render}