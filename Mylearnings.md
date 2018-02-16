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

* Content 

* Uploading content to S3 is a challenge. Amazon has done a great job with AWS-SDK, but I got struck at parsing HTML data from a multiform on client side. I used multer-S3 with multer but it was difficult for me to understand as Multer is a high level middleware that piggy backs on Busboy. Busboy is low level and helps me understand under the hood stuff better.


* The critical decision is design of the ContentModel. I want customer side rendeing to be fast. I can either have a simple hashtable with (genre,title,thumbnailUrl, imageUrl....etc) or a model with following format(genre,carouselItems:[title,thumbnailUrl, imageUrl....etc]). The BigO of latter case for carousel rendering will be O(n) as I will get data in array form itself. But in first case I will get the data with a filter on genre and then will have to put same data in array and sort it. Will take O(nlogn). So decided to do heavy lifting on upload side. The BigO of finding video by id is going to be same in both cases as under the hood mongoDb uses hash index, so O(1) in both cases.

* Learning to Create one to many relationship in mongoose was pretty good. I had to reference from two different models

* S3 vows continue. AWS has amazing documentation. Uploading to S3 is aynchronous. I need sugnedUrls back from AWS. Don't know how to await handle multiple promises. Tried all combinations of async/await. Still not figured out a way out of it. Have reached out my mentors now.

* Needed to figure out as how to send files via Postman. Used form data. Caution delete 'content-type' from headers....Yay success finally. The images and videos are getting uploaded to S3. But images are getting crowded in one director on S3. Need to figure out some organization...

* Turn out if I pass key param in form of genre/title/video or genre/title/video. I get directories. Pretty simple, love you Amazon for documentation.

* So images and videos are getting uploaded from Postman but apparently data can not be sent just like that with 'axios' in HTTP. Needed to specify 'content-type' header with post request and had to initiate FormData class to send all three files data. This was tough cookie to break. 

* Once you change MongoDB fields make sure to see db.collection.getIndex and use dropIndex to remove any previously saved indexes. Has a major burn because of it







