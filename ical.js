// const ical = require("ical-generator");
// const http = require("http");
// const cal = ical({ domain: "github.com", name: "my first iCal" });
// const moment = require("moment");

// // overwrite domain
// cal.domain("sebbo.net");

// cal.createEvent({
//   start: moment(),
//   end: moment().add(2, "hour"),
//   summary: "Example Event",
//   description: "It works ;)",
//   location: "my room",
//   url: "http://sebbo.net/",
// });

// http
//   .createServer(function (req, res) {
//     cal.serve(res);
//   })
//   .listen(3000, "127.0.0.1", function () {
//     console.log("Server running at http://127.0.0.1:3000/");
//   });

var iCalEvent = require("icalevent");

var event = new iCalEvent({
  uid: 9873647,
  offset: new Date().getTimezoneOffset(),
  method: "request",
  status: "confirmed",
  attendees: [
    {
      name: "Cephas Chapa",
      email: "cephaschapa@gmail.com",
    },
    {
      name: "cjr",
      email: "cephaschapa@gmail.com",
    },
  ],
  start: "2020-06-01T02:00:00-05:00",
  end: "2020-06-01T02:30:00-05:00",
  timezone: "US/Central",
  summary: "Meetings",
  description: "MoGE.",
  location: "Casa blanca",
  organizer: {
    name: "Cephas Chapa",
    email: "cephaschapa@gmail.com",
  },
  url: "http://google.com/search?q=nacho+libre",
});

let calenderFile = event.toFile();
console.log(event.toFile());

// let content = `${calenderFile}`;

// let message = {
//     from: 'sender@example.com',
//     to: 'recipient@example.com',
//     subject: 'Appointment',
//     text: 'Please see the attached appointment',
//     icalEvent: {
//         filename: 'invitation.ics',
//         method: 'request',
//         content: content
//     }
// };
