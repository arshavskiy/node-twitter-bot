const Twit = require('twit');
const config = require('./config');
const fs = require('fs');

let T = new Twit(config);

// setInterval(getMePosts, 1000 * 60);

getMePosts();

function getMePosts() {
    let params = {
        q: 'ufo',
        count: 1000
    }
    T.get('search/tweets', params, gotData);

    function gotData(err, data, response) {
        let tweets = data.statuses;
        for (var i = 0; i < tweets.length; i++) {
            console.log('we found ' + i);
            fs.appendFile('./found/ufo.txt', tweets[i].text + '\n', 'utf8', (err) => {
                if (err) throw err;
            });
        }
    }
}