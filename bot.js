const Twit = require('twit');
const config = require('./config');
const fs = require('fs');

let T = new Twit(config);

setInterval(getMePosts, 1000 * 10);

function getMePosts() {
    let params = {
        q: 'putin',
        count: 100
    }

    T.get('search/tweets', params, gotData);

    function gotData(err, data, response) {

        let tweets = data.statuses;

        for (var i = 0; i < tweets.length; i++) {
            fs.appendFile('putin.txt', tweets[i].text + '\n', (err) => {
                if (err) throw err;
            });
        }
    }
}