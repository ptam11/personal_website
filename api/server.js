// const express = require('express');
// const cors = require('cors');
// const twilio = require('twilio');
// const serverless = require('serverless-http');
// require('dotenv').config();

// // Test credentials
// const twilioAccountSid = process.env.twilioAccountSid
// const twilioAuthToken = process.env.twilioAuthToken
// const twilioPhoneNumber = process.env.twilioPhoneNumber 

// const client = new twilio(twilioAccountSid, twilioAuthToken);

// const app = express();
// app.use(cors());

// const router = new express.Router();


// router.get('/api', (req, res) => {
//   res.send('welcome express')
// });

// router.post('/api/send-text', async function(req, res) {
//   const { recipient, textMessage} = req.query
//   let msg;

//   try {
//     msg = await client.messages.create({
//       body: textMessage,
//       to: '+1' + recipient,
//       from: twilioPhoneNumber
//     })
//     console.log("msg", msg)
//     return res.json(msg)
//   } catch (err) {
//     return res.status(err.status).json({
//       "errorMessage": err.message
//     })
//   }
// })

// router.post('/api/send-call', async function(req, res) {
//   const { recipient} = req.query
//   let call;

//   try {
//     call = await client.calls.create({
//       url: 'http://demo.twilio.com/docs/voice.xml',
//       to: '+1' + recipient,
//       from: twilioPhoneNumber
//     })
//     console.log("call", call)
//     return res.json(call)
//   } catch (err) {
//     return res.status(err.status).json({
//       "errorMessage": err.message
//     })
//   }
// })

// app.use('/.netlify/functions/server', router);

// module.exports = app;
// module.exports.handler = serverless(app)
