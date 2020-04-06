var navbarOpen = function() {
	var navItems = document.getElementsByClassName("navItem");
	for (var i = 0; i < navItems.length; i++) {
		navItems[i].getElementsByTagName("a")[0].classList.toggle("visible");
	}
};