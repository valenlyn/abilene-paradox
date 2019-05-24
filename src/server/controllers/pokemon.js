const uuidv4 = require('uuid/v4');

module.exports = (db) => {

    let index = (request, response) => {

        let abileneUser;

        if (!request.cookies.abileneUser) {
            abileneUser =  uuidv4();
            response.cookie('abileneUser', abileneUser);
            response.send({userCookie: abileneUser});
        } else {
            abileneUser = request.cookies.abileneUser;
             response.send({userCookie: abileneUser});
        }
    }

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

    let newRoom = (request, response) => {

        console.log(request.query);
        response.send(request.query);

  };


  return {
    getAll: getAll,
    newRoom: newRoom,
    index: index
  };
};