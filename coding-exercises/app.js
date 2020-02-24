window.addEventListener('load', () => {
	/**
	 * TODO : Create your 5 variables to get elements
	 * based on the classes you created in the `index.html`.
	 *
	 * Define your variables below this comment.
	 */

	const city = document.getElementsByClassName('city');
	const iconAnimate = document.getElementsByClassName('icon-animated');
	const temp = document.getElementsByClassName('temp');
	const degree = document.getElementsByClassName('degree-type');
	const description = document.getElementsByClassName('weather-desc');

	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(position => {
			console.log('My General Position:', position);
			const long = position.coords.longitude;
			const lat = position.coords.latitude;

			/* TODO: Continue your fetch request to set the DOM Elements for
			 * temperature, description/summary, and timezone.
			 * Make sure to include error handling.
			 */

			fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/2e16100c34900daeb2d5cadf60f88682/${lat},${long}`).then(response => response.json())
				.then(data => {
					temp[0].innerText = `Temperature: ${data.currently.temperature}`;
					description[0].innerText = `Description: ${data.currently.summary}`;
					city[0].innerText = `Location: ${data.timezone}`;
					let icon = data.currently.icon
					setIcons(icon, iconAnimate[0])
				}).catch(err => console.warn(err))

			/*TODO: Set the weather icon */


			/**TODO: Add an event listener that toggles between Fahrenheit and Celcius
			 * when a user clicks on the current temperature section.
			 */
			temp[0].addEventListener('click', () => {
				let currTemp = Number(temp[0].innerText.substring(13))
				if (degree[0].innerText === 'F') {
					temp[0].innerText = `Temperature: ${Math.floor((currTemp - 32) * (5 / 9))}`
					degree[0].innerText = "C"
				}
				else {
					temp[0].innerText = `Temperature: ${Math.floor((currTemp * (9 / 5)) + 32)}`
					degree[0].innerText = "F"
				}
			});
		});
	}

	/**
	 * TODO: Code out the remainder of `setIcons`function.
	 */
	const setIcons = (icon, iconID) => {
		let skycons = new Skycons();
		skycons.add(iconID, icon);
		skycons.play();
	};
});
