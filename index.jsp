<%@page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/include/header0.jspf" %>
<script src="http://twitterjs.googlecode.com/svn/trunk/src/twitter.min.js" type="text/javascript"></script>
<script src="<%= R %>/js/logo.js" type="text/javascript"></script>
<script type="text/javascript" charset="utf-8">
	getTwitters(
			'tweets',
			{
				id : 'BoD',
				count : 15,
				enableLinks : true,
				ignoreReplies : true,
				clearContents : true,
				template : '<div class="time">%time%</div> <div class="text">%text%</div>'
			});

	window.onload = startLogoAnimation;
</script>
</head>
<body>
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
		Here's my recent twitter activity (you may follow me <a href="http://twitter.com/BoD">@BoD</a>):
		</div>

		<div id="tweets">(Loading...)</div>

		<%@include file="/include/footer.jspf" %>
	</div>
</body>
</html>
