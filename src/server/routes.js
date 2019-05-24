module.exports = (app, db) => {

  const pokemon = require('./controllers/pokemon')(db);
  const room = require('./controllers/room_controller')(db);

  app.get('/welcome', pokemon.index);
  app.get('/new', pokemon.getAll);
  app.post('/new', room.newRoom);

};