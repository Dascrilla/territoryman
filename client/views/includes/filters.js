Template.filters.events({
    'click .filter' : function () {
      var instance = EasySearch.getComponentInstance(
        { index : 'reps' }
      );

  
      // Change the currently filteredCategories like this
      EasySearch.changeProperty('reps', 'filteredCategories', categories);
      // Trigger the search again, to reload the new products
      instance.triggerSearch();
    }
  });