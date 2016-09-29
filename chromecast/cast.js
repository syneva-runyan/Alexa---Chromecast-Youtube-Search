// Since you are unable to cast directly to chromecast without
// using an iOS, android, or Chrome app, this script
// works by sending a socket event to my browers
// with the search result data, and then displays results on chromecast.







// receive script can be grabbed from:
// www.gstatic.com/cast/sdk/libs/receiver/2.0.0/cast_receiver.js

//HEY LOOK, SOMEBODY HAS ALREADY DONE SOMETHING SIMILAR TO THIS FOR US:
// https://github.com/jlmcdonald/yt-chromecast-demo

// Documentation on a customized server can be found at
// https://developers.google.com/cast/docs/custom_receiver

// start reciever
// window.mediaElement = document.getElementById('media');
// window.mediaManager = new cast.receiver.MediaManager(window.mediaElement);
// window.castReceiverManager = cast.receiver.CastReceiverManager.getInstance();
// window.castReceiverManager.start();

// how to end receiver session
// window.castReceiverManager.onSenderDisconnected = function(event) {
//   if(window.castReceiverManager.getSenders().length == 0 &&
//     event.reason == cast.receiver.system.DisconnectReason.REQUESTED_BY_SENDER) {
//       window.close();
//   }
// }

// start youtube
// MimeData data = new MimeData("v=g1LsT1PVjUA", MimeData.TYPE_TEXT);
// mSession.startSession("YouTube", data);