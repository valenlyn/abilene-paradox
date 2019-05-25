module.exports = (app, db) => {

  const pokemon = require('./controllers/pokemon')(db);
  const room = require('./controllers/room_controller')(db);

  app.get('/', pokemon.index);
  app.get('/new', pokemon.getAll);
  app.post('/new', room.newRoom);
  app.get('/roominfo/:id', room.getRoom);

  app.post('/room/:id', room.sendOptions);

};