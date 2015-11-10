import MatchesRoute from './routes/matches';
import TeamsRoute from './routes/teams';

export default function() {
  new MatchesRoute(this);
  new TeamsRoute(this);
}
