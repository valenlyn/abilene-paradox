module.exports = (app, db) => {

  const pokemon = require('./controllers/pokemon')(db);
  // const room = require('./controllers/room_controller')(db);

  app.get('/new', pokemon.getAll);

};