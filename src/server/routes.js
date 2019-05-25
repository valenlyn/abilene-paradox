module.exports = (app, db) => {

  const pokemon = require('./controllers/pokemon')(db);
  const room = require('./controllers/room_controller')(db);
  const option = require('./controllers/option_controller')(db);

  app.get('/', pokemon.index);
  app.get('/new', pokemon.getAll);
  app.post('/new', room.newRoom);

  // getting information only
  app.get('/roominfo/:id', room.getRoom);
  app.get('/options/:id', option.getOptions);

  app.post('/room/:id', room.sendOptions);

};