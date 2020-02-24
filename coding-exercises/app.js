window.addEventListener("load", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      position => {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;
        getWeather(lat, long);
      },
      function(e) {
        window.alert("This app needs your location to function properly!");
      }
    );
  }
});

const setIcons = (icon, iconID) => {
  const skycons = new Skycons({ color: "white" });
  skycons.set(icon, iconID);
  skycons.play();
};

async function getWeather(lat, long) {
  const fixedLat = Number(lat.toFixed(4));
  const fixedLong = Number(long.toFixed(4));

  const corsAnywhereUrl = "https://cors-anywhere.herokuapp.com/";
  const apiUrl = `https://api.darksky.net/forecast/e0391512f84780b1d9fb3bb1f8f708cd/${fixedLat},${fixedLong}`;
  let weatherReq;
  try {
    weatherReq = await fetch(corsAnywhereUrl + apiUrl);
  } catch (e) {
    paintDom(null, false);
    console.error(e);
  }
  const json = await weatherReq.json();
  paintDom(json, true);
}

function paintDom(json, sucessful) {
  if (!sucessful) {
    title.innerText = "Error loading... Please try again later";
    tempValue.innerText = tempUnit.innerText = tempDesc.innerText = "...";
    return;
  }

  const title = document.getElementsByClassName("title")[0];
  const iconCanvas = document.getElementsByClassName("animated-icon")[0];
  const tempValue = document.getElementsByClassName("temp-value")[0];
  const tempUnit = document.getElementsByClassName("temp-unit")[0];
  const tempDesc = document.getElementsByClassName("temp-desc")[0];

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
    .addEventListener("click", function() {
      if (tempUnit.innerText.includes("US")) {
        tempValue.innerText = `Temperature: ${(
          json.currently.temperature -
          32 * (5 / 9)
        ).toFixed(2)}`;
        tempUnit.innerText = "Celsius, EARTH";
      } else {
        tempValue.innerText = `Temperature: ${json.currently.temperature}`;
        tempUnit.innerText = `Fahreinheit, ${json.flags.units.toUpperCase()}`;
      }
    });
}
