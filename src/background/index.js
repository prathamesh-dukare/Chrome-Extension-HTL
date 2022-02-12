import img from './icon.png'

console.log("start");
    chrome.notifications.create("initialNoti", {
        type: 'basic',
        iconUrl: img,
        title: 'Its a Reminder!',
        message: 'This is how you will get notified every 20 minutes', 
        priority: 2,
        contextMessage: "To keep your eyes safe"
    });

//eslint-disable-next-line no-undef
setInterval(function () {
  //Creating a badge
  chrome.browserAction.setBadgeText(
    { text: "1" })
    //creating the notification
  let notiName = Math.random().toString();
  chrome.notifications.create(notiName, {
    type: 'basic',
    iconUrl: img,
    title: 'Its a Reminder!',
    eventTime: Date.now(),
    message: 'Look 20 Ft away for 20 Seconds to relax the strain on your eyes',
    priority: 2,
    contextMessage: "To keep your eyes safe"
  });
}, 60000);

console.log("done");