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

    console.log("************DATA FROM MODEL********");
    console.log(data);
    console.log("************************************");

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
    querySpecificRoom,
    createOptions
  };
};