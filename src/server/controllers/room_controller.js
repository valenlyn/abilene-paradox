const uuidv4 = require('uuid/v4');

module.exports = (db) => {

    let newRoom = (request, response) => {

        let uniqueUrl = uuidv4();

        const doneWithQuery = (error, result) => {

            console.log("************** RESULT FROM CONTROLLER *************");
            console.log("****************************************************");
            console.log(result);
            console.log(result[0].url);
            console.log("****************************************************");
            console.log("****************************************************");

            // response.send({result: result});
            response.cookie('room', result[0].url);
            response.redirect('/room');

        }
        let data = {
            topic: request.body.name,
            url: uniqueUrl
        }

        db.room.queryNewRoom(data, doneWithQuery);

  };

  let blank = (request, response) => {
    response.render('pokemon/show');
  }


  return {
    newRoom: newRoom,
    blank: blank
  };
};