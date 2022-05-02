$(document).ready(function() {
	window.onload = function() {
		
		/*getPubs();*/
		getBeers();
		document.getElementById("pubInfo").innerText = "Info about selected pub";
		document.getElementById("pubAddressHeader").innerText = "Address";
		document.getElementById("selectedBeer").innerText = "";
		document.getElementById("SB").innerText = "";
		document.getElementById("SP").innerText = "";
	};

/*	$("#addPub").click(function() {
		var pubName = $("#pubName").val();
		var pubAddress = $("#pubAddress").val();
		var obj = { pubName: pubName, location: pubAddress, vibeName: "Cozy", kind: "Pub" };
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
				console.log("Ajax: " + status);
			}
		}
	})//addbtnclick*/

	/*$("#addBeer").click(function() {
		var beerName = $("#beerName").val();
		var beerPrice = $("#beerPrice").val();
		var beerType = $("#beerType").val();
		var obj = { beerName: beerName, beerPrice: beerPrice, beerType: beerType, kind: "Beer" };
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
				console.log("Ajax: " + status);
			}
		} else {
			$("#beerName").attr("placeholder", "Fill out each field!");
		}
	})//addbtnclick
	$("#updatePub").click(function() {
		var pubName = document.getElementById("pubInfo").innerText;
		var pubAddress = $("#pubAddress").val();
		var obj = { pubName: pubName, location: pubAddress, vibeName: "Cozy", kind: "Pub" };
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
				$("#pubName").attr("placeholder", "Could not update");
				console.log("Ajax-find: " + status);
			}
		} else {
			$("#pubAddress").attr("placeholder", "Type the new address here");
		}
	})//uppdatebtnclick
	$("#updateBeer").click(function() {
		var beerName = document.getElementById("selectedBeer").innerText;
		var beerPrice = $("#beerPrice").val();
		var beerType = $("#beerType").val();
		var obj = { beerName: beerName, beerPrice: beerPrice, beerType: beerType, kind: "Beer" };
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
				$("#beerName").attr("placeholder", "Could not update");
				console.log("Ajax-find: " + status);
			}
		} else {
			$("#beerName").attr("placeholder", "Fill out each field!");
		}
	})//uppdatebtnclick

	$("#deletePub").click(function() {
		var pubName = document.getElementById("pubInfo").innerText;
		var obj = { pubName: pubName, location: pubAddress, vibeName: "Cozy", kind: "Pub" };
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
				console.log("Ajax-find: " + status);
			}
		}
	})//btnclick
	$("#deleteBeer").click(function() {
		var beerName = document.getElementById("selectedBeer").name;
		var obj = { beerName: beerName, beerPrice: beerPrice, beerType: beerType, kind: "Beer" };
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
				console.log("Ajax-find: " + status);
			}
		}
	})//btnclick

	$("#addBeerToPub").click(function() {
		pubName = document.getElementById("pubInfo").innerText;
		beerName = document.getElementById("selectedBeer").name;
		var obj = { kind: "beerToPub", pubName: pubName, beerName: beerName };
		var jsonString = JSON.stringify(obj);
		$.ajax({
			method: "POST",
			data: jsonString,
			url: "http://localhost:8080/PubCrawlerClient/PubCrawlerServerlet",
			error: ajaxFindReturnError,
			success: ajaxFindReturnSuccess
		})
		function ajaxFindReturnSuccess(result, status, xhr) {
			getBeersByPub(pubName);
		}
		function ajaxFindReturnError(result, status, xhr) {
			console.log(result);
			console.log(status);
			console.log("Ajax-find beers: " + status);
		}
	})*/

$("#addBeerToPub").click(function() {
			$.ajax({
				method: "GET",
				url: "http://localhost:8080/PubCrawlerClient/PubCrawlerServerlet",
				error: ajaxDelReturnError,
				success: ajaxDelReturnSuccess
			})
			function ajaxDelReturnSuccess(result, status, xhr) {
				console.log("Got!")
			}
			function ajaxDelReturnError(result, status, xhr) {
				console.log("Ajax-find: " + status);
			}
	})

	$.ajax({
		method: "GET",
		url: "http://api.ipstack.com/194.47.249.5?access_key=3f5b716dcff15e58719f97d0b60a0341",
		error: ajaxReturn_Error,
		success: ajaxReturn_Success
	})
	function ajaxReturn_Success(result, status, xhr) {
		ParseJsonFileWeather(result);
	}
	function ajaxReturn_Error(result, status, xhr) {
		console.log("Ajax-api-stack: " + status);
	}

});//End ready function


function getPubs() {
	var obj = { kind: "Pubs" };
	var jsonString = JSON.stringify(obj);
	$.ajax({
		method: "DELETE",
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
			button.setAttribute("onclick", "buttonClick(this.name, this.id)");
			var br = document.createElement("br")
			button.innerText = e.pubName;
			ul.append(button);
			ul.append(br);
		})
	}
	function ajaxFindReturnError(result, status, xhr) {
		console.log("Ajax-find pubs: " + status);
	}
}

function getBeers() {
	var obj = { kind: "Beers" };
	var jsonString = JSON.stringify(obj);
	$.ajax({
		method: "DELETE",
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
			button.setAttribute("id", e.beerPrice + "kr - " + e.beerType);
			button.setAttribute("onclick", "beerButtonClicked(this.name, this.id)");
			var br = document.createElement("br");
			button.innerText = e.beerName;
			ul.append(button);
			ul.append(br);
		})
	}
	function ajaxFindReturnError(result, status, xhr) {
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
		var pubAddress = document.getElementById("pubAddressHeader");
		pubAddress.innerText = result.address;
		getBeersByPub(name)
	}
	function ajaxFindReturnError(result, status, xhr) {
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
		console.log("Ajax-find beers: " + status);
	}
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
	pubInf.innerText = String;
	getPubInfo(String);
	var SP = document.getElementById("SP");
	SP.setAttribute("value", String);
}

function beerButtonClicked(name, priceAndType) {
	var selectedBeer = document.getElementById("selectedBeer");
	var SB = document.getElementById("SB");
	selectedBeer.innerText = name + " " + priceAndType;
	selectedBeer.name = name;
	SB.setAttribute("value", name);
	
}

function clicked() {
	button.classList.toggle('active');
}

	       $(document).ready(function () {
        $.ajax({
            method: "GET",
            url: "http://api.ipstack.com/84.55.116.250?access_key=4a2afa8f74c876cac2ce672cbf42b8e4",
             error: ajaxReturn_Error,
            success: ajaxReturn_Success
        })
        function ajaxReturn_Success(result, status, xhr) {
            ParseJsonFile(result);
        }
        function ajaxReturn_Error(result, status, xhr) {
            console.log("Ajax-api-stack: " + status);
        }
    });//End ready function 
    function ParseJsonFile(result) {
        var lat = result.latitude;
        var long = result.longitude;
        var city = result.city;
        var ipNbr = result.ip
        $("#city").text(city);
        $("#ipNbr").text(ipNbr);
        $.ajax({
            method: "GET",
            url:
                "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + long + "&units= metric" + "&APPID=d16e8687b228762ca06d991d5e25e465",
                error: ajaxWeatherReturn_Error,
            success: ajaxWeatherReturn_Success
        })

        function ajaxWeatherReturn_Success(result, status, xhr) {
            var sunrise = result.sys.sunrise;
            var sunset = result.sys.sunset;

            var sunriseDate = new Date(sunrise * 1000);
            var timeStrSunrise = sunriseDate.toLocaleTimeString("sv-SE");
            var sunsetDate = new Date(sunset * 1000);
            var timeStrSunset = sunsetDate.toLocaleTimeString("sv-SE");

            $("#sunrise").text("Sunrise: " + timeStrSunrise);
            $("#sunset").text("Sunset: " + timeStrSunset);

            $("#weather").text(result.weather[0].main);

            $("#degree").text((result.main.temp - 273.15).toFixed(2) + " \u2103");
        }//ajaxWeatherReturn_Success 

        function ajaxWeatherReturn_Error(result, status, xhr) {
            console.log("Error i OpenWeaterMap Ajax");
        }
    }
	

