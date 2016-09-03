---
layout: post
title:  Environment Variables
date:   2015-10-17
---

Environment Variables are variables that are defined outside of your code and allow you define different variables in local, production, and other types of environments. This is especially useful for things you may not want others to see, like API keys, passwords, your database uri, and you probably do not want your Amazon Web Services secret getting lost in the net. Environment variables protect you from all of the above. It allows you the ability to upload and open source your code to GitHub without worrying about people hacking your databases. This tutorial will save your ass with how to do this with Heroku.

Step one, in your app’s directory, create a new file called `.env`. Also, if you do not have one already, create a `.gitignore` file and type in the `.env`. This will allow you to push your app to GitHub without all your important, secret information. 

Step two, install the Heroku toolbelt. Go to [https://toolbelt.heroku.com](https://toolbelt.heroku.com) and download the CLI. Once installed, follow the instructions to login and create your app. Add the variables to your application:

{% highlight bash %}
heroku config:set GITHUB_USERNAME=owebboy
{% endhighlight %}


You can now use these variables in your app, like in node.js:

{% highlight javascript %}
var github_username = process.env.GITHUB_USERNAME;
{% endhighlight %}


By the way, you can find the current environment by using `process.env.NODE_ENV`. Heroku will automatically change the environment to production when deployed. Back on your local server, type in `heroku local` to run your app and make the environment variables work locally. If all goes well, the variables should work just like normal variables. If it works, then you can deploy and run your application on heroku.