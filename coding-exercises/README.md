# Coding Exercises - Create a real-time weather app.

## Introduction

The purpose of these coding exercises is to build a simple weather app that allows you to get weather data based on the user's location and display it in the browser. All directions can be found below. **You should be using the `fetch` or `async/await` syntax.** The starter code also includes a few `TODO` comments in order to guide you.

## Demo
[This](../pictures/app.png) is an image of the app you will be recreating. 

## Directions

**Step 0:**

Internalize the structure of the `index.html` and `app.js`. Ensure that you can see the [placeholder app](../pictures/placeholder.png):

1. Open your `index.html` in an internet browser.
2. Be sure to _Allow Location Access_ (Firefox) or _Allow_ (Google Chrome) when asked. This will appear each time the browser is refreshed. Be advised, access to geolocation is necessary for this app to work. There will be more information about this in _Step 3_.
3. Open up the Console in the broswer. If you've done the steps above correctly, you should see logged to the console "My General Position:" followed by a _GeolocationPosition_ object. If not, refresh the page and click _Allow_ when prompted.

**Step 1:**

In the `index.html` file, create 5 classes or ids for each of the placeholder elements.

**Step 2:**

In the `app.js` file, create 5 variables to select the 5 elements you need from the `index.html` file. Reference the [Web API Methods](https://developer.mozilla.org/en-US/docs/Web/API/Document) for a reminder about the best method to use.

**Step 3:**

Gain context about the starter code on lines 12-15 of `app.js` by reading the MDN documentation on [Navigator.geolocation](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/geolocation) and the [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API).

**Step 4:**

Now you need actual weather data from an API. Visit the [WeatherAPI website](https://www.weatherapi.com/) and sign up for a free account. Once you verify your email address and log in, go to https://www.weatherapi.com/my/ to view your API key. _NOTE: Keep your unique API key handy for upcoming steps._

**Step 5: Fetch Data and Display on the DOM**

Reference the [WeatherAPI Documentation](https://www.weatherapi.com/docs/). You will need to figure out how to fetch the current weather for the location (latitude and logitude) of your computer and display it on the DOM. 

Within `app.js`, code out a fetch request using the WeatherAPI. **You must use the geolocation data provided by navigator.geolocation** (from Step 3). **Do not hard code your location to any one city or location.** 

Be sure to:

1. Code out your fetch request to the correct endpoint
2. Make a simple console.log statement first to ensure you have successfully fetch to the API and can return data
3. Set the DOM elements for the city or location name, current temperature, and current condition based on data returned from the API
4. Include error handling

> Hint: You can search the documentation for the word "Example" since that will often show you examples of how to format your fetch URLs. Additionally, you should search the documentation for the words "Latitude" and "Longitude" as that might give you some examples of how to format your query parameters in your URL.

**If you are having trouble fetching data and logging it to the console, reach out to an instructor for assistance.**

**Step 6: Set Weather Icons**

The API also returns an `icon`. Set the image on your DOM based on data returned from the API so that is displays the appropriate icon. 

**Step 7 Toggle Between Celcius and Fahrenheit**

Give the user the added functionality of toggling between Celcius and Fahrenheit. Check to see if the API returns this data or you can calculate the conversion yourself. Here is a helpful formula to use for converting the Celcius to Fahrenheit: `fahrenheit = ( celsius * 9/5 ) + 32`. 

Add an event listener that toggles between Fahrenheit and Celcius when a user **clicks on the current temperature** section.

**Step 8: Cleanup and check**

1. Run your Weather App a few time with the developer console open to ensure there are no errors.
2. If you have not done so already, remove all console.log statements and code comments.

3. OPTIONAL: Users may not want to allow the Weather App you just created to access their location. This is their choice. Create a helpful alert message to inform users that they will need to enable geolocation before using your app. Read about the [Alert from the Web API](https://developer.mozilla.org/en-US/docs/Web/API/Window/alert).

4. OPTIONAL: Style your app to your liking.
