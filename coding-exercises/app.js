window.addEventListener('load', () => {
	/**
	 * TODO : Create your 5 variables to get elements
	 * based on the classes you created in the `index.html`.
	 *
	 * Define your variables below this comment.
	 */
	const location = document.getElementsByClassName("location")[0];
	const icon = document.getElementsByClassName("icon")[0];
	const temperature = document.getElementsByClassName("degree")[0];
	const unit = document.getElementsByClassName("unit")[0];
	const weatherSummary = document.getElementsByClassName("weather")[0];

	const geo = navigator.geolocation
	const key = `6876e6129ccca967dfb873431eb8d719`

	if (geo) {
		geo.getCurrentPosition(position => {
			console.log('My General Position:', position);

			const long = position.coords.longitude;
			const lat = position.coords.latitude;

			/* TODO: Continue your fetch request to set the DOM Elements for
			 * temperature, description/summary, and timezone.
			 * Make sure to include error handling.
			 */
			fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${key}/${lat},${long}`)
				.then(res => res.json())
				.then(json => {
					return {
						'timezone': json.timezone,
						'summary': json.currently.summary,
						'temperature': json.currently.temperature
					}
				})
				.then(data => {})
				.catch(error => console.error('weather information not found'))

			/*TODO: Set the weather icon */

			/**TODO: Add an event listener that toggles between Fahrenheit and Celcius
			 * when a user clicks on the current temperature section.
			 */
		});
	}

	/**
	 * TODO: Code out the remainder of `setIcons`function.
	 */
	const setIcons = () => {};
});
