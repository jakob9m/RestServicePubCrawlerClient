<!DOCTYPE html>
<%@page import="org.ics.facade.Facade"%>
<%@page import="javax.servlet.jsp.tagext.TryCatchFinally"%>
<%@page import="org.ics.ejb.Pub"%>
<%@page import="org.ics.ejb.is.PubCrawlerServerlet"%>
<%@page import="org.ics.ejb.Serves"%>
<%@page import="java.util.ArrayList"%>
<%@page import="javax.ejb.EJB"%>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta charset="utf-8">
<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js">
	
</script>
<!-- <script src="js/PubCrawlerJs.js"></script> -->
<title>Pub Crawler</title>
<link rel="stylesheet" href="css/StyleSheet.css">
</head>
<body>
	<div class=header>
		<img class=headerLogo src="css/PubCrawlerLogo.jpg" alt="">

		<h1 class="pubCrawlerTitle">Pub Crawler</h1>
		<div>
			<nav class=NavigationMenu>
				<ul class=navigationContainer>
					<li><a href="Html.jsp" class=btnHome>Home </a></li>
					<li><a href="AboutHTML.jsp" class=btnAbout>About</a></li>
					<li><a href="Test.jsp" class=btnTest>Test</a></li>
				</ul>
			</nav>
		</div>
	</div>
	<div class="">
		<h4 class="pubsTitle">Pubs</h4>
	</div>
	<div class="">
		<h4 class="infoTitle">Info about selected pub</h4>
		<span class="beersTitle">Beers</span> <br>
	</div>
	<main>
	<form name="pubListForm" action="/PubCrawlerClient/PubCrawlerServerlet" method="GET">
		<div class=PubColumn>
			<div class=container>
				<ul id="pubList"></ul>
		<% ArrayList<Pub> pubs = (ArrayList<Pub>)request.getAttribute("getAllPubs");%>
		<% for(Pub pub : pubs){ %>
		<%String pubName = pub.getpubName(); %>
		<%String pubAddress = pub.getLocation(); %>
			<button class="pubButton" name="<%=pubName%>" id="<%=pubAddress%>" onclick="buttonClick(<%=pubName%>, <%=pubAddress%>)"><%=pubName%></button>
		<% }%>
				<input type="hidden" id="pubListInput" name="pubListInput" class="placeholders">
			</div>
		</div>	
	</form>
	
	<form name="beerListForm" action="/PubCrawlerClient/PubCrawlerServerlet" method="GET">
		<div class=BeerColumn>
			<p class=selectedBeer id="selectedBeer">Info about selected Beer:</p>
			<ul id="beerList"></ul>
		<% ArrayList<String> beerNames = (ArrayList<String>)request.getAttribute("allBeers");%>
		<% for(String beer : beerNames){ %>
			<button class="pubButton"><%=beer%></button>
		<% }%>
			
		</div>	
	</form>
		<div class="ServesColumn">
		<%-- <%!public void buttonClick(String pubName, String pubAddress){
			String name = pubName;
			String address = pubAddress;
		%>	<h2 class=ServesPubInfo id="pubInfo" name="pubInfo"><%!name%></h2>	
			<h3 class=PubAddressHeader id="pubAddressHeader"><%!address%></h3>
		<%!} %> --%>
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

		<form class="BeerForm" action="/PubCrawlerClient/PubCrawlerServerlet"
			method="post">
			<label for="beerName" class="u-label">Brand:</label> <input
				type="text" placeholder="E.g. Karneöl..." id="beerName"
				name="beerName" class="placeholders">
			<div>
				<label for="beerPrice" class="u-label">Price:</label> <input
					type="text" placeholder="E.g. 25 Kr..." id="beerPrice"
					name="beerPrice" class="placeholders">
			</div>
			<label for="beerType" class="u-label">Type: </label> <input
				type="text" placeholder="E.g. Lager..." id="beerType"
				name="beerType" class="placeholders">
			<div>
				<br> <br> <input type="submit" name="operation"
					value="Add beer" id="addBeer" class="crudButtonsBeer"><br>
				<br> <input type="submit" name="operation"
					value="Update selected beer" onclick="selectbeer()"
					class="crudButtonsBeer" id="updateBeer"><br> <br>
				<input type="submit" name="operation" value="Delete selected beer"
					onclick="selectbeer()" class="crudButtonsBeer" id="deleteBeer"><br>
				<input type="hidden" id="SB" name="SB" class="placeholders">

			</div>
		</form>


		<form class="PubForm" action="/PubCrawlerClient/PubCrawlerServerlet"
			method="post">
			<label for="pubName" class="u-label">Name:</label> <input type="text"
				placeholder="E.g Barrbaren...." id="pubName" name="pubName"
				class="placeholders">
			<div>
				<label for="pubAddress" class="u-label">Address: </label> <input
					type="text" placeholder="E.g. Examplestreet 1..." id="pubAddress"
					name="pubAddress" class="placeholders">
			</div>
			<div>
				<br> <br> <input type="submit" name="operation"
					value="Add pub" id="addPub" class="crudButtonsPub"><br>
				<br> <input type="submit" name="operation"
					value="Update selected pub" class="crudButtonsPub" id="updatePub"><br>
				<br> <input type="submit" name="operation"
					value="Delete selected pub" class="crudButtonsPub" id="deletePub"><br>
				<input type="hidden" id="SP" name="SP" class="placeholders">
			</div>
		</form>

		<form action="/PubCrawlerClient/PubCrawlerServerlet" method="GET">
			<input type="button" class="btnAddBeerToSelPub" id="addBeerToPub"
				value="Add beer to selected pub"></input>
		</form>
		<br>
	</main>
	<footer>
		<p class=footerText>
			Copyright &copy; PubCrawler.com <img class=footerLogo
				src="css/PubCrawlerLogo.jpg" alt="">
		</p>
	</footer>
</body>
</html>