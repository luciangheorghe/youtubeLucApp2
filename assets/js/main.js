$(document).ready(function() {
	var key = 'AIzaSyDINoVZF1uERv7i9nsC_LaIGZjqFCLC0SA';
	var URL = 'https://www.googleapis.com/youtube/v3/videos';

	var options = {
		part: 'snippet, contentDetails, statistics',
		chart: 'mostPopular',
		maxResults: 10,
		regionCode: 'US',
		// videoCategoryId: 1,
		key: key
	};

	loadVids();

	function loadVids() {
		$.getJSON(URL, options, function(data) {
			console.log(data);

			resultsLoop(data);
		});
	}

	function resultsLoop(data) {
		$.each(data.items, function(i, item) {
			var thumb = item.snippet.thumbnails.medium.url;
			var title = item.snippet.title.substring(0, 35);
			var author = item.snippet.channelTitle;
			$('main').append(`
				<article>
				<img src="${thumb}" alt="" class="thumb">
					<div class="details">
						<h4>${title}</h4>
						<h3>${author}</h3>
					</div>
				</article>
		`);
		});
	}
});
