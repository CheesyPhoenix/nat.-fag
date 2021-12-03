let state = "dark";

function toggle() {
	if (state == "dark") {
		state = "light";
		document.getElementById("body").style =
			"background-color: #dcdcdc; color: #292929;";
		colorLinks("#0000ee");
	} else if (state == "light") {
		state = "dark";
		document.getElementById("body").style =
			"background-color: #292929; color: #dcdcdc;";
		colorLinks("#8db2e5");
	}
}

function colorLinks(hex) {
	var links = document.getElementsByTagName("a");
	for (var i = 0; i < links.length; i++) {
		if (links[i].href) {
			links[i].style.color = hex;
		}
	}
}
