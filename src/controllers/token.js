const {signIn} = require('../services/token.service');

module.exports = (req, res) => {
  try {
    const {user, password} = req.body || {};

    const token = signIn(user, password);

    res.json({token});
  } catch ({message, status = 401}) {
    res.status(status)
      .json({message});
  }
};