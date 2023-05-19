<!DOCTYPE html>
<html>
<body>

<h1>Onboarding Cost Savings Calculator</h1>

<p>Number of New Hires: <span id="demo"></span></p>

<input type="range" min="3" max="100" value="3" class="slider" id="myRange">

<p id="savings"></p>

<script>
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
  var avgOnboardingCost = 4000; // Average onboarding cost per employee
  var hrTimeReduction = 0.3; // HR time reduction with automated onboarding
  var potentialSavings = this.value * avgOnboardingCost * hrTimeReduction;
  document.getElementById("savings").innerHTML = "Potential Savings: $" + potentialSavings;
}
</script>

</body>
</html>
