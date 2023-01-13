// THIS IS NOT exactly how we'll use jwt. 
// We'll use it in the context of login. 
// But for now, we'll use it to simply generate a token.

const jwt = require('jsonwebtoken');
const { JWT_SECRET = '234709asefiaserh181349' } = process.env; // sometimes accessible via process.env.JWT_SECRET

const user = {
  "name": "Ada Lovelace",
  "claimToFame": "First Programmer",
  "lived": "10 December 1815 – 27 November 1852"
}

console.log('>>>>>>>>> user', user);

/*
Authentication - The process of verifying who you are is who you say you are 
first check username and password , and if it matches, we will send back a success message and a token that they can use later to log in

analogy - paying for your hotel room, then showing your ID to obtain a key card for access
This process can result in success or a 401 Unauthorized

Authorization - Makiing sure whatever user is making the request is them same user that logged in previously 
during the verification of login
analogy - using the key card (JWT!) again to access your hote; toom instead of going to the front desk 

Environment Variables -- to hold sensitive information 
const jwtSecret = process.env.SECRET
create a file called .env 
add .env to gitignore file 
add a line to the .env file SECRET =noOneWillGetAccess
^^ this will allow us to commit safely 

to install, 'npm install dotenv' (package to use environment variables)
at the top of the file...
require('dotenv').config()
>>>>> this would add variables to the Node's global process.env object 

The three parts of (JSON Web Tokens) JWTs?
Header : Contains info about algorithm and type
Payload: data that is encrypted 
Signature: contains the JWT secret stroed in the .env file 

Twp functions that are bilit into the jwt to authenticate and authorize 

jwt.sign().... - Authentication
once a user has authenticated via username/pw... then we grant a valid tolem that has an encrpted signature to verify that they are who they say they are for future requests.. we are actually:

-encoiding a payload 
-encrypting a signature 
this will returna  token for us! 

jwt.verify - Authorization
in order to know if we can trust the request, we need to verify the validity of the token ... we are actually:

-decrypt the signature
-check the expiration
-decode the payload
-return the payload 
*/


// create a token (Authenticating a user- this takes two arguments, the user object and the secret key)
let token = jwt.sign(user, JWT_SECRET);

// print out the token 
console.log(">>>>>>>>>>>", token)

// decrypt the data/payload using the token
const decrypted = jwt.verify(token, JWT_SECRET)

// print out the decrypted info 
console.log(">>>>>>>>>>>>> decrypted", decrypted) 