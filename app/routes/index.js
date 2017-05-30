import Ember from 'ember';


export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      // promises for operations that are expected to be completed in the very near future (when objects are returned from Firebase)
      rentals: this.store.findAll('rental'),
      reviews: this.store.findAll('review')
    });
  },
  actions: {
    saveRental3(params) {
      var newRental = this.store.createRecord('rental', params);
      newRental.save();
      this.transitionTo('index');
    }
  }
});
