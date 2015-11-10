import Ember from 'ember';

export default Ember.Component.extend({
  setSelectedTeamOnMatch: 'setSelectedTeamOnMatch',
  teamA: null,
  teamB: null,

  actions: {
    setSelectedTeamOnMatch(team, whichTeam) {
      if (whichTeam === "A") this.set('teamA', team);
      if (whichTeam === "B") this.set('teamB', team);
    }
  }
});
