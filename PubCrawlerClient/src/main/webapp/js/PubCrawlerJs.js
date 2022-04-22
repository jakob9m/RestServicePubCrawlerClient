$(document).ready(function() {
	//$("#showPubs").click(function() {
		//$.ajax({
			//method: "GET",
			//url: "http://localhost:8080/PubCrawlerClient/PubCrawlerServerlet",
			//error: ajaxFindReturnError,
			//success: ajaxFindReturnSuccess
		//})
		//function ajaxFindReturnSuccess(result, status, xhr) {
			//ParseJsonFilePub(result);
		//}
		//function ajaxFindReturnError(result, status, xhr) {
			//alert("Error");
			//console.log("Ajax-find movie: " + status);
		//}
	//})//btnclick
	$("#addPub").click(function() {
		var pubName = $("#pubName").val();
		var pubAddress = $("#pubAddress").val();
		var vibe = "Cozy";
		var obj = { pubName: pubName, location: pubAddress, vibeName: vibe, beerName: null, beerPrice: null, beerType: null, kind: "Pub"};
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
		var obj = { beerName: beerName, beerPrice: beerPrice, beerType: beerType, pubName: null, location: null, vibeName: null, kind: "Beer"};
		var jsonString = JSON.stringify(obj);
		if (beerName  != "" && beerPrice != "" && beerType != ""){
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
		var vibe = "Cozy";
		var obj = { pubName: pubName, location: pubAddress, vibeName: vibe, beerName: null, beerPrice: null, beerType: null, kind: "Pub"};
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
		var obj = { beerName: beerName, beerPrice: beerPrice, beerType: beerType, pubName: null, location: null, vibeName: null, kind: "Beer"};
		var jsonString = JSON.stringify(obj);
		if (beerName  != "" && beerPrice != "" && beerType != ""){
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
			}
			function ajaxUpdateReturnError(result, status, xhr) {
				alert("Error Update");
				console.log("Ajax-find: " + status);
			}
		}
	})//uppdatebtnclick

	$("#deletePub").click(function() {
		var pubName = $("#pubName").val();
		var obj = { pubName: pubName, location: pubAddress, vibeName: vibe, beerName: null, beerPrice: null, beerType: null, kind: "Pub"};
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
			}
			function ajaxDelReturnError(result, status, xhr) {
				alert("Error");
				console.log("Ajax-find: " + status);
			}
		}
	})//btnclick
	$("#deleteBeer").click(function() {
		var beerName = $("#beerName").val();
		var obj = { beerName: beerName, beerPrice: beerPrice, beerType: beerType, pubName: null, location: null, vibeName: null, kind: "Beer"};
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
			}
			function ajaxDelReturnError(result, status, xhr) {
				alert("Error");
				console.log("Ajax-find: " + status);
			}
		}
	})//btnclick

});//End ready function

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