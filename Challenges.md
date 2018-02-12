* Auth Lessons learnt
* Web 
* Error Handling in auth is taking forever. I intially set error handling to more genralized messages like 'Sign Up Unsuccessfull' 'Login Unsuccessful'. Then wrote multiple lines on code on client side. Ended up implementing on server side. Much shorter code. Better error messages. Looked at codes of 'Ben Awad' 

* Error persists with one route to another. Lesson Learnt--- dispatch props after settimeout

* Wrote  multiple input methods. Later wrote a single function to manage all inputs

* Implemented login with both username and email. Auto fill username field after Sign up.

* Inspired by Netflix login. Todo- Sync Username and email response. Eg: User should know that a username is unavailable before he submits or even moves to password field. Currently he knows after submitting the form

* Implemented single sign on feature with facebook with passport.js. Loved it

* Applied Redux-Thunk to make the transitions smooth between Signup and Login..The error was persisting in props..Now implemented a timeout action with dispatch in Thunk.
Using Redux Promise and Thunk both. Need to learn how to handle everything with Thunk only.




