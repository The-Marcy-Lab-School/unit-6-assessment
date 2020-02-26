## Short Response Questions:

1. Why is asynchronous code such a fundamental part of programming in JavaScript?
    The async code is fundamental because it makes a website appear responsive and interactive. It doesn't reload the whole page in order to execute certain functions

2. What is a Promise? When were Promises made available in JavaScript? What did they replace and why do they represent an improvement on the previous way asynchronous functions were handled?
    A promise is an object that captures the status of a async operation. They replaced the "onreadystatechange" from the xhr object that determined the operation status. It represents an improvement because now you don't have to keep on checking if the operation is ready or if there was a problem in order to go get the data from the api.

3. What are `async` functions? What is their relationship to Promises? What improvements does `async`/`await` introduce?
    Async functions are functions that are asynchronous meaning that they return a promise object. Improvements that "async/await" made were that they let you abstract operations after reponses are resolved. It also makes it clear for developers to read code more clearly. 

4. Consider one of your favorite apps. Describe one feature of that app that is likely powered by AJAX.
    Spotify is very likely powered by Ajax, because it has a bunch of users that contain similar data. But have access to the same data. So I think when a user creates an account they are getting the api and adds the user to the users data, and then the user will have access to the rest of the data in the api.