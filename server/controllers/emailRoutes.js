const router = require('express').Router();
const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

router.put('/sendEmailTest', async (req, res) => {

    const msg = {
        to: req.body.to, // The email recepient
        from: req.body.from, // The app's verified sender (our email account)
        subject: `This is an email test`, // Subject of the email
        html: `<strong>You just added a ${req.body.featureCategory} feature!</strong>`, // Content of the email
    }

    console.log(`The req.body is ${JSON.stringify(req.body)}`);
    console.log(`The msg is ${JSON.stringify(msg)}`);

    sgMail
        .send(msg)
        .then(() => {
            res.status(201).json({ message: 'Email sent' })
        })
        .catch((error) => {
            console.error(error)
            res.status(500).json({
                message: "Error sending email" // Add actual error content from the error param if possible
            })
        })
})

router.put('/sendMonthEmail', async (req, res) => {

    const msg = {
        to: req.body.to, // The email recepient
        from: req.body.from, // The app's verified sender (our email account)
        subject: `You're a month out from your next ${req.body.featureRoom} ${req.body.featureCategory} maintenance date!`, // Subject of the email
        html: `<strong>There is a month until your next ${req.body.featureRoom} ${req.body.featureCategory} maintenance date. Make sure you have a plan to get your ${req.body.featureCategory} maintained. Don't forget to log in to the home app and change your last maintenance date after your ${req.body.featureCategory} feature is maintained!</strong>`, // Content of the email
    }

    sgMail
        .send(msg)
        .then(() => {
            res.status(201).json({ message: 'Email sent' })
        })
        .catch((error) => {
            console.log(error);
            res.status(500).json({
                message: "Error sending email"
            })
        })
})

router.put('/sendWeekEmail', async (req, res) => {

    const msg = {
        to: req.body.to, // The email recepient
        from: req.body.from, // The app's verified sender (our email account)
        subject: `You're a week out from your next ${req.body.featureRoom} ${req.body.featureCategory} maintenance date!`, // Subject of the email
        html: `<strong>There is a week until your next ${req.body.featureRoom} ${req.body.featureCategory} maintenance date. Take action to ensure your ${req.body.featureCategory} feature is maintained. Don't forget to log in to the home app and change your last maintenance date after your ${req.body.featureCategory} feature is maintained!</strong>`, // Content of the email
    }

    sgMail
        .send(msg)
        .then(() => {
            res.status(201).json({ message: 'Email sent' })
        })
        .catch((error) => {
            console.log(error);
            res.status(500).json({
                message: "Error sending email"
            })
        })
})

router.put('/sendDayOfEmail', async (req, res) => {

    const msg = {
        to: req.body.to, // The email recepient
        from: req.body.from, // The app's verified sender (our email account)
        subject: `Today is your next ${req.body.featureRoom} ${req.body.featureCategory} maintenance date!`, // Subject of the email
        html: `<strong>Your next ${req.body.featureRoom} ${req.body.featureCategory} maintenance date is today! Take action today to keep your ${req.body.featureCategory} feature in great shape! Don't forget to log in to the home app and change your last maintenance date after your ${req.body.featureCategory} feature is maintained!</strong>`, // Content of the email
    }

    sgMail
        .send(msg)
        .then(() => {
            res.status(201).json({ message: 'Email sent' })
        })
        .catch((error) => {
            console.log(error);
            res.status(500).json({
                message: "Error sending email"
            })
        })
})

module.exports = router
