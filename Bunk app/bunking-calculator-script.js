function calculateBunking() {
  var totalHours = parseFloat(document.getElementById('totalHours').value);
  var absentHours = parseFloat(document.getElementById('absentHours').value) || 0; // Default to 0 if not provided
  var attendanceLimit = parseFloat(document.getElementById('attendanceLimit').value) || 75; // Default to 75 if not provided
  var requiredAttendancePercentage = attendanceLimit / 100;

  // Bunking logic for maintaining >= user-specified attendance limit
  var maximumBunkableHours = totalHours * (1 - requiredAttendancePercentage);

  // Calculate remaining bunkable hours after considering current absentee hours
  var remainingBunkableHours = Math.max(0, maximumBunkableHours - absentHours);

  // Calculate current attendance percentage
  var currentAttendancePercentage = ((totalHours - absentHours) / totalHours) * 100;

  // Display the result
  var resultElement = document.getElementById('result');
  resultElement.textContent = "Remaining Bunkable Hours: " + remainingBunkableHours.toFixed(2) + " hours";

  var currentAttendanceElement = document.getElementById('currentAttendance');
  currentAttendanceElement.textContent = "Current Attendance Percentage: " + currentAttendancePercentage.toFixed(2) + "%";
}

function redirectToInfoPage() {
  window.location.href = "bunking-info.html";
}
