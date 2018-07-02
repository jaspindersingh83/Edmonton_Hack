Lesson Learnt 

* Authentication Challenges 

* Error Handling in auth is taking forever. I intially set error handling to more genralized messages like 'Sign Up Unsuccessfull' 'Login Unsuccessful'. Then wrote multiple lines on code on client side. Ended up implementing on server side. Much shorter code. Better error messages. Looked at codes of 'Ben Awad'. Should be writing unit tests to remove manual testing redundancy.

* Error persists with one route to another.For eg: route '/signup' error 'username unavaialble' persists after in route '/signin'. Lesson Learnt --- dispatch props after settimeout. Error is displayed for a few seconds only.

* Wrote  multiple input methods in every React component. For example username input is handled by a different function and email input is handled by another function. Not a very efficient functional approach. Later wrote a single function to manage all inputs.

* Implemented login with both username and email. Challenge: Auto fill username on signin page after user signs up. Update: Auto fill implemented by persisting signed up username in local storage.

* Created Authentication as inspired by Netflix login. Todo- Sync Username and email response. Eg: User should know that a username is unavailable before he submits or even moves to password field. Currently he knows after submitting the form. 

* Implemented single sign-on feature with facebook with passport.js. Single sign-on works on two way authentication. From client to service provider ---> our app server --> validation at service provider server --> back to our server with JWT and user data details on facebook. Caution: Don't send an HTTP request to our application server. We will get a CORs error.

* One of the issue with facebook auth was that I was getting authenticated but could not get our application server JWT to store in localstorage of client. For that I defined a dummy route '/token?${JWToken} and sent the client to this intermediate url. where I queried the JWT from URL itself. Tip: JWT decode lets you know username, email and other details. Highly secure.

* Applied Redux-Thunk to make the transitions smooth between Signup and Login..The error was persisting in props..Now implemented a timeout action with dispatch in Thunk. Why needed to use Redux Thunk? It handles dispatch of function as well as normal objects.
UpdateCurrently using Redux Promise and Thunk both. Need to learn how to handle everything with Thunk only. Why to use multiple dependencies with similar solutions.

* Content flow Challenges for Video Rendering

* Uploading content to S3 is a challenge. Amazon has done a great job with AWS-SDK, but I got struck at parsing HTML data from a multiform on client side. I used multer-S3 with multer but it was difficult for me to understand as Multer is a high level middleware that piggy backs on Busboy. Busboy is low level and helps me understand under the hood stuff better. Update-- Solved with Busboy.

* The critical decision is design of the ContentModel. I want customer side rendeing to be fast. I can either have a simple hashtable with (genre,title,thumbnailUrl, imageUrl....etc) or a model with following format(genre,carouselItems:[title,thumbnailUrl, imageUrl....etc]). The BigO of latter case for carousel rendering will be O(n) as I will get data in array form itself. But in first case I will get the data with a filter on genre and then will have to put same data in array and sort it. Will take O(nlogn). So decided to do heavy lifting on upload side. The BigO of finding video by id is going to be same in both cases as under the hood mongoDb uses hash index, so O(1) in both cases.

* Learning to Create one to many relationship in mongoose was pretty good. I had to use reference(refs) between two different models

* I need multiple signed urls back from AWS. Each one of them is a promise. Don't know how to await handle multiple promises. Tried all combinations of async/await. Still not figured out a way out of it. Have reached out my mentors now.Update: Implemented a setTimeout hack for now. Each promise gets executed after fixed amount of time.

* Needed to figure out as how to send video/audio files via Postman. Used form-data. Caution delete 'content-type' from headers.Update: The images and videos are getting uploaded to S3. But images are getting crowded in one director on S3. Need to figure out some organization. Update: I passed key param in form of genre/title/video or genre/title/video and this solved the issue.
Update: So images and videos are getting uploaded from Postman but apparently data can not be sent just like that with 'axios' in HTTP. Needed to specify 'content-type' header with post request and had to initiate FormData class to send all three files data. This was tough cookie to break. 

* Once I change MongoDB fields make sure to see db.collection.getIndex and use dropIndex to remove any previously saved indexes. The deleted data was rendering as it was persisting under the hood in Mongo.

