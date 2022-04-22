<%@ page import="org.ics.ejb.Pub"%>
<%@ page import="org.ics.ejb.Beer"%>

<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<title>PubCrawler</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js">
	
</script>
<script src="js/PubCrawlerJs.js"></script>
<style>
* {
	box-sizing: border-box;
	column-gap: 10px;
}

/* Create three equal columns that floats next to each other */
.column {
	float: left;
	border: 1px solid black;
	padding: 2px;
	height: 500px;
	background-color: #cecfc8;
}

.buttonColumnLeft {
	float: right;
	border: 1px solid black;
	padding: 5px;
	background-color: #cecfc8;
}

.buttonColumnRight {
	float: left;
	border: 1px solid black;
	padding: 2px;
	background-color: #cecfc8;
}
</style>
</head>
<body>

	<h2>PubCrawler</h2>
	<div class="row">
		<div class="column" style="width: 20%;">
			<h2>Pubs</h2>
			<hr></hr>
			<div class=cointainer>
				<ul id="pubList" name="pubList"></ul>
			</div>

		</div>
		<div class="column" style="width: 10%">
			<p>
				<input type="text" id="pubName" name="pubName"
					placeholder="Pub name"></input>
			</p>
			<p>
				<input type="text" id="pubAddress" name="pubAddress"
					placeholder="Address"></input>
			</p>
			<p>
				<input type="button" id="addPub" name="addPub"
					value="<- Add this pub"></input>
			</p>
			<p>
				<input type="button" id="updatePub" name="updatePub"
					value="Update selected pub"></input>
			</p>
			<p>
				<input type="button" id="deletePub" name="deletePub"
					value="Delete selected pub"></input>
			</p>

		</div>
		<div class="column" style="width: 40%">
			<h2>Info about selected pub</h2>
			<hr></hr>
			<p>Address, beers with prices and types</p>
		</div>
		<div class="column" style="width: 10%">
			<p>
				<input type="text" id="beerName" placeholder="Beer name"></input>
			</p>
			<p>
				<input type="text" id="beerPrice" placeholder="Price"></input>
			</p>
			<p>
				<input type="text" id="beerType" placeholder="Type"></input>
			</p>
			<p>
				<input type="button" id="addBeer" value="Add beer ->"></input>
			</p>
			<p>
				<input type="button" id="updateBeer" value="Update selected beer"></input>
			</p>
			<p>
				<input type="button" id="deleteBeer" value="Delete selected beer"></input>
			</p>
			<p>
				<input type="button" id="addBeerToPub"
					value="<- Add beer to selected pub"></input>
			</p>
		</div>
		<div class="column" style="width: 20%">
			<h2>Beers</h2>
			<hr></hr>
			<p>List of every available beer</p>
		</div>
	</div>
</body>
</html>
