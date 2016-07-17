var XMLHttpRequest = require("../_modules/XMLHttpRequest").XMLHttpRequest;
var APIKey = require("../key.config.js").APIKeys.youtube;
var searchTerm = process.argv[2];

searchYoutube = function(input) {
	var api = "https://www.googleapis.com/youtube/v3/search";
	var query = "?part=snippet&q=" + input + "&maxResults=25&key=" + APIKey;

	var xhr = new XMLHttpRequest();

	xhr.onreadystatechange = function() {

		if (this.readyState === 4) {
			var items = JSON.parse(this.responseText).items;
			var topResult = items[0];
			console.log('TOP SEARCH RESULT: ' + topResult.snippet.title);
		}
	};

	xhr.open('GET', api + query, true);
	xhr.send(null);
}

searchYoutube(searchTerm);
