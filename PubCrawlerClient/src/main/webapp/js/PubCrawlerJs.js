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
		alert("Button pressed");
		console.log("Button pressed");
		var strPubName = $("#pubName").val();
		var strPubAddress = $("#pubAddress").val();
		var vibe = "Cozy";
		var obj = { pubName: strPubName, location: strPubAddress, vibeName: vibe };
		var jsonString = JSON.stringify(obj);
		if (strPubName != "" && strPubAddress != "") {
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
	$("#updatePub").click(function() {
		alert("Button pressed");
		console.log("Button pressed");
		var strPubName = $("#pubName").val();
		var strPubAddress = $("#pubAddress").val();
		var vibe = "Cozy";
		var obj = { pubName: strPubName, location: strPubAddress, vibeName: vibe };
		var jsonString = JSON.stringify(obj);
		if (strPubName  != "") {
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

	$("#deletePub").click(function() {
		var pubName = $("#pubName").val();
		var obj = {pubName: pubName};
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
				alert("Deleted");
				$("#pubName").attr("placeholder", "Pub deleted");
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