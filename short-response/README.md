## Short Response Questions:

1. Why is asynchronous code such a fundamental part of programming in JavaScript?

Asynchronous code is an integral part of web development because it's what alows the user to continue interacting with the page while other things are happening in the background. Which results in true modularity. Meaning if one component of your program does not work the rest can continue on without locking up.

2. What is a Promise? When were Promises made available in JavaScript? What did they replace and why do they represent an improvement on the previous way asynchronous functions were handled?

A promise is essentially an object that operates as a placeholder for the response from a request that was sent. This way your program can use this placeholder in functions without having to wait for the request to finally come back. 

3. What are `async` functions? What is their relationship to Promises? What improvements does `async`/`await` introduce?

Async functions are just functions that perform their operations asyncronously. However they always return a promise just like a fetch request would. The improvment that using async/await brings is modularity. Splitting up fetch and then isn't really an option, but async and await allows you to let one function operate asynchronously but purposefully allow another function to operate synchronously with the asyncronous function.

4. Consider one of your favorite apps. Describe one feature of that app that is likely powered by AJAX.

One of my favorite apps is google calandar. My favorite feature is that if someone invites me to an event on a compeltely different app like calendly, I can see that event on google calandar. Odds are thats powered by a POST request with my credentials allowing the app to create an event on my account.