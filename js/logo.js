var logoStr =
"     _____  ___   ____\n" +
" __ / / _ \\/ _ | / __/___  _______ _\n" +
"/ // / , _/ __ |/ _/_/ _ \\/ __/ _ `/\n" +
"\\___/_/|_/_/ |_/_/ (_)___/_/  \\_, /\n" +
"                             /___/";

var intervalId;
var logoElt;
var len = logoStr.length;
var i = 0;

function startLogoAnimation() {
	logoElt = window.document.getElementById("logo");
	intervalId = setInterval("anim()", 30);
}

function anim() {
	var s = logoStr.substring(0, i);
	var nbLines = s.split("\n").length;
	s += "#";
	for (var j = 0; j < 6 - nbLines; j++) {
		s += "\n";
	}
	logoElt.innerHTML = "<pre>" + s + "</pre>";

	i++;
	if (i == len + 1) {
		clearInterval(intervalId);
		s = s.substring(0, s.length - 2);
		logoElt.innerHTML = "<pre>" + s + "</pre>";
	}
}
