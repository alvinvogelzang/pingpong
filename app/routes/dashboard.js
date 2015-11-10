import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return Ember.RSVP.hash({
      matches: this.store.find('match'),
      teams: this.store.find('team'),
    });
  },

  setupController: function(controller, models) {
    this._super(controller, models);
    controller.setProperties(models);
  },
});
