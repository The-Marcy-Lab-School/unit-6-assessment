# Coding Exercises - Create a real-time weather app.

## Introduction

The purpose of these coding exercises are to build a simple weather app that allows you to get weather data based on the user's location and display it in the browser. All directions can be found below. **You should be using the `fetch` or `async/await` syntax.** The starter code also includes a few `TODO` comments in order to guide you.

## Demo
[This](https://thuyanduong.github.io/weather-app/) is the app you will be recreating. Be sure to _Allow Location Access_ (Firefox) or _Allow_ (Google Chrome) when asked.

## Directions

**Step 0:**

Internalize the structure of the `index.html` and `app.js`. Ensure that you can see the placeholder app by
a. opening your `index.html` in an internet browser _or_
b. copying the path of your `index.html` and pasting it the browser console URL bar.

Be sure to _Allow Location Access_ (Firefox) or _Allow_ (Google Chrome) when asked. This will appear each time the browser is refreshed. Be advised, access to geolocation is necessary for this app to work. There will be more information about this in _Step 3_.

**Step 1:**

In the `index.html` file, create 5 classes or ids for each of the placeholder elements.

**Step 2:**

In the `app.js` file, create 5 variables to select the 5 elements you need from the `index.html` file. Reference the [Web API Methods](https://developer.mozilla.org/en-US/docs/Web/API/Document) for a reminder about the best method to use.

**Step 3:**

Gain context about the starter code on lines 12-15 of `app.js` by reading the MDN documentation on [Navigator.geolocation](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/geolocation) and the [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API). _NOTE:Navigator.geolocation is more precise using mobile devices and more generic when using laptops_.

**Step 4:**

Now you need actual weather data from an API. A great resource is WeatherBit. Visit the [WeatherBit website](https://www.weatherbit.io/) and follow the directions to register for a free account and for obtaining your API key. _NOTE: Keep your unique API key handy for upcoming steps._

**Step 5: Fetch Data**

Reference the [WeatherBit Current Weather Documentation](https://www.weatherbit.io/api/weather-current).

Within `app.js`, code out a fetch request using the WeatherBit API. **You must use the geolocation data provided by navigator.geolocation** (from Step 3). **Do not hard code your location to any one city.** Write a simple console.log statement to ensure your app is working and to analyze the response object.

Be sure to:

1. code out your fetch request to the correct endpoint
2. make a simple console.log statement first to ensure you can return data
3. set the DOM elements for the `city`, `temperature`, and `description` based on data returned from the API
4. include error handling

**If you are having trouble fetching data and logging it to the console, reach out to an instructor for assistance.**

**Step 6: Access Weather Icons**

For the placeholder icon, find a list of WeatherBit icons [here](https://www.weatherbit.io/api/codes)

1. Visit the these icons directly by opening up a new tab to the address: `https://www.weatherbit.io/static/img/icons/${icon}.png`.

> For example, https://www.weatherbit.io/static/img/icons/t01d.png will show you a picture of a thunderstorm icon. 


**Step 7: Set Weather Icons**

The API also returns an `icon`. Set the image on your DOM based on data returned from the API so that is displays the appropriate icon. 

**Step 8 Toggle Between Measurements:**

Give the user the added functionality of toggling between Celcius and Fahrenheit.
The WeatherBit API returns temperatures in Celcius by default.
Here is a helpful formula to use for converting the temperature to Fahrenheit:
`fahrenheit = ( celsius * 9/5 ) + 32`

Add an event listener that toggles between Fahrenheit and Celcius when a user clicks on the current temperature section.

**Step 9: Cleanup and check**

1. Run your Weather App a few time with the developer console open to ensure there are no errors.
2. If you have not done so already, remove all console.log statements and code comments.

3. OPTIONAL: Users may not want to allow the Weather App you just created to access their location. This is their choice. Create a helpful alert message to inform users that they will need to enable geolocation before using your app. Read about the [Alert from the Web API](https://developer.mozilla.org/en-US/docs/Web/API/Window/alert).

4. OPTIONAL: Style your app to your liking.
