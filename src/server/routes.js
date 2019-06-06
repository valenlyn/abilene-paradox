module.exports = (app, db) => {

  const pokemon = require('./controllers/pokemon')(db);
  const room = require('./controllers/room_controller')(db);
  const option = require('./controllers/option_controller')(db);
  const rating = require('./controllers/rating_controller')(db);

  // app.get('/', pokemon.index);
  app.get('/new', pokemon.getAll);
  app.post('/new', room.newRoom);

  // getting information only
  app.get('/roominfo/:id', room.getRoom);
  app.get('/options/:id', option.getOptions);
  app.get('/ratings/:id', rating.getRatings);
  app.get('/ratingscore/:id', rating.getRatingsVotingPage);

  app.post('/numparticipants/:id', room.sendNumParticipants);
  app.post('/room/:id', room.sendOptions);
  app.post('/vote/:id', rating.sendRatings);

};