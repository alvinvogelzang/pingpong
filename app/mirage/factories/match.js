//mirage/factories/team.js
import Mirage, {faker} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  teamAId: 1,
  teamBId: 2,
  scoreTeamA() { return faker.random.number({min: 0, max: 21})},
  scoreTeamB() { return faker.random.number({min: 0, max: 21})},
});
