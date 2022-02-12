import img from './icon.png'

console.log("hello");


//eslint-disable-next-line no-undef
let notiName = Math.random().toString();
chrome.notifications.create(notiName, {
  type: 'basic',
  iconUrl: img,
  title: 'Its a Reminder!',
  message: 'Look 20 Ft away for 20 Seconds to relax the strain on your eyes',
  priority: 2,
  contextMessage: "To keep your eyes safe"
});

console.log("done");