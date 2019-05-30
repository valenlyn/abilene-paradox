/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  let queryOptions = (data, callback) => {

    dbPoolInstance.query(`SELECT * FROM options WHERE room_id='${data.queryUrl}'`, (error, queryResult) => {
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
    queryOptions
  };
};