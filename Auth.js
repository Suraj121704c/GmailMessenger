const { google } = require('googleapis');
const credentials = require('./Client_secret.json');
const express = require('express');

const app = express();

app.get("/google/callback" , (req,res) => {
    console.log(req.query)
    res.send("booke")
})



const { client_secret, client_id, redirect_uris } = credentials.web;
const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);

const GMAIL_SCOPES = ['https://www.googleapis.com/auth/gmail.send'];

const url = oAuth2Client.generateAuthUrl({
  access_type: 'offline',
  prompt: 'consent',
  scope: GMAIL_SCOPES,
});

console.log('Authorize this app by visiting this url:', url);


app.listen(2342 , () => {
    console.log('2342')
})

// {
//   code: '4/0AbUR2VP-uxbdsA_6e1a4YZToBTWlAPGQE17O8UcD7kk8NT60_HGxc5PzwkawPrCmfIFtQA',
//   scope: 'https://www.googleapis.com/auth/gmail.send'
// }