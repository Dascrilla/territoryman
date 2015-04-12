Template.repItem.helpers({
	Reps: function() {
		return Reps.find();
	}
});

Template.dashboard.reps = function() {
	return Reps.find();
}

Template.dashboard.helpers({
	rep: function() {
		return Reps.find();
	}
});

Template.upload.events({
	"change #files": function(e) {
		var files = e.target.files || e.dataTransfer.files;
		for (var i = 0, file; file = files[i]; i++) {
			if (file.type.indexOf("text") == 0) {
				var reader = new FileReader();
				reader.onloadend = function(e) {
					var text = e.target.result;
					console.log(text)
					var all = $.csv.toObjects(text);
					console.log(all)
					_.each(all, function(entry) {
						Reps.insert(entry);
					});
				}
				reader.readAsText(file);
			}
		}
	},

	'click .clear': function(e) {
		e.preventDefault();
		Meteor.call('repsRemove');
	}

})