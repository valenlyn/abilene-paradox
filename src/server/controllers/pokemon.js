module.exports = (db) => {

  let getAll = (request, response) => {

    db.pokemon.getAll((error, products) => {
      // queryResult contains pokemon data returned from the pokemon model
      if (error) {
        console.error('error getting rooms', error);
        response.status(500);
        response.send('server error');
      } else {
        response.send({products: products});
      }
    });
  };

  return {
    getAll: getAll
  };
};