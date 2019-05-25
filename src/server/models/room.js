/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  let queryNewRoom = (data, callback) => {

    dbPoolInstance.query(`INSERT INTO rooms (url, topic) VALUES ('${data.url}', '${data.topic}') RETURNING *`, (error, queryResult) => {
      if (error) {
        // invoke callback function with results after query has executed
        callback(error, null);
      } else {
        // invoke callback function with results after query has executed

        callback( null, queryResult.rows );

      }
    });
  };

  let querySpecificRoom = (data, callback) => {

    dbPoolInstance.query(`SELECT * FROM rooms WHERE url='${data.queryUrl}'`, (error, queryResult) => {
      if (error) {
        // invoke callback function with results after query has executed
        callback(error, null);
      } else {
        // invoke callback function with results after query has executed

        callback( null, queryResult.rows );

      }
    });
  }

  let createOptions = (data, callback) => {


     dbPoolInstance.query(`INSERT INTO options (option, room_id, user_id) VALUES ('${data.option}', '${data.room_id}', '${data.user_id}') RETURNING id`, (error, queryResult) => {

      if (error) {

        callback(error, null);

      } else {

            dbPoolInstance.query(`INSERT INTO ratings (rating, user_id, option_id) VALUES ('${data.rating}', '${data.user_id}', '${queryResult.rows[0].id}')`, (errorTwo, queryResultTwo) => {

                if (errorTwo) {

                    callback(errorTwo, null);

                } else {

                    callback( null, queryResultTwo.rows );

                }
            })

      }
    });


  }

  return {
    queryNewRoom,
    querySpecificRoom,
    createOptions
  };
};