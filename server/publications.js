Meteor.publish('reps', function() {
	return Reps.find();

});

Houston.add_collection(Meteor.users);
Houston.add_collection(Reps);
Houston.add_collection(Houston._admins);