var _ = require('lodash');
const util = (options) => {
    let defaultOptions = {
        gzip: true,
        method: 'GET',
        timeout: 5000,
        headers: {
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
            'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1'
        },
        jar: true
    };
    return _.extend(defaultOptions, options);
};
const Util = require('util');

const request = require('request').defaults({ jar: true });

const AUTHORIZATION = 'Bearer AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA';
const API_GUEST = 'https://api.twitter.com/1.1/guest/activate.json';
const API_TIMELINE = 'https://api.twitter.com/2/timeline/conversation/%s.json?tweet_mode=extended'

/**
 * Get twitter ID
 *
 * @param {string} url
 * @return {string}
 */
exports.getID = (url) => {
    var regex = /twitter\.com\/[^/]+\/status\/(\d+)/;
    var matches = regex.exec(url);
    return matches && matches[1];
};

/**
 * Get twitter Info
 *
 * @param {string} url
 * @param {Object} options
 * @param {Function(Error, Object)} callback
 */
exports.getInfo = (url, options, callback) => {
    if (typeof options === 'function') callback = options, options = {};
    const id = exports.getID(url);
    if (id) {
        req({
            url: API_GUEST,
            method: 'POST',
        }, options, (error, body) => {
            if (error) {
                callback(error);
            } else {
                let guest_token;
                try {
                    guest_token = JSON.parse(body).guest_token;
                } catch (err) {
                    return callback(new Error(errInfo));
                }
                req({
                    url: Util.format(API_TIMELINE, id),
                    method: 'GET',
                    headers: {
                        'x-guest-token': guest_token
                    }
                }, options, (error, body) => {
                    if (error) {
                        callback(error);
                    } else {
                        try {
                            const info = JSON.parse(body);
                            callback(null, {
                                title: info['globalObjects']['tweets'][id]['full_text'],
                                thumbnail: info['globalObjects']['tweets'][id]['extended_entities']['media'][0]['media_url_https'],
                                duration_ms: info['globalObjects']['tweets'][id]['extended_entities']['media'][0]['video_info']['duration_millis'],
                                variants: info['globalObjects']['tweets'][id]['extended_entities']['media'][0]['video_info']['variants']
                            });
                        } catch (err) {
                            return callback(new Error("Unable to fetch data from this URL!"));
                        }
                    }
                });
            }
        });
    } else {
        callback(new Error('Not a twitter URL'));
    }
}

function req(opt, options, callback) {
    opt = _.defaultsDeep({
        headers: {
            'authorization': AUTHORIZATION
        }
    }, opt, options);
    request(opt, (error, response, body) => {
        if (error) {
            callback(error);
        } else {
            if (response.statusCode == 200 && body) {
                callback(null, body);
            } else {
                callback(new Error('twitter API error'));
            }
        }
    });
}