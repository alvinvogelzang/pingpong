//mirage/factories/team.js
import Mirage, {faker} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  name: faker.list.random('peter', 'alvin', 'yori', 'rick')
});
