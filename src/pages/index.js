<!DOCTYPE HTML>
<html>
<head>
    <meta charset="UTF-8" />

</head>
<style>

</style>
<script type="text/javascript" src="https://sdk.clarifai.com/js/clarifai-latest.js"></script>
<script src="guessThatFood.js"></script>
<body>

    <textarea id="thisLink"  name="message" rows="10" cols="30">
    
    </textarea> 

    <input type="submit" onclick="guessThisFood(document.getElementById('thisLink').value)" />

    <pre id="results"></pre>

</body>
</html>
