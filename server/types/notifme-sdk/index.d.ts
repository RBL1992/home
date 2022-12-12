// The following line is needed to successfully import the notifme-sdk module into the server/config/notify.js file
// This package is is behaving like TypeScript so we must explicitly declare the module. Not sure why it's behaving like TypeScript but this makes it work :)

declare module 'notifme-sdk';
