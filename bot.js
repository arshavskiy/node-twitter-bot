const Twit = require('twit');
const config = require('./config');
const fs = require('fs');

let T = new Twit(config);

setInterval(getMePosts, 1000 * 60);

getMePosts();

function getMePosts() {
    let params = {
        q: 'ufo',
        count: 100
    }
    T.get('search/tweets', params, gotData);

    function gotData(err, data, response) {
        let tweets = data.statuses;
        for (var i = 0, l =  tweets.length; i < l; i++) {
            console.log('we found ' + i + ' result');
            fs.appendFile('./found/ufo.html', tweets[i].text + '\r\n', 'utf8', (err) => {
                if (err) throw err;
            });
        }
    }
}

