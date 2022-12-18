// Must use .default in the import statement below because the index.js file in this package uses exports.default instead of module.exports
// The following line also works because of the index.d.ts file located in server/types/notifme-sdk. notifme-sdk is behaving like a TypeScript module so we need to explicitly declare the module in a d.ts file in a folder the same name of the module. Not sure why this is behaving like TypeScript but this makes it work :)
const NotifmeSdk = require('notifme-sdk').default;

const notifmeSdk = new NotifmeSdk({
  useNotificationCatcher: true // <= this sends all your notifications to the catcher running on port 1025. Use npm i to install notification-catcher then start the server by running 'notification-catcher' in the terminal. Notification-catcher will run at http://localhost:1080/ and display any notifications sent from your local machine
})
notifmeSdk
  .send({email: {
    from: 'me@example.com',
    to: 'john@example.com',
    subject: 'Hi John',
    html: '<h1>Hello John! How are you?</h1>'
  }})
  .then(console.log)