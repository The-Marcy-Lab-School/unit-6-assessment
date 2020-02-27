console.log("javaScript is Connected.");
  
window.addEventListener('load', () => {
	alert("Your Location is required.")
  
  const secretKey = "5e70c6f2688e6b60969e6693bbfff0c7"
	const proxy = "https://cors-anywhere.herokuapp.com/"
	
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(position => {
			const long = position.coords.longitude;
			const lat = position.coords.latitude;
			
			fetch(`${proxy}https://api.darksky.net/forecast/${secretKey}/${lat},${long}`)
			// fetch(`${proxy}https://api.darksky.net/forecast/5e70c6f2688e6b60969e6693bbfff0c7/37.8267,-122.4233`)
			.then((response) => response.json())
			.then((json) => {
				
				const cityPlaceHolder = document.getElementById("cityPlaceHolder");
				const degreesPlaceHolder = document.getElementById("degreesPlaceHolder");
				const scalePlaceHolder = document.getElementById("scalePlaceHolder");
				const descriptionPlaceHolder = document.getElementById("descriptionPlaceHolder");
				const canvas = document.getElementById("canvas");
				console.log(json);
				
				cityPlaceHolder.innerText = json.timezone.substring(json.timezone.lastIndexOf("/") + 1).replace(/[_]/g, " ");
				degreesPlaceHolder.innerText = Math.floor(json.currently.temperature);
				descriptionPlaceHolder.innerText = `${json.currently.summary} \n ${json.hourly.summary}`;
				setIcons(json.currently.icon)

				const slider = document.getElementById("slider");
				
				slider.addEventListener("change", (e) => {
					if (!slider.checked) {  
						scalePlaceHolder.innerText = "C"
						degreesPlaceHolder.innerText = Math.floor((json.currently.temperature - 32) * (5 / 9))
					}
					if (slider.checked) { 
						scalePlaceHolder.innerText = "F"
						degreesPlaceHolder.innerText = Math.floor(json.currently.temperature);
					}
				})
			})
			.catch(error => {
				alert("Weather not found.");
				console.warn(error);
			})
		});
	}
});


const setIcons = (icon) => {
	const skycons = new Skycons({"color": "pink"});
	skycons.add(canvas, icon);
	skycons.play();
	console.log(icon)
}


