document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('flightForm');
  const startAirport = document.getElementById('startAirport');
  const landingAirport = document.getElementById('landingAirport');
  const hours = document.getElementById('hours');
  const date = document.getElementById('date');

  startAirport.setAttribute('maxlength', '3');
  landingAirport.setAttribute('maxlength', '3');
  hours.setAttribute('min', '1');
  startAirport.setAttribute('required', '');
  landingAirport.setAttribute('required', '');
  hours.setAttribute('required', '');
  date.setAttribute('required', '');

  const colorChangeMark = document.getElementById('colorChangeMark');
  const selectedTheme = document.getElementById('selectedTheme');

  document.getElementById('nightFlight').addEventListener('click', function() {
    selectedTheme.value = 'night';
    colorChangeMark.className = 'night';
    colorChangeMark.style.display = 'block';
  });

  document.getElementById('dayFlight').addEventListener('click', function() {
    selectedTheme.value = 'day';
    colorChangeMark.className = 'day';
    colorChangeMark.style.display = 'block';
  });

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    if (!/^[A-Za-z]{3}$/.test(startAirport.value) || !/^[A-Za-z]{3}$/.test(landingAirport.value)) {
      alert("Please enter valid 3-letter airport codes for both starting and landing airports.");
      return;
    }
    if (!selectedTheme.value) {
      alert("Please select either Day Flight or Night Flight.");
      return;
    }
    alert("Flight log submitted successfully.");
  });
});
