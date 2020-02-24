## Short Response Questions:

1. Why is asynchronous code such a fundamental part of programming in JavaScript?
    + Asynchronous code is fundamental to JavaScript because web applications often need to gather files and data from other servers in the internet. JavaScript is, however, a synchronous, blocking, single-threaded language. This means that without promises, these tasks would give end-users a very disatisfying experience as JavaScript stops executing code while waiting for data to download.

2. What is a Promise? When were Promises made available in JavaScript? What did they replace and why do they represent an improvement on the previous way asynchronous functions were handled?

3. What are `async` functions? What is their relationship to Promises? What improvements does `async`/`await` introduce?
    + `async` functions are functions that return a promise. `async` functions allow us to use `await` to represent the completion of a promise in a way that reads similar to synchronous JavaScript code. While the basic mechanics are the same, `async` syntax helps improve code readibality.

4. Consider one of your favorite apps. Describe one feature of that app that is likely powered by AJAX.
    + One of my favorite apps on the internet is YouTube. One of the ways in which this app is powered by AJAX is the ability to continue to use a page while video is being downloaded, which is especially noticable on slower connections. A video is loaded continiously and in the background, meaning that while the next parts of the video are being loaded I can watch the video that is already here, browse the comment section, and read the video description. Since I can do these things at the same time as more content is downloaded, it is very likely this feature is powered by AJAX.