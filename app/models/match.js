import DS from 'ember-data';

export default DS.Model.extend({
  teamA: DS.hasMany('user'),
  teamB: DS.hasMany('user'),
  scoreTeamA: DS.attr('number'),
  scoreTeamB: DS.attr('number')
});
