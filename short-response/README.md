## Short Response Questions:

1. Why is asynchronous code such a fundamental part of programming in JavaScript?

Answer: Asynchronous code is such a fundamental part of programming in JavaScript because asynchronous programming makes it possible to run different programs at different times without blocking the entire program. 

2. What is a Promise? When were Promises made available in JavaScript? What did they replace and why do they represent an improvement on the previous way asynchronous functions were handled?
 
Answer : A Promise is the eventual completion or failure of an asynchronous operation and it's resulting value. Promises were made available in JavaScript around 2013. Promises replace call backs in JavaScript. They represent an improvement on the previous way asynchronous functions were handled because error handling is much easier to use and debug. Nested callbacks can cause the term 'pyramid of doom', which can be difficult to maintain and follow. 


3. What are `async` functions? What is their relationship to Promises? What improvements does `async`/`await` introduce?

Answer: Async functions are functions that returns an Async Function object. Their relationship to Promises is, when an async function operate , aside from the rest of the code in the event loop, the value that is return when this asycn function is finished is a Promise Object.




4. Consider one of your favorite apps. Describe one feature of that app that is likely powered by AJAX.
