import request from 'browser-request';
import config from 'config';

const BASE_URL = config.classifierUrlRoot;

export function classifyMessage(message, callback) {
  request({
    method: 'GET',
    timeout: 15000,
    url: `${BASE_URL}/classify`,
    qs: {
      message,
    },
    json: true,
  }, (err, res, body) => {
    if (err) {
      return callback(err);
    }
    if (res.status === 400) {
      return callback(body);
    }
    if (res.status === 200) {
      return callback(null, body);
    }
    return callback({
      error: 'An unknown error occured!',
    });
  });
}

