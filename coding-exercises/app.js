window.addEventListener('load', () => {
	alert("This app needs your location to function")
	let location = document.getElementById("location")
	let tempNum = document.getElementById("temperature-int")
	let tempUnit = document.getElementById("temperature-unit")
	let weatherDesc = document.getElementById("weather-desc")
	let weatherIcon = document.getElementById("weather-icon")
	let slider = document.getElementById('unit')
	const key = "5d09a733effe3c9b42c3616e327b3574"
	let cors_api_host = 'cors-anywhere.herokuapp.com/';
  
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(position => {
			const long = position.coords.longitude;
			const lat = position.coords.latitude;
			
			fetch(`https://${cors_api_host}https://api.darksky.net/forecast/${key}/${lat},${long}`)
			.then((response) => response.json())
			.then((json) => {
				location.innerText = `${json.timezone.replace(/[_]/g, " ").replace(/[/]/g, ": ")}`
				tempNum.innerText = Math.floor(json.currently.temperature)
				tempUnit.innerText = '°F'
				weatherDesc.innerText = `${json.currently.summary}`
				setIcons(json)
				addSlider(json)
			})
		});
	}

	const setIcons = (res) => {
		let skycons = new Skycons({"color": "white"})
		skycons.add("weather-icon", res.currently.icon)
		skycons.play()
	}
	
	const addSlider = (res) => {
		slider.addEventListener('change', function(){
			if(slider.checked){
				tempUnit.innerText = '°C'
				tempNum.innerText = Math.floor((((res.currently.temperature)- 32) * (5 / 9)))
			}
			if(!slider.checked){
				tempUnit.innerText = '°F'
				tempNum.innerText = Math.floor(res.currently.temperature)
			}
		})
	}
});

