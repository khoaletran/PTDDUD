//Coding Challenge 1 
const whereAmI = function (lat, lng) {
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error (${response.status})`);
      }
      return response.json();
    })
    .then(data => {
      if (data.city === "Throttled! See geocode.xyz/pricing") {
        throw new Error("API bị giới hạn request (Throttled)");
      }

      console.log(data);
      console.log(`You are in ${data.city}, ${data.country}`);
    })
    .catch(err => {
      console.error(`Lỗi: ${err.message}`);
    });
};


whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);

//Coding Challenge 2