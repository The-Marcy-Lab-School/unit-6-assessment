window.addEventListener('load', () => {
	const location = document.getElementsByClassName("location")[0];
	const icon = document.getElementsByClassName("icon")[0];
	const temperature = document.getElementsByClassName("degree")[0];
	const unit = document.getElementsByClassName("unit")[0];
	const weatherSummary = document.getElementsByClassName("weather")[0];
	const degreeSection = document.getElementsByClassName("degree-section")[0];

	const geo = navigator.geolocation
	const key = `6876e6129ccca967dfb873431eb8d719`

	if (geo) {
		geo.getCurrentPosition(position => {
			console.log('My General Position:', position);

			const long = position.coords.longitude;
			const lat = position.coords.latitude;

			fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${key}/${lat},${long}`)
				.then(res => res.json())
				.then(json => {
					const data = {
						'timezone': json.timezone,
						'summary': json.currently.summary,
						'temperature': json.currently.temperature,
						'icon': json.currently.icon

					}
					location.innerText = data.timezone
					temperature.innerText = data.temperature
					weatherSummary.innerText = data.summary


					setIcons(icon, data.icon);
					unitChange(data.temperature);

				})
				.catch(error => {
					location.innerText = "Weather not found."
					console.error('Please allow weather app to use your location.')
				})
			const unitChange = function (temperatureNum) {
				degreeSection.addEventListener('click', (e) => {
					if (unit.innerText.includes('F')) {
						unit.innerText = 'UNIT: C'
						temperature.innerText = (((temperatureNum) - 32) * (5 / 9)).toFixed(2)
					}
					else {
						unit.innerText = 'UNIT: F'
						temperature.innerText = temperatureNum
					}

				})
			};

		});
	};
	const setIcons = function (icon, iconID) {
		const skycons = new Skycons({ "color": "white" });
		skycons.set(icon, iconID);
		skycons.play();
	};
});
