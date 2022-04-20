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
				console.log("Nah");
			}
			function ajaxAddReturnError(result, status, xhr) {
				alert("Error Add");
				console.log("Ajax: " + status);
			}
		}
	})//addbtnclick
	$("#UpdateBtn").click(function() {
		var strId = $("#id").val();
		var strTitle = $("#title").val();
		var strPrice = $("#price").val();
		var obj = { id: strId, title: strTitle, price: strPrice };
		var jsonString = JSON.stringify(obj);
		if (strId != "") {
			$.ajax({
				method: "PUT",
				url: "http://localhost:8080/RestServerMovieProject/Movies/" + strId,
				data: jsonString,
				dataType: 'json',
				error: ajaxUpdateReturnError,
				success: ajaxUpdateReturnSuccess
			})
			function ajaxUpdateReturnSuccess(result, status, xhr) {
				clearFields();
				$("#title").attr("placeholder", "Movie updated");
			}
			function ajaxUpdateReturnError(result, status, xhr) {
				alert("Error Update");
				console.log("Ajax-find movie: " + status);
			}
		}
	})//uppdatebtnclick

	$("#DeleteBtn").click(function() {
		var strValue = $("#id").val();
		if (strValue != "") {
			$.ajax({
				method: "DELETE",
				url: "http://localhost:8080/RestServerMovieProject/Movies/" + strValue,
				error: ajaxDelReturnError,
				success: ajaxDelReturnSuccess
			})
			function ajaxDelReturnSuccess(result, status, xhr) {
				clearFields();
				$("#title").attr("placeholder", "Movie deleted");
			}
			function ajaxDelReturnError(result, status, xhr) {
				alert("Error");
				console.log("Ajax-find movie: " + status);
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
	$("#pubAdress").val("");
	$("#beerName").val("");
	$("#beerPrice").val("");
	$("#beerType").val("");
}