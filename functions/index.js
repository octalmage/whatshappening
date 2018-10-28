const functions = require('firebase-functions');
const FeedParser = require('feedparser');
const request = require('request');

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.Check = functions.https.onRequest((request, response) => {
  return pullFeed('http://www.austintexas.gov/department/events/1807/rss.xml')
    .then(feed => console.log(feed) || response.send(feed));
});



const pullFeed = (url) => {
  return new Promise((resolve, reject) => {
    const req = request(url);
    const feedparser = new FeedParser();


    req.on('error', (error) => {
      reject(error);
    });

    req.on('response', function (res) {
      var stream = this; // `this` is `req`, which is a stream

      if (res.statusCode !== 200) {
        this.emit('error', new Error('Bad status code'));
      }
      else {
        stream.pipe(feedparser);
      }
    });

    feedparser.on('error', (error) => {
      reject(error);
    });
    feedparser.on('readable', function() {
      // This is where the action is!
      let stream = this; // `this` is `feedparser`, which is a stream
      let meta = this.meta; // **NOTE** the "meta" is always available in the context of the feedparser instance
      let item;
      let items = [];
      item = stream.read();
      while (item) {
        console.log(item);
        items.push(item);
        item = stream.read()
      }
      resolve(items);
    });
  });
}
