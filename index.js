// THIS IS NOT exactly how we'll use jwt. 
// We'll use it in the context of login. 
// But for now, we'll use it to simply generate a token.

const jwt = require('jsonwebtoken');
const { JWT_SECRET = '234709asefiaserh181349' } = process.env;

const user = {
  "name": "Ada Lovelace",
  "claimToFame": "First Programmer",
  "lived": "10 December 1815 – 27 November 1852"
}

console.log('>>>>>>>>> user', user);