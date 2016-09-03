---
layout: post
title: Starting out with Express.js
author: Oliver Pope
category: express.js
---

[Express.js](<expressjs.com >) is a simple and easy to use web framework for coding and building the web using [node.js](<http://nodejs.org >). The easiest way to get started is by install the command line tool [express-generator](<https://github.com/expressjs/generator >).

Building the express.js application
-----------------------------------

You can install it by running npm:

  {% highlight bash %}
  $ npm install -g express-generator
  {% endhighlight %}
  

Then go into your project directory (e.g `~/Sites`) and build your project with the generator:

  {% highlight bash %}
  $ express sample-file
  $ cd sample-file # change current directory to file just created
  $ npm install # install dependencies
  $ npm start # start node app
  {% endhighlight %}

Understanding the code
----------------------

Once you have a running application, open up the `routes` folder and go to `index.js`. This is the file that identifies all the routes. The file should look like this:


  {% highlight js %}
  var express = require('express');
  var router = express.Router();
  /* GET home page. */
  router.get('/', function(req, res, next) {
      res.render('index', { title: 'Express' });
  });
  module.exports = router;
  {% endhighlight %}

If you go to `localhost:3000` in your browser you should notice that the title is named “Express”. This is `res.render` in action, he will find the `view` for the function and use a templating engine ([handlebars.js](<http://handlebarsjs.com>), [embedded.js](<http://www.embeddedjs.com/ >), and [jade](<http://jade-lang.com >)) to make your application pass information between the client and the server. There are many other ways of accomplishing this, but this way is the most easy and fun way to learn back-end java-scripting.

Making your app pass info from the server
-----------------------------------------

You can easily make your server pass data to the client. Let’s say you want to get the date when the server returned the user’s request, simply pass a

Date constructor and you are set:

  {% highlight js %}
  var express = require('express');
  var router = express.Router();
  /* GET home page. */
  router.get('/', function(req, res, next) {
      res.render('index', { title: new Date });
  });
  module.exports = router;
  {% endhighlight %}

Making your app pass data to the server
---------------------------------------

In your `views` directory, find `index.jade` and create a form:

  {% highlight jade %}
  extends layout

  block content
    h1= title
    p Welcome to #{title}

    h2 update title
    form(name="/", method="post")
      input(type="text", name="title" placeholder="title")
      input(type="submit", value="go")
  {% endhighlight %}

Then in `index.js`, add a new method to the `router`, called `POST`:

  {% highlight js %}
  var express = require('express');
  var router = express.Router();

  /* GET home page. */
  router.get('/', function(req, res, next) {
      res.render('index', { title: new Date });
  });

  /* POST home page. */
  router.post('/', function (req, res) {
      res.render('index', { title: req.body.title });
  });

  module.exports = router;
  {% endhighlight %}
