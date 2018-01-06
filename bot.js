const Twit = require('twit');
const config = require('./config');
const fs = require('fs');

let T = new Twit(config);
//
// function getMePosts(t) {
//     let params = {
//         q : t  ,
//         count: 100
//     }
//     T.get('search/tweets', params, gotData);
//
//     function gotData(err, data, response) {
//         let tweets = data.statuses;
//         console.log(data.statuses);
//
//         for (var i = 0, l =  tweets.length; i < l; i++) {
//             console.log('we found ' + i + ' result' + ' ' + tweets[i].text + ' ' +tweets[i].user.created_at);
//             fs.appendFile('./found/ufo.txt', tweets[i].user.name + ' \r: ' + tweets[i].text + '-- \r' + tweets[i].user.created_at + '\r\n', 'utf8', (err) => {
//                 if (err) throw err;
//         });
//         }
//     }
// }
// getMePosts('ufo since:2017-01-01')

setInterval( getMePosts , 1000 * 10);




function getMePosts() {
    let params = {
        q: 'ufo since:2017-01-01',
        count: 100
    }
    T.get('search/tweets', params, gotData);

    function gotData(err, data, response) {
        let tweets = data.statuses;
        console.log(data.statuses);

        for (var i = 0, l =  tweets.length; i < l; i++) {
            console.log('we found ' + i + ' result' + ' ' + tweets[i].text);
            fs.appendFile('./found/ufo.txt', tweets[i].user.name + ' \r: ' + tweets[i].text + '-- \r' + tweets[i].user.created_at + '\r\n', 'utf8', (err) => {
                if (err) throw err;
        });
        }
    }
}
