function calculateBunking() {
  var totalHours = parseFloat(document.getElementById('totalHours').value);
  var requiredAttendancePercentage = 0.75;
  var maximumBunkableHours = totalHours * (1 - requiredAttendancePercentage);

  var resultElement = document.getElementById('result');
  resultElement.textContent = "Maximum Bunkable Hours: " + maximumBunkableHours.toFixed(2) + " hours";
}
