const TwilioService = require("../infrastructure/service/Twilio");
class TwilioController {
  sendSms = async (req, res) => {
    const body = req.body;
    const response = await TwilioService.sendSms(body);
    res.send(response);
  };
}

module.exports = new TwilioController();
