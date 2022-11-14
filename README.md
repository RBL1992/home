# home 

## Table of contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)


## Description

Are you a homeowner? Have you ever been overwhelmed by the plethora of items in and around your home to maintain? Have you ever lost track of your home maintenance schedule? We understand this challenge and asked ourselves, "How can we make this process simpler?" Enter, the home App!

This app allows you to enter items in your home that needs maintenance (hereby described as home features or features) and we will show you a date and a visible cue that lets you know when your home feature should be maintained next. Never fall behind on your maintenance schedule again! Simply access our site to quickly determine when you should make arrangements for your next round of home maintenance. 

But we didn't stop there! In addition to helping you stay on track with your home maintenance schedule, we want to make it easier for you to accomplish this maintenance. So every time you enter a home feature on the app, you will receive Rewards Points! These points can be used to acquire rewards such as:
- 5% off your next Home Depot purchase
- 5% off your next purchase of Kitchen Aid Fridge Filter
- Plus more!

Join today and keep your home maintenance schedule organized and simple!

This app was made with a React frontend utilizing Tailwind CSS. The backend was built with MongoDB, along with GraphQL and Express.js.


## Installation

In order to use our app, simply go to the following link: https://calm-retreat-29451.herokuapp.com/

If by any chance you wish to deploy this app on your local machine, use the following steps (you must have MongoDB installed on your machine):
- Clone this repo to your machine
- Install all dependencies using `npm i` at the repo root
- Seed the rewards database using `npm run seed` at the repo root
- Start the app using `npm run start` or a similar command

## Usage

When the app is deployed you will begin on the landing page. Here you can see the navigation bar, an overview of our app, and a Sign up button and a Login button.

![Gif of landing page](./assets/Gif%20of%20Landing%20Page.gif)

Click the Login button or the Sign up button to enter. You are then taken to your "Home" page where you will see a list of the home features you have entered. Create your first home feature or add a new one by clicking the Add Feature button. This will bring up a modal where you can enter the relevant information for a feature. When you are All Done, you are returned to the Home page with your new home feature present. Note that the date displayed is a future date, calculated using the last maintenance date you provided and our expert home maintenance recommendation.

![Gif of creating home page and creating a feature](./assets/Gif%20of%20Home%20page.gif)

To edit a feature, click the gear icon on the feature's card. To delete a feature, click the trash bin icon.

Click the icon at the top right of the page so see a dropdown menu. You have options to see your Profile page or log out. Click the Your Profile button to go to the Profile page. In the left card you will see your user information. On the right card you will see your Usable Rewards Points that can be used to redeem rewards and your Lifetime Rewards Points which totals all of the points you have earned in as a user. 

![Gif of Profile page](./assets/Gif%20of%20Profile%20page.gif)

To view the Rewards page, click the View Rewards button on the Profile page or click the Rewards Market button in the nav bar. Here you will see a list of all rewards available and their cost. If you have enough points to purchase a reward, the reward will be purple. If you can not yet afford a reward, it will be grey. To redeem a reward, click on the check mark to the right of it.

![Gif of redeeming rewards](./assets/Git%20of%20redeeming%20rewards.gif)

Enjoy the app!


## Credits

Brought to you by:

- Roy Logan: [RBL1992](https://github.com/RBL1992)
- Devan Parkison: [park-d](https://github.com/park-d)
- Jackson Myhre: [jack421myhre](https://github.com/jack421myhre)
- Rob Thompson: [Rob-Thompson-Git](https://github.com/Rob-Thompson-Git)
- Jared Johnson: [nolacoder](https://github.com/nolacoder)

## License

MIT License

Copyright (c) 2022 Couch Potato LLC

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
