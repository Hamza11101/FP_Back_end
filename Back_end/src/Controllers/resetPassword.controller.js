const bcrypt = require('bcrypt');
const Token = require('../Models/token.model')
const User = require('../Models/User.model');

exports.resetPassword = async (req, res) => {
    let passwordResetToken = await Token.findOne({ token: req.body.token });
    if (!passwordResetToken) {
      res.status(400).json({ message: "Invalid or expired password reset link" });
    } else {
      const currentDate = new Date();
      const expireTime= new Date(passwordResetToken.createdAt)
      const diff =currentDate - expireTime
      const seconds = Math.floor( diff/1000);
      if (seconds < 900){
        const bcryptSalt = process.env.BCRYPT_SALT;
        const hash = await bcrypt.hash(req.body.password, Number(bcryptSalt));
        await User.updateOne(
          { _id: passwordResetToken.userId },
          { $set: { password: hash } },
          { new: true }
        );
        const user = await User.findById(passwordResetToken.userId);
        await passwordResetToken.deleteOne();
        res.status(200).json({message : 'Successfully reseted'})
      } else {
        await passwordResetToken.deleteOne();
        res.status(401).json({message : 'Invalid or expired password reset link'})
      }
    }
  }