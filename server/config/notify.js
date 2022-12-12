// Must use require('<module-name>').default below because the index.js file in this package uses exports.default instead of module.exports
// The following line also works because of the index.d.ts file located in server/types/notifme-sdk. It's behaving like a TypeScript module so we need to explicitly declare the module in a d.ts file in a folder the same name of the module. Not sure why this is behaving like TypeScript but this makes it work :)
const NotifmeSdk = require('notifme-sdk').default;

const notifmeSdk = new NotifmeSdk({
  useNotificationCatcher: true // <= this sends all your notifications to the catcher running on port 1025. 
})
notifmeSdk
  .send({sms: {from: '+15000000000', to: '+15000000001', text: 'Hello, how are you?'}})
  .then(console.log)
