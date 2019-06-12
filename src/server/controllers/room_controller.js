const uuidv4 = require('uuid/v4');

module.exports = (db) => {

    let newRoom = (request, response) => {

        // let uniqueUrl = uuidv4();

        const doneWithQuery = (error, result) => {

            // response.send({result: result});
            // response.cookie('room', result[0].url);
            response.redirect(`/room/${result[0].url}`);
            // response.body({ url: result[0].url });

        }

        console.log("******************REQUEST BODY**************************");
        console.log(request.body);
        console.log("********************************************************");


        let data = {
            topic: request.body.topic,
            url: request.body.uniqueUrl,
            user: request.body.user
        }

        db.room.queryNewRoom(data, doneWithQuery);

    };

    let getRoom = (request, response) => {

        const doneWithQuery = (error, result) => {

        response.send(result);

        }

        let data = {
            queryUrl: request.params.id,
        }


        db.room.querySpecificRoom(data, doneWithQuery);

    };

    let getRoomViaUser = (request, response) => {

        const doneWithQuery = (error, result) => {

        response.send(result);

        }

        let data = {
            queryUserId: request.params.id,
        }

        db.room.querySpecificRoomViaUser(data, doneWithQuery);
    }


    let sendOptions = (request, response) => {


        const doneWithQuery = (error, result) => {

        response.send(result);

        }

        let data = {
            option: request.body.option,
            room_id: request.body.room_id,
            user_id: request.body.user_id,
            rating: Number(request.body.optionInterest)
        }

        console.log(data);

        db.room.createOptions(data, doneWithQuery);



    }

    let sendNumParticipants = (request, response) => {

        const doneWithQuery = (error, result) => {

        response.send(result);

        }

        let data = {
            numParticipants: request.body.numParticipants,
            id: request.params.id
        }

        console.log(data);

        db.room.insertNumParticipants(data, doneWithQuery);

    }


  return {
    newRoom: newRoom,
    getRoom,
    sendOptions,
    sendNumParticipants,
    getRoomViaUser
  };
};