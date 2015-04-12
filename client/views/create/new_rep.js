Template.newRep.events({

  'click .cancel': function(e) {
    e.preventDefault();
    Router.go('dashboard');
  },

  /* Submit handler  */
  'submit form': function(e) {
    e.preventDefault();

    /* Defines the object handler  */
    /* Does "var" bind the object to submit.js only? TODO find a way to combine submit and edit objects */
    var rep = {
      name: $(e.target).find('[name=name]').val(),
      sfdc_id: $(e.target).find('[name=sfdc_id]').val(),
      state: $(e.target).find('[name=state]').val(),
      market_segment: ($(e.target).find('[name=market_segment]').val())
    }

    /*Error handler for submit*/
    /*Why is this code alot different that edit.js. TODO refactor the edit and submit in same template with {{#if}} */
    Meteor.call('rep', rep, function(error, id) {
      if (error) {
        // display the error to the user
        throwError(error.reason);
        if (error.error === 302)
          repName = rep.name;
        console.log('Error!')
      } else {
        Router.go('dashboard');
      }
    });
  }
});