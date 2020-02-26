window.addEventListener('load', () => {
	//Declaration of DOM elements
	 const timezone = document.getElementsByClassName('h-location')[0];
	 const unit = document.getElementsByClassName('h-unit')[0];
	 const degree = document.getElementsByClassName('h-degree')[0];
	 const desc = document.getElementsByClassName('desc')[0];
	 const icon = document.getElementsByClassName('icon')[0];
	 
	 
	//Fetch Function to get parsed response object to use
	function getData(lat, long){
		const apiKey = `163bd342fe856b7ba6f5ef5cd19f6bde`;
		
		return fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${apiKey}/${lat},${long}`)
				 .then(response => response.json());
	}
	
	//Error Function
	function error(){
		const body = document.getElementsByTagName('body')[0];
		body.innerText = "ERROR"
						console.error('Please allow weather app to use location!') 
	}
	 
	//If the location is turned on and is accessible 
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(position => {
			console.log('My General Position:', position);
			const long = position.coords.longitude;
			const lat = position.coords.latitude;

			getData(lat, long)
				.then(data => {
					timezone.innerText = data.timezone;
					degree.innerText = data.currently.temperature;
					unit.innerText = "* F";
					desc.innerText = data.daily.summary;
					
					setIcons(icon, data.currently.icon);
					changeUnit(data.currently.temperature);
					
				});
			})
			.catch(error());
	}
	
	//Functions to add animations and change the weather units
	
	//Function to change the icon animation based on the location
	const setIcons = (iconID,icon) => {
		const skycons = new Skycons({"color": "white"});
		
		skycons.add(iconID,icon);
		skycons.play();
	};
	
	//Function to change the unit of temperature once it is clicked
	const changeUnit = (temp) => {
		unit.addEventListener('click', () => {
			if(unit.innerText === '* F'){
				unit.innerText = '* C';
				degree.innerText = ((temp - 32) * (5/9)).toFixed(2);
			}else if (unit.innerText === '* C'){
				unit.innerText = '* F';
				degree.innerText = temp.toFixed(2);
			}
		});
	};
	
});
