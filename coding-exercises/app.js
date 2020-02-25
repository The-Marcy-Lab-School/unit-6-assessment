window.addEventListener('load', () => {
	
	/**
	 * TODO : Create your 5 variables to get elements
	 * based on the classes you created in the `index.html`.
	 *
	 * Define your variables below this comment.
	 */
	 
	const newYork = document.getElementsByClassName('new-york')[0];
	const canvas = document.getElementsByClassName('animated-icon');
	const placeholder = document.getElementsByClassName('placeholder-32')[0];
	const span = document.getElementsByClassName('placeholder-F')[0];
	const div = document.getElementsByClassName('description')[0];


	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(position => {
			console.log('My General Position:', position);
			const long = position.coords.longitude;
			const lat = position.coords.latitude;

			/* TODO: Continue your fetch request to set the DOM Elements for
			 * temperature, description/summary, and timezone.
			 * Make sure to include error handling.
			 */
			 const getApiInfo = async(lat,lon) =>{
			 	const apiKey = '065ad3fe15434cfea6d6c1092979d8ba'
			 	const getData = await requestMethod('GET',`https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${apiKey}/${lat},${lon}`)
				const timezone = getData.timezone
				const temperature = getData.currently.temperature
				const summary = getData.currently.summary
				const description = getData.minutely.summary
				const icon = getData.currently.icon
				
				
				newYork.innerHTML = `Location: ${timezone}`
				placeholder.innerHTML = `Summary : ${summary}`
				span.innerHTML = `Temperature: ${temperature}° F`
				div.innerHTML = `Description : ${description}`
				
				setIcons('icon1',icon)
				span.addEventListener('click',(e)=>{
					const convert = `${Math.floor(temperature - 32) * (5 / 9)}`
					const fahreinheit =  `Temperature: ${temperature}° F`
					const celcius = Number.parseFloat(convert).toFixed()
					
			 		if(e.target.innerHTML === fahreinheit){
			 			e.target.innerHTML = `${celcius}° C`
			 		}else{
			 			e.target.innerHTML = fahreinheit
			 			
			 		}
			 })
			 }
			 
			 getApiInfo(lat,long)
			 
			 
			 

			/*TODO: Set the weather icon */
		

			/**TODO: Add an event listener that toggles between Fahrenheit and Celcius
			 * when a user clicks on the current temperature section.
			 */
		});
	}

	/**
	 * TODO: Code out the remainder of `setIcons`function.
	 */
	const setIcons = (icon,iconID) => {
		const skycons = new Skycons()
		skycons.add(document.getElementById('icon1') ,iconID)
		skycons.play()
	};
});

window.alert('Please Allow Location if your are using this weather app. Thank You !')

const requestMethod = (method, url , data) => {
	return fetch(url, {
		method: method,
		body: JSON.stringify(data),
		headers: data ? {'Content-Type': 'application/json'} : {},
		mode: 'cors'
	})
		.then(handleError)
		.then(response => response.json())
		.catch(err => console.log('Error'))
}

const handleError = (response) => {
	if (!response.ok) {
        throw Error(`${response.statusText} - ${response.url}`);
    }
    return response;
};



