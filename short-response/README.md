## Short Response Questions:

1. Why is asynchronous code such a fundamental part of programming in JavaScript?
- It's important because it improves the user experience and allows them to do other things as data is being requested or posted. If it were synchronous, you would have to wait for data to get back to you, which could take a while depending on how much you're requesting.

2. What is a Promise? When were Promises made available in JavaScript? What did they replace and why do they represent an improvement on the previous way asynchronous functions were handled?
- A Promise is an object in JS that represents the completion or rejection of an asynchronous function or operation with statuses, such as pending, rejected, or fulfilled. They were officially made available in ECMAScript 2015, but as concepts, they've been around for quite a long time. They replaced having to make XMLHttpRequests, which if you wanted to use for a lot of callbacks, would generally look like one big mess that would be hard to read and hard to debug or even identify what's happening at that moment.

3. What are `async` functions? What is their relationship to Promises? What improvements does `async`/`await` introduce?
- `Async` functions are functions that are labeled as asynchronous, and returns a Promise. It's much like using Promises with then and catch methods, but more syntactically sugared. It makes it easier to read, and you can store data into variables. It also allows you to use the `await` method, which is basically a then method.

4. Consider one of your favorite apps. Describe one feature of that app that is likely powered by AJAX.
- Steam, which is a game store for PC games, I believe has some sort of AJAX implemented. When you buy a game and it's downloading and installing onto your computer, you're able to browse through the store while the game is downloading. Even in CodeWars, when you click a link to a new page, it'll show you the status of how much it's loaded, and still allow you to go through the page you're currently on and do whatever it is you can do there (such as voting for a solution as clever or best practice).