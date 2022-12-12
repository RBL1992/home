// Must use require('<module-name>').default below because the index.js file in this package uses exports.default instead of module.exports
const NotifmeSdk = require('notifme-sdk').default;

const notifmeSdk = new NotifmeSdk({
  useNotificationCatcher: true // <= this sends all your notifications to the catcher running on port 1025
})
notifmeSdk
  .send({sms: {from: '+15000000000', to: '+15000000001', text: 'Hello, how are you?'}})
  .then(console.log)
