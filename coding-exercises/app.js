window.addEventListener('load', () => {
	/**
	 * TODO : Create your 5 variables to get elements
	 * based on the classes you created in the `index.html`.
	 *
	 * Define your variables below this comment.
	 */

	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(position => {
			console.log('My General Position:', position);
			const long = position.coords.longitude;
			const lat = position.coords.latitude;

			/* TODO: Make your fetch request to set the DOM Elements for
			 * city, temperature, description.
			 * Make sure to include error handling.
			 */

			/*TODO: Set the weather icon */

			/**TODO: Add an event listener that toggles between Fahrenheit and Celcius
			 * when a user clicks on the current temperature section.
			 */
		});
	}

	
});
