var http = require("http");
var fs = require("fs");
const readline = require('readline');
const {google} = require('googleapis');

const port = 3100

var server=http.createServer(doThings)

// If modifying these scopes, delete token.json.
const SCOPES = ['https://www.googleapis.com/auth/gmail.readonly'];
// The file token.json stores the user's access and refresh tokens, and is
// created automatically when the authorization flow completes for the first
// time.
const TOKEN_PATH = 'token.json';

// Load client secrets from a local file.
fs.readFile('credentials.json', (err, content) => {
  if (err) return console.log('Error loading client secret file:', err);
  // Authorize a client with credentials, then call the Gmail API.
  authorize(JSON.parse(content), listLabels);
});

/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
 */
function authorize(credentials, callback) {
  const {client_secret, client_id, redirect_uris} = credentials.installed;
  const oAuth2Client = new google.auth.OAuth2(
      client_id, client_secret, redirect_uris[0]);

  // Check if we have previously stored a token.
  fs.readFile(TOKEN_PATH, (err, token) => {
    if (err) return getNewToken(oAuth2Client, callback);
    oAuth2Client.setCredentials(JSON.parse(token));
    callback(oAuth2Client);
  });
}

function doThings(req, res){

    var path = req.url;

    // Depending on the URL, display a different HTML file.
    switch (path) {

    case "/":
      return displayRoot(path, req, res);

    default:
      return displayRoot(path, req, res);
    }
}

function displayRoot(url, req, res)
{
    fs.readFile(`${__dirname}/index.html`, function(err, data){
        res.writeHead(200, {
            "content-type":"text/html"
        })
    res.end(data)
    })
}

server.listen(port, function() {
    console.log("Server is listening on PORT: " + port);
  });