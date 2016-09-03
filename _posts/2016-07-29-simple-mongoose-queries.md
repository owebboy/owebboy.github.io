---
layout: post
title: 'Simple MongoDB queries in Node.js'
author: Oliver Pope
category: code
tags: [nodejs, mongoose]
---

With [node.js](//nodejs.org), you can build amazingly complex server-side applications that are easy to develop in a very quick time. The most important part of the development process is picking the right database architecture, and with `node.js` the perfect solution is MongoDB using the module [mongoose.js](http://mongoosejs.com/).

## Schemas
To save data to mongodb, it must be a part of a schema, defining a schema is very simple:

{% highlight js %}
var mongoose = require('mongoose');

// Schema
var Channel = mongoose.model('channel', {
  name: String,
  number: Number
});

{% endhighlight %}

A schema is a JavaScript object that defines how you will save your documents. The value written as `String` or `Number` signifies which type of data you will be using. A schema is basically the template of the document.

## Creating a single document
To create a single document in the Schema "Channel", use the mongoose `create` function as so:

{% highlight js %}
Channel.create({
  name: 'National Geographic',
  number: 208
}, function(err, channel) {
  if (err) return next(err);
  return console.log(channel);
});
//-> { _id: 001, name: 'National Geographic', number: 208 }
{% endhighlight %}

## Finding a single document
To find a single document, use the `findOne` function along with a simple query function such as this:
{% highlight js %}
Channel.findOne({ name: 'National Geographic' }, function(err, channel) {
  if (err) return next(err);
  return console.log(channel);
});
//-> { _id: 001, name: 'National Geographic', number: 208 }
{% endhighlight %}

## Find and update a single document
To find and update a single document use the `findOneAndUpdate` function to use a query to find a document and add the data to change:
{% highlight js %}
Channel.findOneAndUpdate({ name: 'National Geographic' },
{ channel: 209}, function(err, channel) {
  if (err) return next(err);
  return console.log(channel);
});
//-> { _id: 001, name: 'National Geographic', number: 209 }
{% endhighlight %}

## Find and remove a single document
To find and remove a single document use the `findOneAndRemove` document. This will use a query to find a document and then delete it from the db.
{% highlight js %}
Channel.findOneAndRemove({ name: 'National Geographic' }, function(err, doc, result) {
  // error: any errors that occurred
  // doc: the document before updates are applied if `new: false`, or after updates if `new = true`
  // result: [raw result from the MongoDB driver](http://mongodb.github.io/node-mongodb-native/2.0/api/Collection.html#findAndModify)
});
{% endhighlight %}

## Find a collection of documents
To find a collection of documents, use the `find` function:
{% highlight js %}
Channel.find({}, function(err, channels) {
  if (err) return next(err);
  return console.log(channels);
});
//-> [{ _id: 001, name: 'National Geographic', number: 209 }, { _id: 002, name: 'Disney Channel', number: 290 }, { _id: 003, name: 'Disney Channel', number: 202 }]
{% endhighlight %}

NOTE: `{}` will return all documents in a particular collection, as there are no arguments.
