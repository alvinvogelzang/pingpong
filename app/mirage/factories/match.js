//mirage/factories/team.js
import Mirage, {faker} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  team_a_id: 1,
  team_b_id: 2,
  score_team_a: faker.random.number({'max': 21, 'min': 0}),
  score_team_b: faker.random.number({'max': 21, 'min': 0}),
});
