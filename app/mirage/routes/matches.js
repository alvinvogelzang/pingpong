// mirage/routes/matches.js
export default function(mirage) {

  mirage.get('/matches');

  mirage.post('/matches');

  mirage.put('/matches/:id');

  mirage.del('/matches/:id');

}
