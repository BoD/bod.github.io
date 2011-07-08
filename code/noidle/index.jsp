<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@include file="/include/header0.jspf" %>
<%@include file="/include/header1.jspf" %>
		<ul id="nav">
			<li><a href="<%= R %>/">Home</a></li><li class="current"><a href="<%= R %>/code">Code</a></li><li><a href="<%= R %>/blubek">Resume</a> </li><li><a href="<%= R %>/archive">Archive</a></li>
			<li class="version">v3.01</li>
		</ul>

		<div id="project">
			<h1>NoIdle</h1>

			<h2>What is it?</h2>
			<pre>
				<b>BoD NoIdle</b> is a small utility that will simulate activity on your computer.
				This is useful if you use applications that try to guess if you're in front of the computer and take actions accordingly.
				One example is Google Talk that will change your online status if you're idle for a few minutes, and there is no setting to disable that.
				NoIdle will avoid that by simulating a mouse movement (of 1 pixel) every 59 seconds.

			</pre>

			<h2>Requirements</h2>
			<pre>
				- JDK 1.6 or more recent

			</pre>

			<h2>License</h2>
			<pre>
				BoD NoIdle and its source are in the public domain.

			</pre>

			<h2>Download</h2>
			<pre>
				<a href="bod-noidle-src.zip">1.00 Sources</a>
			</pre>
		</div>

		<%@include file="/include/footer.jspf" %>
	</div>
</body>
</html>
