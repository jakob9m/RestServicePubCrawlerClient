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
	<section class="" id="">
		<div> 
		<img class = headerLogo src ="css/PubCrawlerLogo.jpg" alt="">
		</div>
		<h1 class="header1">
			<span class="pubCrawlerTitle">Pub Crawler </span> <br>
		</h1>
		<div>
			<nav class=NavigationMenu>
				<ul class=navigationContainer>
					<li><a href="Html.jsp" class=btnHome>Home </a></li>
					<li><a href="AboutHTML.jsp" class=btnAbout>About</a></li>
					<li><a href="Test.jps" class=btnTest>Test</a></li>
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
		<div class=PubColumn>
			<div class=container>
				<ul id="pubList"></ul>
			</div>
		</div>
		<div class=BeerColumn>
			<p class = selectedBeer id="selectedBeer"></p>
			<ul id="beerList"></ul>
		</div>
		<div class="ServesColumn">
			<h2 class = ServesPubInfo id="pubInfo"></h2>
			<h3 class = PubAddressHeader id="pubAddressHeader">Address</h3>
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
				class="txtBeerName">
			<div>
				<label for="beerPrice" class="u-label">Price:</label> <input
					type="text" placeholder="E.g. 25 Kr..." id="beerPrice" name="price"
					class="txtPrice">
			</div>
			<div class="">
				<label for="beerType" class="u-label">Type: </label> <input
					type="text" placeholder="E.g. Lager..." id="beerType" name="type"
					class="txtType">
			</div>
			<div>
				<input type="button" value="Add Beer" id="addBeer"
					class="btnAddBeer">
			</div>
		</form>
			<form class="PubForm">
				<div class="">
					<label for="pubName">Name:</label> <input type="text"
						placeholder="E.g Barrbaren...." id="pubName" name="name"
						class="TxtPubName">
				</div>
				<label for="pubAddress" class="addressLabel">Address: </label> <input
					type="text" placeholder="E.g. Examplestreet 1..." id="pubAddress"
					name="address" class="TxtPubAddress">
				<div class="">
					<input type="button" value="Add pub" id="addPub" class="btnAddPub">
				</div>
			</form>
		<form class="UpdDelBeerForm">
			<input type="button" class="btnUpdateSelBeer" id="updateBeer"
				value="Update selected beer"> <br> <input type="button"
				class="btnDeleteSelBeer" id="deleteBeer"
				value="Delete selected Beer"> <br>
		</form>
		<form class="UpdDelPubForm">
			<input type="button" class="btnUpdateSelPub" id="updatePub"
				value="Update selected pub"> <br> <input type="button"
				class="btnDeleteSelPub" id="deletePub" value="Delete selected pub">
			<br>
		</form>
		<input type="button" class="btnAddBeerToSelPub" id="addBeerToPub"
			value="Add beer to selected pub"> <br>
	</section>
	<footer>
		<p class=footerText>Copyright &copy; PubCrawler.com <img class = footerLogo src ="css/PubCrawlerLogo.jpg" alt=""></p>
	</footer>
</body>
</html>