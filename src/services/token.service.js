const jwt = require('jsonwebtoken');

const users = [
  {
    user: 'Numenu',
    password: '123123'
  },
];

const signIn = (user, password) => {
  const auth = users.reduce((acc, next) => {
    return acc || next.user === user && next.password === password;
  }, false);

  if(!auth) {
    throw new Error('Invalid user or password.');
  }

  const token = jwt.sign(user, password);

  return token;
};

exports.signIn = signIn;
