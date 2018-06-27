var express = require('express');
var router = express.Router();
const slack = require('@slack/client');
const RTMClient = slack.RTMClient;
/* GET users listing. */
router.get('/', function(req, res, next) {
  let project_name = req.query.project_name;
  let namespace_name = req.query.namespace_name;
  let service_name = req.query.service_name;
  let done = req.query.done;
  // An access token (from your Slack app or custom integration - usually xoxb)
  const token = "xoxb-389035884822-388093118016-h0n7PLXOjJr6L1yFZwov7LAa";

  // The client is initialized and then started to get an active connection to the platform
  const rtm = new RTMClient(token);
  rtm.start();

  // This argument can be a channel ID, a DM ID, a MPDM ID, or a group ID
  const conversationId = 'CBE302QKA';

  if(done) {
    // The RTM client can send simple string messages
    rtm.sendMessage(`${project_name}#${namespace_name}#${service_name}: build xong!`, conversationId)
    .then((res) => {
      // `res` contains information about the posted message
      console.log('Message sent: ', res.ts);
    })
    .catch(console.error);
  } else {
    // The RTM client can send simple string messages
    rtm.sendMessage(`${project_name}#${namespace_name}#${service_name}: bắt đầu build!`, conversationId)
    .then((res) => {
      // `res` contains information about the posted message
      console.log('Message sent: ', res.ts);
    })
    .catch(console.error);
  }
  res.send('webhook HIHI');
});

module.exports = router;
