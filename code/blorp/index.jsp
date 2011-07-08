<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@include file="/include/header0.jspf" %>
<%@include file="/include/header1.jspf" %>
		<ul id="nav">
			<li><a href="<%= R %>/">Home</a></li><li class="current"><a href="<%= R %>/code">Code</a></li><li><a href="<%= R %>/blubek">Resume</a> </li><li><a href="<%= R %>/archive">Archive</a></li>
			<li class="version">v3.01</li>
		</ul>

		<div id="project">
			<h1>Blorp</h1>

			<h2>What is it?</h2>
			<pre>
				<b>BoD Blorp</b> is a very simple web file publishing system.
				It will list directories and files inside them in a nice fashion.
				If a file is a picture or a video, it will also create a thumbnail for it, thus Blorp can be used as a picture gallery.
				You can see it run here : <a href="http://www.JRAF.org/blorp">http://www.JRAF.org/blorp</a>.

			</pre>

			<h2>Why the name?</h2>
			<pre>
				This is my own version of a very similar application written by Justin Frankel (of Nullsoft fame).
				Since the applications do essentialy the same thing, I just kept the same name.
				The original blorp is written in PHP and can be found here: <a href="http://www.1014.org/code/blorpscript/">http://www.1014.org/code/blorpscript/</a>.

			</pre>

			<h2>Requirements</h2>
			<pre>
				- A Java servlet engine and/or application server (tested with Tomcat 6 and JDK 1.6)
				- ImageMagick
				- ffmpeg

			</pre>

			<h2>Installation / Configuration</h2>
			<pre>
				- Download the binary archive below
				- Extract it to the webapps directory of your application server
				- Edit the WEB-INF/classes/conf/blorp.properties file (it should be self explanatory)

			</pre>

			<h2>License</h2>
			<pre>
				BoD Blorp and its source are in the public domain.

			</pre>

			<h2>Download</h2>
			<pre>
				- <a href="BoD-Blorp-3.00-bin.zip">3.00 Binary</a>
				- <a href="BoD-Blorp-3.00-src.zip">3.00 Sources</a>
			</pre>
		</div>

		<%@include file="/include/footer.jspf" %>
	</div>
</body>
</html>
