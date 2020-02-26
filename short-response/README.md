## Short Response Questions:

1. Why is asynchronous code such a fundamental part of programming in JavaScript?
- Asynchronous programming is a fundamental part of JavaScript becuase it will allow a program to run while waiting for other procedures to happen the background. 

- This is important because otherwise, a program would stop a certain line of code but this may not be what a devloper wants their program to do. 

2. What is a Promise? When were Promises made available in JavaScript? What did they replace and why do they represent an improvement on the previous way asynchronous functions were handled?
- A promise is an object. Promises were first introduced to Javascript in 2013. 
- Promises are replacing the xhr object instanciated with an XMLHttpRequest. 
- Previously when there is a readyStatechange method used on the 
xhr object, there were many call back functions that became easy margins of error. 
- Promises are more readable and are easier to keep track of.
- Promises with fetch abstract the previous method of creating a xhr object by not having to open and send the request.

3. What are `async` functions? What is their relationship to Promises? What improvements does `async`/`await` introduce?
- Async allows you to create asynchronous functions in your program that will not pause your code from running with the use of await. 
- Async/Await syntax is more readable and cuts back on the use of callback functions that are needed in the .then methods.

4. Consider one of your favorite apps. Describe one feature of that app that is likely powered by AJAX.
- Twitter for example has asynchronous programing becuase sometimes when I load twitter, tweets in my feed will load instantly before pictures and videos. While a picture or video is loading I can still interact with the the tweet, the program will continue running despite waiting to recvieve the response for the pictures and videos. 
