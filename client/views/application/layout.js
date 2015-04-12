Template.layout.helpers({
	isLanding: function() {
		if (location.pathname === "/") {
			return true;
		} else if (location.pathname === "/home") {
			return true
		} else {
			return false;
		}
	}
});