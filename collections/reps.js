Reps = new Meteor.Collection('reps'); 

Reps.initEasySearch(['name', 'state', 'market_segment'], {
    'limit' : 500,
    'use' : 'mongo-db'
});

Reps.allow({
	insert: function() {
		return true;
	},
	remove: function() {
		return true;
	},
	update: function() {
		return true;
	}
});

Meteor.methods({
	repsRemove: function() {
		return Reps.remove({})
	}
});

Meteor.methods({
rep: function(repAttributes) {
	var user = Meteor.user(),
repWithSameSfid= Reps.findOne({sfdc_id: repAttributes.sfdc_id});
	// ensure the user is logged in
	if (!user)
		throw new Meteor.Error(401, "You need to login!");
	// ensure form validation
	if (!repAttributes.name)
		throw new Meteor.Error(422, 'Please fill in at least the text');
	// check that there are no previous records that would be duplicates
	if (repAttributes.sfdc_id && repWithSameSfid) { throw new Meteor.Error(302,
		'You already have a record for that text!',
		repWithSameSfid._id); }

	// pick out the whitelisted keys
	var rep = _.extend(_.pick(repAttributes, 'name', 'sfdc_id', 'state', 'market_segment'),
		{
			userId: user._id,
			created: new Date().getTime()
		});

	var repId = Reps.insert(rep);

	var repCampaign = rep.campaign; 
	} 
});