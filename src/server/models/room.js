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

    console.log(data);

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

  return {
    queryNewRoom,
    querySpecificRoom
  };
};