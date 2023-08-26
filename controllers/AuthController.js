const User = require('../models/UsersModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const handleLogin = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res
      .status(400)
      .json({ message: 'Username and password are required.' });

  const foundUser = await User.findOne({ email: email }).exec();
  const id = foundUser._id.toString();
  console.log(id);
  if (!foundUser) return res.sendStatus(401); //Unauthorized
  // evaluate password
  const match = await bcrypt.compare(password, foundUser.password);
  if (match) {
    // create JWTs
    const accessToken = jwt.sign(
      {
        UserInfo: {
          email: foundUser.email,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: '10s' }
    );
    const refreshToken = jwt.sign(
      {
        email: foundUser.email,
      },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: '1d' }
    );
    // Saving refreshToken with current email
    foundUser.refreshToken = refreshToken;
    const result = await foundUser.save();
    console.log(result);
    // Creates Secure Cookie with refresh token
    res.cookie('jwt', refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'None',
      maxAge: 24 * 60 * 60 * 1000,
    });
    // const email = result.email;
    const firstName = result.firstName;
    const lastName = result.lastName;
    res.status(200).json({ id, firstName, lastName, accessToken });
  } else {
    res.sendStatus(401);
  }
};

const handleLogout = async (req, res) => {
  // On client, also delete the accessToken

  const cookies = req.cookies;
  if (!cookies?.jwt) return res.sendStatus(204); //No content
  const refreshToken = cookies.jwt;

  // Is refreshToken in db?
  const foundUser = await User.findOne({ refreshToken }).exec();
  if (!foundUser) {
    res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true });
    return res.sendStatus(204);
  }

  // Delete refreshToken in db
  foundUser.refreshToken = '';
  const result = await foundUser.save();
  console.log(result);

  res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true });
  res.sendStatus(204);
};

const handleRefreshToken = async (req, res) => {
  const cookies = req.cookies;
  if (!cookies?.jwt) return res.sendStatus(401);
  const refreshToken = cookies.jwt;

  const foundUser = await User.findOne({ refreshToken }).exec();
  if (!foundUser) return res.sendStatus(403); //Forbidden
  // evaluate jwt
  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
    if (err || foundUser.email !== decoded.email) return res.sendStatus(403);
    const accessToken = jwt.sign(
      {
        UserInfo: {
          email: decoded.email,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: '10s' }
    );

    const id = foundUser._id.toString();
    res.json({ id, firstName, lastName, accessToken });
  });
};

const handleRegister = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  if (!firstName || !lastName || !email || !password)
    return res
      .status(400)
      .json({ message: 'Username and password are required.' });

  // check for duplicate usernames in the db
  const duplicate = await User.findOne({ email: email }).exec();
  if (duplicate) return res.sendStatus(409); //Conflict

  try {
    //encrypt the password
    const hashedPwd = await bcrypt.hash(password, 10);

    //create and store the new email
    const result = await User.create({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: hashedPwd,
    });

    console.log(result);

    res.status(201).json({ success: `New email ${email} created!` });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  handleLogin,
  handleLogout,
  handleRefreshToken,
  handleRegister,
};
