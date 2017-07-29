const Twit = require('twit');
const config = require('./config');

let T = new Twit(config);

// Setting up a user strem
let stream = T.stream('user');

// Anytime someone follows me
stream.on('follow', followed);

function followed(event) {
    let name = event.source.name;
    let screenName = event.souce.screen_name;
    tweetIt('.@' + screenName + ' hello freindddd');
}

function tweetIt(text) {
    let tweet = {
        status: text
    }
    T.post('statuses/update', tweet, tweeted);

    function tweeted(err, data, response) {
        if (err) {
            console.log('something went wrong' + err)
        } else {
            console.log("folower found");
        }
    }
});

}