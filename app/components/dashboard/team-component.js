import Ember from 'ember';

export default Ember.Component.extend({
  setSelectedTeamOnMatch: 'setSelectedTeamOnMatch',
  selectedTeam: null,

  observeSelectedTeam: Ember.observer('selectedTeam', function() {
    this.sendAction('setSelectedTeamOnMatch', this.get('selectedTeam'), this.get('whichTeam'));
  })
});
