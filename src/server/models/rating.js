/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  let querySendRatings = (data, callback) => {

    dbPoolInstance.query(`INSERT INTO ratings (rating, user_id, option_id) VALUES (${data.rating}, '${data.user_id}', '${data.option_id}') RETURNING *`, (error, queryResult) => {
      if (error) {

        callback(error, null);

      } else {

        callback( null, queryResult.rows );

      }
    });
  }

  let queryGetRatings = (data, callback) => {

    console.log("****************FROM MODEL****************")
    console.log(data)
    console.log("*************************************")


    dbPoolInstance.query(`select ratings.rating, options.option, options.id, ratings.user_id from ratings inner join options on ratings.option_id = options.id where room_id='${data.queryUrl}' ORDER BY options.option`, (error, queryResult) => {
      if (error) {

        callback(error, null);

      } else {

        callback( null, queryResult.rows );

      }
    });
  }

  return {
    querySendRatings,
    queryGetRatings
  };
};