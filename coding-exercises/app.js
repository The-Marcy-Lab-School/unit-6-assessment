window.addEventListener('load', () => {
	const city = document.getElementsByClassName('city');
	const iconAnimate = document.getElementsByClassName('icon-animated');
	const temp = document.getElementsByClassName('temp');
	const degree = document.getElementsByClassName('degree-type');
	const description = document.getElementsByClassName('weather-desc');

	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(async position => {
			console.log('My General Position:', position);
			const long = position.coords.longitude;
			const lat = position.coords.latitude;

			try {
				let response = await fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/2e16100c34900daeb2d5cadf60f88682/${lat},${long}`)
				let data = await response.json()
				temp[0].innerText = `Temperature: ${Math.floor(data.currently.temperature)}`;
				description[0].innerText = `Description: ${data.currently.summary}`;
				city[0].innerText = `Location: ${data.timezone.split('/')[1]}, ${data.timezone.split('/')[0]}`;
				let icon = data.currently.icon
				setIcons(icon, iconAnimate[0])

				temp[0].addEventListener('click', () => {
					const fTemp = Math.floor(data.currently.temperature)
					if (degree[0].innerText === 'F') {
						temp[0].innerText = `Temperature: ${Math.floor((fTemp - 32) * (5 / 9))}`
						degree[0].innerText = "C"
						console.log(fTemp)
					}
					else {
						temp[0].innerText = `Temperature: ${fTemp}`
						degree[0].innerText = "F"
					}
				});
			}
			catch (error) {
				console.warn(error)
			}
		});
	}

	const setIcons = (icon, iconID) => {
		let skycons = new Skycons();
		skycons.add(iconID, icon);
		skycons.play();
	};
});
