const Twit = require('twit');
const config = require('./config');
const request = require('ajax-request');

let T = new Twit(config);

setInterval(twitIt, 1000 * 60*60);

function twitIt() {
    request('http://api.icndb.com/jokes/random/', function (err, res, body) {
        let one = JSON.parse(body);
        let joke = one.value.joke;

        let tweet = {
            status: joke + '\n nodejs +icndb.com/api/ ',
        }

        T.post('statuses/update', tweet, tweeted);

        function tweeted(err, data, response) {
            if (err) {
                console.log('something went wrong' + err)
            } else {
                console.log("Chuck Norris happy");
            }
        }
    });

}