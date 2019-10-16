<!DOCTYPE html>
<html>
<title>Pounds to Grams Weight Converter</title>
<body>

<h2>Weight Converter</h2>
<p>Type a value in the Pounds field to convert the value to Grams:</p>

<p>
	<label>lbs</label>
	<input id="inputPounds" type="number" placeholder="Pounds" oninput="weightConverter(this.value)" onchange="weightConverter(this.value)">
</p>
<p>g: <span id="outputGrams"></span></p>

<script>
	function weightConverter(valNum) {
		document.getElementById("outputGrams").innerHTML=valNum/0.0022046;
	}
</script>

</body>
</html>