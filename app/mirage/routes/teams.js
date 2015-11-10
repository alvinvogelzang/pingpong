// mirage/routes/teams.js
export default function(mirage) {

  mirage.get('/teams');

  mirage.post('/teams');

  mirage.put('/teams/:id');

  mirage.del('/teams/:id');

}
