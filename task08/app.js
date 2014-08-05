
	$("document").ready(function() {
		buildBookmarks('h2', 'toc');
	});

	function buildBookmarks(strWhichTag, sBookMarkNode) {
		var i;
		var cAnchorCount = 0;

		// create the list that will hold the bookmark links
		var oList = $("<ol id='bookmarksList'>");

		// for each one of the header tags, create a new named anchor and insert it into
		// the header tag. Then add a new link to the list that points to the named anchor
		$("div:not([id=header]) " + strWhichTag).each(function() {
			$(this).html("<a name='bookmark" + cAnchorCount + "'></a>" + $(this).html());
			oList.append($("<li><a href='#bookmark" + cAnchorCount++ + "'> " + $(this).text() + "</a></li>"));
		});
		
		// now find the ID of the bookmark container and append it
		$("#" + sBookMarkNode).append(oList);
	}
	
	
	
	