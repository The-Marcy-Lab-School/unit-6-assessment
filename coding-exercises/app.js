window.addEventListener("load", () => {
  const title = document.getElementsByClassName("title")[0];
  const iconCanvas = document.getElementsByClassName("animated-icon")[0];
  const tempValue = document.getElementsByClassName("temp-value")[0];
  const tempUnit = document.getElementsByClassName("temp-unit")[0];
  const tempDesc = document.getElementsByClassName("temp-desc")[0];

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      position => {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;

        const fixedLat = Number(lat.toFixed(4));
        const fixedLong = Number(long.toFixed(4));

        const corsAnywhereUrl = "https://cors-anywhere.herokuapp.com/";

        const apiUrl = `https://api.darksky.net/forecast/e0391512f84780b1d9fb3bb1f8f708cd/${fixedLat},${fixedLong}`;

        const weatherReq = fetch(corsAnywhereUrl + apiUrl)
          .then(res => res.json())
          .then(json => {
            title.innerText = `Timezone: ${json.timezone
              .split("/")
              .reverse()
              .join(", ")
              .replace(/_/gm, " ")}`;

            tempValue.innerText = `Temperature: ${json.currently.temperature}`;

            tempUnit.innerText = `Fahreinheit, ${json.flags.units.toUpperCase()}`;

            tempDesc.innerHTML = `Currently <strong>${json.currently.summary}</strong>`;

            setIcons(iconCanvas, json.currently.icon);

            document
              .getElementsByClassName("degree-section")[0]
              .addEventListener("click", function () {
                if (tempUnit.innerText.includes("US")) {
                  tempValue.innerText = `Temperature: ${(
                    json.currently.temperature -
                    32 * (5 / 9)
                  ).toFixed(2)}`;
                  tempUnit.innerText = "Celsius, EARTH";
                }
                else {
                  tempValue.innerText = `Temperature: ${json.currently.temperature}`;
                  tempUnit.innerText = `Fahreinheit, ${json.flags.units.toUpperCase()}`;
                }
              });
          });

        weatherReq.catch(e => {
          title.innerText = "Error loading... Please try again later";
          tempValue.innerText = tempUnit.innerText = tempDesc.innerText = "...";
          console.error(e);
        });
      },
      e => {
        window.alert("This app needs your location to function properly!");
      }
    );
  }

  const setIcons = (icon, iconID) => {
    const skycons = new Skycons({ color: "white" });
    skycons.set(icon, iconID);
    skycons.play();
  };
});
