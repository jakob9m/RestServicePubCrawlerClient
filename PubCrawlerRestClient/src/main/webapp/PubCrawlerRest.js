$(document).ready(function() {
	window.onload = function() {
		var resultArea = document.getElementById("resultArea");
	};

	$("#getAllPubs").click(function() {
		var obj = { kind: "Pubs" };
		var jsonString = JSON.stringify(obj);
		$.ajax({
			method: "POST",
			data: jsonString,
			url: "http://localhost:8080/PubCrawlerRestClient/PubCrawlerRestServerlet",
			error: ajaxFindReturnError,
			success: ajaxFindReturnSuccess
		})
		function ajaxFindReturnSuccess(result, status, xhr) {
			var resultArea = document.getElementById("resultArea");
			resultArea.innerText = "";
			result.forEach(function(e) {
				resultArea.innerText += e.pubName + "\n";
			})
		}
		function ajaxFindReturnError(result, status, xhr) {
			console.log("Ajax-find pubs: " + status);
		}
	})

	$("#getAllBeers").click(function() {
		var obj = { kind: "Beers" };
		var jsonString = JSON.stringify(obj);
		$.ajax({
			method: "POST",
			data: jsonString,
			url: "http://localhost:8080/PubCrawlerRestClient/PubCrawlerRestServerlet",
			error: ajaxFindReturnError,
			success: ajaxFindReturnSuccess
		})
		function ajaxFindReturnSuccess(result, status, xhr) {
			var resultArea = document.getElementById("resultArea");
			resultArea.innerText = "";
			result.forEach(function(e) {
				resultArea.innerText += e.beerName + "\n";
			})
		}
		function ajaxFindReturnError(result, status, xhr) {
			console.log("Ajax-find beers: " + status);
		}
	})

	$("#getAllServes").click(function() {
		$.ajax({
			method: "GET",
			url: "http://localhost:8080/PubCrawlerRestClient/PubCrawlerRestServerlet",
			error: ajaxFindReturnError,
			success: ajaxFindReturnSuccess
		})
		function ajaxFindReturnSuccess(result, status, xhr) {
			var resultArea = document.getElementById("resultArea");
			resultArea.innerText = "";
			result.forEach(function(e) {
				resultArea.innerText += e.pubName + " serves " + e.beerName + "\n";
			})
		}
		function ajaxFindReturnError(result, status, xhr) {
			console.log("Ajax-find beers: " + status);
		}
	})

});//End ready function

