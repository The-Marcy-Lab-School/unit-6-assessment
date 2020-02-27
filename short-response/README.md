## Short Response Questions:

1. Why is asynchronous code such a fundamental part of programming in JavaScript?

    This is a fundamental part of JS. It allows the end user to perform operations within the background while
    the user can interact with other parts of the document. JS is a synchronous programming language and requires asynchronous
    code to perform efficiently.
    
2. What is a Promise? When were Promises made available in JavaScript? What did they replace and why do they represent an improvement on the previous way asynchronous functions were handled?

    A Promise is the object that is returned from an asynchronous request to a server. To return a promise in JS, you use send a 
    fetch request. This replaced the way, which was sending a "GET" request while utilizing an XML object. This was made 
    avilable in around 2015.
    
3. What are `async` functions? What is their relationship to Promises? What improvements does `async`/`await` introduce?

    async functions are functions that specifically return a promise object. This allows us to use await so the function 
    can perform its operations asynchronously.
    
4. Consider one of your favorite apps. Describe one feature of that app that is likely powered by AJAX.

    Apple Music or spotify is a nice app/service. Apple/Spotify likely sends a POST request to their servers checking if you 
    have a premium subscription to their service and allows you priviledges based on the response sent back.