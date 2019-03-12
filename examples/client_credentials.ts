import fetchMwOAuth2 from 'fetch-mw-oauth2';

// If on Node.js
// @ts-ignore
global.fetch = require("node-fetch");
// @ts-ignore
global.Request = require("node-fetch").Request;

(async () => {

  const newFetch = fetchMwOAuth2({
    clientId: '...',
    clientSecret: '...',
    grantType: 'client_credentials',
    tokenEndpoint: 'https://auth-server.example.org/token',
    scope: ['foo', 'bar'],
  });

  const response = await newFetch('https://resource-server.example.org');
  console.log(response.status);

})();
