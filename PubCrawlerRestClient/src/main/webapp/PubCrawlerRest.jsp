<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="RestClient.css">
<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js">
</script>
<script src="PubCrawlerRest.js"></script>
<meta charset="ISO-8859-1">
<title>PubCrawler Rest Client</title>
</head>
<body>

	<button id="getAllPubs" name="getAllPubs" class="restButton1"
		onclick="getAllPubs">Get all pubs!</button>
	<br>
	<button id="getAllBeers" name="getAllBeers" class="restButton2">Get
		all beers!</button>
	<br>
		<button id="getAllServes" name="getAllServes" class="restButton3">What pubs serves which beers?</button>
	<br>
	<div class="resultArea" id="resultArea"></div>

</body>
</html>
