function externalLinks()
{ 
	if (!document.getElementsByTagName) return; // forget browsers that do not support DOM 1.0
	var anchors = document.getElementsByTagName("a");
	for (var i = 0; i < anchors.length; i++)
	{
		var anchor = anchors[i];
		if (anchor.getAttribute("href") && anchor.getAttribute("rel") == "external")
			anchor.target = "_blank";
	}
}
window.onload = externalLinks;