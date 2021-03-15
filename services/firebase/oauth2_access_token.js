const https = require('https');
const { google } = require('googleapis');

const PROJECT_ID = 'cndvqa';
const HOST = 'fcm.googleapis.com';
const PATH = '/v1/projects/' + PROJECT_ID + '/messages:send';
const MESSAGING_SCOPE = 'https://www.googleapis.com/auth/firebase.messaging';
const SCOPES = [MESSAGING_SCOPE];

/**
 * Get a valid access token.
 */
function getAccessToken() {
    return new Promise(function(resolve, reject) {
       const key  = require('./service-account.json');
       const jwtClient = new google.auth.JWT(
           key.client_email,
           null,
           key.private_key,
           SCOPES,
           null
       );
       jwtClient.authorize(function(err, tokens){
           if (err) {
               reject(err);
               return;
           }
           resolve(tokens.access_token);
       });
    });
}

module.exports = { getAccessToken };