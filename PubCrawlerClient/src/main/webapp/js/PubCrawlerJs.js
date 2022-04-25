$(document).ready(function() {
	window.onload = function() {
		getPubs();
		getBeers();
		const button = document.getElementsByClassName(".button");
		document.getElementById("pubAddressHeader").innerText = "Address";
		console.log(document.getElementById("pubAddressHeader"));
		//button.addEventListener('click',clicked);
		console.log(button);
	};
	buttonClick("Info about selected pub");

	$("#addPub").click(function() {
		var pubName = $("#pubName").val();
		var pubAddress = $("#pubAddress").val();
		var obj = { pubName: pubName, location: pubAddress, vibeName: "Cozy", beerName: null, beerPrice: null, beerType: null, kind: "Pub" };
		var jsonString = JSON.stringify(obj);
		if (pubName != "" && pubAddress != "") {
			$.ajax({
				method: "POST",
				url: "http://localhost:8080/PubCrawlerClient/PubCrawlerServerlet",
				data: jsonString,
				dataType: 'json',
				error: ajaxAddReturnError,
				success: ajaxAddReturnSuccess
			})
			function ajaxAddReturnSuccess(result, status, xhr) {
				clearFields();
				$("#pubName").attr("placeholder", "Pub added");
				clearList(document.getElementById("pubList"));
				getPubs();
			}
			function ajaxAddReturnError(result, status, xhr) {
				alert("Error Add");
				console.log("Ajax: " + status);
			}
		}
	})//addbtnclick

	$("#addBeer").click(function() {
		var beerName = $("#beerName").val();
		var beerPrice = $("#beerPrice").val();
		var beerType = $("#beerType").val();
		var obj = { beerName: beerName, beerPrice: beerPrice, beerType: beerType, pubName: null, location: null, vibeName: null, kind: "Beer" };
		var jsonString = JSON.stringify(obj);
		if (beerName != "" && beerPrice != "" && beerType != "") {
			$.ajax({
				method: "POST",
				url: "http://localhost:8080/PubCrawlerClient/PubCrawlerServerlet",
				data: jsonString,
				dataType: 'json',
				error: ajaxAddReturnError,
				success: ajaxAddReturnSuccess
			})
			function ajaxAddReturnSuccess(result, status, xhr) {
				clearFields();
				$("#beerName").attr("placeholder", "Beer added");
				clearList(document.getElementById("beerList"));
				getBeers();
			}
			function ajaxAddReturnError(result, status, xhr) {
				alert("Error Add");
				console.log("Ajax: " + status);
			}
		}
	})//addbtnclick
	$("#updatePub").click(function() {
		var pubName = $("#pubName").val();
		var pubAddress = $("#pubAddress").val();
		var obj = { pubName: pubName, location: pubAddress, vibeName: "Cozy", beerName: null, beerPrice: null, beerType: null, kind: "Pub" };
		var jsonString = JSON.stringify(obj);
		if (pubName != "" && pubAddress != "") {
			$.ajax({
				method: "PUT",
				url: "http://localhost:8080/PubCrawlerClient/PubCrawlerServerlet",
				data: jsonString,
				dataType: 'json',
				error: ajaxUpdateReturnError,
				success: ajaxUpdateReturnSuccess
			})
			function ajaxUpdateReturnSuccess(result, status, xhr) {
				clearFields();
				$("#pubName").attr("placeholder", "Pub updated");
				clearList(document.getElementById("pubList"));
				getPubs();
			}
			function ajaxUpdateReturnError(result, status, xhr) {
				alert("Error Update");
				console.log("Ajax-find: " + status);
			}
		}
	})//uppdatebtnclick
	$("#updateBeer").click(function() {
		var beerName = $("#beerName").val();
		var beerPrice = $("#beerPrice").val();
		var beerType = $("#beerType").val();
		var obj = { beerName: beerName, beerPrice: beerPrice, beerType: beerType, pubName: null, location: null, vibeName: null, kind: "Beer" };
		var jsonString = JSON.stringify(obj);
		if (beerName != "" && beerPrice != "" && beerType != "") {
			$.ajax({
				method: "PUT",
				url: "http://localhost:8080/PubCrawlerClient/PubCrawlerServerlet",
				data: jsonString,
				dataType: 'json',
				error: ajaxUpdateReturnError,
				success: ajaxUpdateReturnSuccess
			})
			function ajaxUpdateReturnSuccess(result, status, xhr) {
				clearFields();
				$("#beerName").attr("placeholder", "Beer updated");
				clearList(document.getElementById("beerList"));
				getBeers();
			}
			function ajaxUpdateReturnError(result, status, xhr) {
				alert("Error Update");
				console.log("Ajax-find: " + status);
			}
		}
	})//uppdatebtnclick

	$("#deletePub").click(function() {
		var pubName = $("#pubName").val();
		var obj = { pubName: pubName, location: pubAddress, vibeName: "Cozy", beerName: null, beerPrice: null, beerType: null, kind: "Pub" };
		var jsonString = JSON.stringify(obj);
		if (pubName != "") {
			$.ajax({
				method: "DELETE",
				data: jsonString,
				url: "http://localhost:8080/PubCrawlerClient/PubCrawlerServerlet",
				error: ajaxDelReturnError,
				success: ajaxDelReturnSuccess
			})
			function ajaxDelReturnSuccess(result, status, xhr) {
				clearFields();
				$("#pubName").attr("placeholder", "Pub deleted");
				clearList(document.getElementById("pubList"));
				getPubs();
			}
			function ajaxDelReturnError(result, status, xhr) {
				alert("Error");
				console.log("Ajax-find: " + status);
			}
		}
	})//btnclick
	$("#deleteBeer").click(function() {
		var beerName = $("#beerName").val();
		var obj = { beerName: beerName, beerPrice: beerPrice, beerType: beerType, pubName: null, location: null, vibeName: null, kind: "Beer" };
		var jsonString = JSON.stringify(obj);
		if (beerName != "") {
			$.ajax({
				method: "DELETE",
				data: jsonString,
				url: "http://localhost:8080/PubCrawlerClient/PubCrawlerServerlet",
				error: ajaxDelReturnError,
				success: ajaxDelReturnSuccess
			})
			function ajaxDelReturnSuccess(result, status, xhr) {
				clearFields();
				$("#beerName").attr("placeholder", "Beer deleted");
				clearList(document.getElementById("beerList"));
				getBeers();
			}
			function ajaxDelReturnError(result, status, xhr) {
				alert("Error");
				console.log("Ajax-find: " + status);
			}
		}
	})//btnclick

});//End ready function

function getPubs() {
	var obj = { kind: "Pubs" };
	var jsonString = JSON.stringify(obj);
	$.ajax({
		method: "POST",
		data: jsonString,
		url: "http://localhost:8080/PubCrawlerClient/PubCrawlerServerlet",
		error: ajaxFindReturnError,
		success: ajaxFindReturnSuccess
	})
	function ajaxFindReturnSuccess(result, status, xhr) {
		var ul = document.getElementById("pubList");
		result.forEach(function(e) {
			var button = document.createElement("button")
			button.setAttribute("class", "pubButton");
			button.setAttribute("name", e.pubName);
			button.setAttribute("onclick", "buttonClick(this.name)");
			var br = document.createElement("br")
			button.innerText = e.pubName;
			ul.append(button);
			ul.append(br);
		})
	}
	function ajaxFindReturnError(result, status, xhr) {
		alert("Error");
		console.log("Ajax-find pubs: " + status);
	}
}

function getBeers() {
	var obj = { kind: "Beers" };
	var jsonString = JSON.stringify(obj);
	$.ajax({
		method: "POST",
		data: jsonString,
		url: "http://localhost:8080/PubCrawlerClient/PubCrawlerServerlet",
		error: ajaxFindReturnError,
		success: ajaxFindReturnSuccess
	})
	function ajaxFindReturnSuccess(result, status, xhr) {
		var ul = document.getElementById("beerList");
		result.forEach(function(e) {
			var button = document.createElement("button");
			button.setAttribute("class", "beerButton");
			button.setAttribute("name", e.beerName);
			var br = document.createElement("br");
			button.innerText = e.beerName;
			ul.append(button);
			ul.append(br);
		})
	}
	function ajaxFindReturnError(result, status, xhr) {
		alert("Error");
		console.log("Ajax-find beers: " + status);
	}
}

function getPubInfo(name) {
	var obj = { kind: "PubInfo", pubName: name };
	var jsonString = JSON.stringify(obj);
	$.ajax({
		method: "POST",
		data: jsonString,
		url: "http://localhost:8080/PubCrawlerClient/PubCrawlerServerlet",
		error: ajaxFindReturnError,
		success: ajaxFindReturnSuccess
	})
	function ajaxFindReturnSuccess(result, status, xhr) {
		address = result.address;
		getBeersByPub(name)
	}
	function ajaxFindReturnError(result, status, xhr) {
		alert("Error");
		console.log("Ajax-find beers: " + status);
	}
}

function getBeersByPub(name) {
	var obj = { kind: "beersBypub", pubName: name };
	var jsonString = JSON.stringify(obj);
	$.ajax({
		method: "POST",
		data: jsonString,
		url: "http://localhost:8080/PubCrawlerClient/PubCrawlerServerlet",
		error: ajaxFindReturnError,
		success: ajaxFindReturnSuccess
	})
	function ajaxFindReturnSuccess(result, status, xhr) {
		clearList(document.getElementById("servesList"));
		var ul = document.getElementById("servesList");
		result.forEach(function(e) {
			var li = document.createElement("li");
			li.innerText = e.beerName;
			ul.append(li);
		})
	}
	function ajaxFindReturnError(result, status, xhr) {
		alert("Error");
		console.log("Ajax-find beers: " + status);
	}
}

function ParseJsonFilePub(result) {
	$("#pubName").val(result.pubName);
	$("#pubAddress").val(result.pubAddress);
}
function ParseJsonFileBeer(result) {
	$("#beerName").val(result.beerName);
	$("#beerPrice").val(result.beerPrice);
	$("#beerType").val(result.beerType);
}
function clearFields() {
	$("#pubName").val("");
	$("#pubAddress").val("");
	$("#beerName").val("");
	$("#beerPrice").val("");
	$("#beerType").val("");
}

function clearList(list) {
	while (list.firstChild) {
		list.removeChild(list.firstChild)
	}
}

function buttonClick(String) {
	var pubInf = document.getElementById("pubInfo");
	var pubAddress = document.getElementById("pubAddressHeader");
	pubInf.innerText = String;
	getPubInfo(String);
	pubAddress.innerText = address;
}

function clicked() {
	button.classList.toggle('active');
}
