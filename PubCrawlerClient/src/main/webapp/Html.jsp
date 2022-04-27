<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta charset="utf-8">
<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js">
	
</script>
<script src="js/PubCrawlerJs.js"></script>
<title>Pub Crawler</title>
<link rel="stylesheet" href="css/StyleSheet.css">
</head>
<body>
	<div>
		<img class=headerLogo src="css/PubCrawlerLogo.jpg" alt="">
	</div>
	<h1 class="header1">
		<span class="pubCrawlerTitle">Pub Crawler </span> <br>
	</h1>
	<div>
		<nav class=NavigationMenu>
			<ul class=navigationContainer>
				<li><a href="Html.jsp" class=btnHome>Home </a></li>
				<li><a href="AboutHTML.jsp" class=btnAbout>About</a></li>
				<li><a href="Test.jsp" class=btnTest>Test</a></li>
			</ul>
		</nav>
	</div>
	<div class="">
		<h4 class="pubsTitle">Pubs</h4>
	</div>
	<div class="">
		<h4 class="infoTitle">Info about selected pub</h4>
		<span class="beersTitle">Beers</span> <br>
	</div>
	<main>
		<div class=PubColumn>
			<div class=container>
				<ul id="pubList"></ul>
			</div>
		</div>
		<div class=BeerColumn>
			<p class=selectedBeer id="selectedBeer">Info about selected Beer:</p>
			<ul id="beerList"></ul>
		</div>
		<div class="ServesColumn">
			<h2 class=ServesPubInfo id="pubInfo"></h2>
			<h3 class=PubAddressHeader id="pubAddressHeader">Address</h3>
			<p class=ServesTitle>This pub serves:</p>
			<ul class=servesLists id="servesList"></ul>
		</div>
		<aside>
			<table id="asideTable">
				<tr>
					<th><span id="city"></span></th>
					<th><span></span></th>
					<th><span></span></th>
					<th><span id="ipNbr"></span></th>
				</tr>
				<tr>
					<td><span id="degree"></span></td>
					<td><span id="weather"></span></td>
					<td><span></span></td>
					<td><span></span></td>
				</tr>
				<tr>
					<td colspan="4"><span id="sunrise"></span></td>
				</tr>
				<tr>
					<td colspan="4"><span id="sunset"></span></td>
				</tr>
			</table>
		</aside>

		<form class="BeerForm">
			<label for="beerName" class="u-label">Brand:</label> <input
				type="text" placeholder="E.g. Karneöl..." id="beerName" name="name"
				class="placeholders">
			<div>
				<label for="beerPrice" class="u-label">Price:</label> <input
					type="text" placeholder="E.g. 25 Kr..." id="beerPrice" name="price"
					class="placeholders">
			</div>
			<label for="beerType" class="u-label">Type: </label> <input
				type="text" placeholder="E.g. Lager..." id="beerType" name="type"
				class="placeholders">
			<div>
				<br> <br> <input type="button" value="Add Beer"
					id="addBeer" class="crudButtonsBeer"><br> <br> <input
					type="button" class="crudButtonsBeer" id="updateBeer"
					value="Update selected beer"><br> <br> <input
					type="button" class="crudButtonsBeer" id="deleteBeer"
					value="Delete selected Beer"><br>
			</div>
		</form>


		<form class="PubForm">
			<label for="pubName" class="u-label">Name:</label> <input type="text"
				placeholder="E.g Barrbaren...." id="pubName" name="name"
				class="placeholders">
			<div>
				<label for="pubAddress" class="u-label">Address: </label> <input
					type="text" placeholder="E.g. Examplestreet 1..." id="pubAddress"
					name="address" class="placeholders">
			</div>
			<div>
				<br> <br> <input type="button" value="Add pub" id="addPub"
					class="crudButtonsPub"><br> <br> <input
					type="button" class="crudButtonsPub" id="updatePub"
					value="Update selected pub"><br> <br> <input
					type="button" class="crudButtonsPub" id="deletePub"
					value="Delete selected pub"><br>
			</div>
		</form>

		<input type="button" class="btnAddBeerToSelPub" id="addBeerToPub"
			value="Add beer to selected pub"> <br>
	</main>
	<footer>
		<p class=footerText>
			Copyright &copy; PubCrawler.com <img class=footerLogo
				src="css/PubCrawlerLogo.jpg" alt="">
		</p>
	</footer>
</body>
</html>