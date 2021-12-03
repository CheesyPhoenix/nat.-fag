let state = "dark";

function toggle() {
	if (state == "dark") {
		state = "light";
		document.getElementById("body").style =
			"background-color: #dcdcdc; color: #292929;";
	} else if (state == "light") {
		state = "dark";
		document.getElementById("body").style =
			"background-color: #292929; color: #dcdcdc;";
	}
}
