const {Router} = require("express");

const TwilioController = require("./twilioController");

const router = Router();

router.post('/sendSms',TwilioController.sendSms)

module.exports = router;