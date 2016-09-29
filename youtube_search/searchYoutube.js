var XMLHttpRequest = require("../_modules/XMLHttpRequest").XMLHttpRequest;
var APIKey = require("../key.config.js").APIKeys.youtube;

searchYoutube = function(input) {

	return new Promise(function(resolve, reject)  {
		var api = "https://www.googleapis.com/youtube/v3/search";
		var query = "?part=snippet&q=" + input + "&maxResults=25&key=" + APIKey;

		var xhr = new XMLHttpRequest();

		xhr.onreadystatechange = function() {

			if (this.readyState === 4) {
				var items = JSON.parse(this.responseText).items;
				var topResult = items[0];
				console.log('TOP SEARCH RESULT: ' + topResult.snippet.title);
				console.log(items);
				resolve(items);
			} else {
				//reject();
			}
		};

		xhr.open('GET', api + query, true);
		xhr.send(null);
	});
}

exports.searchYoutube = searchYoutube;
