<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@include file="/include/header0.jspf" %>
<%@include file="/include/header1.jspf" %>
		<ul id="nav">
			<li><a href="<%= R %>/">Home</a></li><li class="current"><a href="<%= R %>/code">Code</a></li><li><a href="<%= R %>/blubek">Resume</a> </li><li><a href="<%= R %>/archive">Archive</a></li>
			<li class="version">v3.01</li>
		</ul>

		<div id="project">
			<h1>Sampler</h1>

			<img src="bod-sampler.png"/>

			<h2>What is it?</h2>
			<pre>
				<b>BoD Sampler</b> is a small program to quickly play a small sound clip ("sample", or "jingle") from a collection.
				You can use it for example at the office to play funny sounds in accordance to what your coworkers say or do.
				For example somebody has a difficult task to do: play the "mission impossible" sample. Hilarity will ensue.
				To my knowlege, it has no other use besides being fun.

				In an environment where only one PC has a soundcard or speakers, but everybody wants to be able to play samples, BoD Sampler can be used:
				it has a client/server architecture. The server runs on the PC that can play sounds, and several clients can run on the other PCs.
				When somebody click on a sample on the client application, a network command is sent to the server application, which will play the sample.

			</pre>

			<h2>Requirements</h2>
			<pre>
				- JDK 1.6 or more recent

			</pre>

			<h2>Usage</h2>
			<pre>
			    Server (or stand-alone)
			        - Download the <b>bod-sampler-bin.zip</b> file below
			        - Unzip it to a directory of your choice
			        - Add samples (see below) in the <b>samples</b> directory
			        - Start <b>server.bat</b> (windows) or <b>./server.sh</b> (unix)

			    Client
			        - Download the <b>bod-sampler-bin.zip</b> file below
			        - Unzip it to a directory of your choice
			        - Start <b>client.bat server_address</b> (windows) or <b>./client.sh server_address</b> (unix), where <b>server_address</b> is the ip address or name of the machine where the server is running

			    Samples
			    	- each sample must be a wav file, named <b>xx_yy_name</b>.wav
			        - <b>xx</b> is a two digits number, that will be used to order the samples
			        - <b>yy</b> is a number from 0 to 100 that can be used to adjust the volume of the sample
			        - <b>name</b> is the name of the sample that will appear on its button to click

			</pre>

			<h2>License</h2>
			<pre>
				BoD Sampler and its source are in the public domain.

			</pre>

			<h2>Download</h2>
			<pre>
				- <a href="bod-sampler-bin.zip">v1.25ß200 Binary</a>
				- <a href="bod-sampler-src.zip">v1.25ß200 Sources</a>
				- <a href="bod-sampler-samplepack.zip">Sample pack (unzip into the samples directory)</a>
			</pre>
		</div>

		<%@include file="/include/footer.jspf" %>
	</div>
</body>
</html>
