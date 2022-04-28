<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>PubCrawler Test</title>
<link rel="stylesheet" href="css/Test.css">
</head>
<body>
		<div class = header>  
	<img class = headerLogo src ="css/PubCrawlerLogo.jpg" alt="">
		
<h1 class="header1">
			<span class="TestTitle">Test of PubCrawler </span> <br>
		</h1>
<nav class=NavigationMenu>
				<ul class=navigationContainer>
				<li><a href="Html.jsp" class=btnHome>Home </a></li>
					<li><a href="AboutHTML.jsp" class=btnAbout>About</a></li>
					<li><a href="Test.jsp" class=btnTest>Test</a></li>
				</ul>
			</nav>
			<form class=TestColumn action="TestServlet" method="get" name="youPickItForm">
		<select name="suite"  multiple>
			<option value="ics.junit.ejb.FacadeTest">
				Testa Facade</option>
		</select> <input type="submit" class ="TestingButton" value="Run" />
	</form>
			<footer>
		<p class=footerText>Copyright &copy; PubCrawler.com</p>
	</footer>
</body>
</html>