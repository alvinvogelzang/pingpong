import DS from 'ember-data';

export default DS.Model.extend({
  teamA: DS.belongsTo('team'),
  teamB: DS.belongsTo('team'),
  scoreTeamA: DS.attr('number'),
  scoreTeamB: DS.attr('number')
});
