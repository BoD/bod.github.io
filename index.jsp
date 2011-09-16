<%@page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/include/header0.jspf" %>
<script src="<%= R %>/js/logo.js" type="text/javascript"></script>
<script type="text/javascript" charset="utf-8">
	function go(json) {
		var res = '<ul>';
		var items = json.items;
		for (var i = 0; i < items.length; i++) {
			res += '<li><div class="time">'
			var dateTxt = json.items[i].published;
			dateTxt = dateTxt.replace(/T.*/, "");
			dateParts = dateTxt.match(/(\d+)/g);
			var date = new Date(dateParts[0], dateParts[1] - 1, dateParts[2]);
			res += date.toDateString();
			res += '</div> <div class="text">';
			var content = json.items[i].object.content;
			res += content;

			if (content.indexOf("http://") == -1 && content.indexOf("https://") == -1) {
				if (json.items[i].object.attachments && json.items[i].object.attachments[0].fullImage) {
					// image
					var url = json.items[i].object.attachments[0].fullImage.url;
					var urlShort = url.length > 70 ? url.substring(0, 70) + "..." : url;
					res += "<br/><a href=\"" + url + "\">" + urlShort + "</a>";
				} else if (json.items[i].object.attachments && json.items[i].object.attachments[0].url) {
					// article
					var url = json.items[i].object.attachments[0].url;
					var urlShort = url.length > 70 ? url.substring(0, 70) + "..." : url;
					res += "<br/><a href=\"" + url + "\">" + urlShort + "</a>";
				}
			}
			res += "</div></li>";
		}
		res += "</ul>";
		document.getElementById("stream").innerHTML = res;
	}

	window.onload = startLogoAnimation;
</script>
</head>
<body>
	<script id="script" type="text/javascript"></script>
	<div id="main">

		<pre id="logo">




		</pre>

		<ul id="nav">
			<li class="current"><a href="<%= R %>/">Home</a></li><li><a href="<%= R %>/code">Code</a></li><li><a href="<%= R %>/blubek">Resume</a> </li><li><a href="<%= R %>/archive">Archive</a></li>
			<li class="version">v3.01</li>
		</ul>

		<div id="blurb">
		Hi! I'm BoD, (also known as Beno&#238;t Lubek) and somehow you've reached my personal web site.<br/>
		I'm a thirty-something old geek.  I've been working on <a href="code">various projects</a>.  You can see my resume <a href="blubek"> here</a>.<br/>
		You can also have a look at <a href="archive">my old web site</a>.<br/>
		<br/>
		Here's my recent Google+ activity (you may follow me <a href="+">here</a>):
		</div>

		<div id="stream">(Loading...)</div>

		<script type="text/javascript">
		document.getElementById("script").src = "https://www.googleapis.com/plus/v1/people/100517480770286602327/activities/public?key=AIzaSyCodo_8QfeoKZ9cui24w3tL-pJw7Wdj-pU&callback=go";
		</script>

		<%@include file="/include/footer.jspf" %>
	</div>
</body>
</html>
