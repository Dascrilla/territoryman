Template.repEdit.helpers({
	rep: function() {
		return Reps.findOne(Session.get('currentRepId'));
	}
});

Template.repEdit.events({
	'click .cancel': function(e) {
		e.preventDefault();
		Router.go(history.back());
	},

	/* Submit  */
	'submit form': function(e) {
		e.preventDefault();
		var currentRepId = this._id;

		/* Defines object CoverageProperties and binds them to HTML "name" attrib.*/
		var repProperties = {
			name: $(e.target).find('[name=name]').val(),
			sfdc_id: $(e.target).find('[name=sfdc_id]').val(),
			state: $(e.target).find('[name=state]').val(),
			market_segment: ($(e.target).find('[name=market_segment]').val())
		}
		/* Updates the current coverage with the new properties. Handles Error  */
		Reps.update(currentRepId, {
			$set: repProperties
		}, function(error) {
			if (error) {
				// display the error to the user
				alert(error.reason);
			} else {
				Router.go('dashboard');
			}
		});
	},
	/* Delete handler */

	/* Asks for confirmation, checks if there's an error, if not deletes the item and routes back to last route */
	/* TODO Find a better way to handle errors/form validation */
	'click .delete': function(e) {
		e.preventDefault();
		if (confirm("Delete this Item?")) {
			var currentRepId = this._id;

			Reps.remove(currentRepId, function(error) {
				if (error) {
					alert(error.reason);
				} else {
					Router.go(history.back());
				}
			});
		}
	}
});