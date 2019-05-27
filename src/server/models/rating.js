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

    dbPoolInstance.query(`select ratings.rating, options.option, options.id, ratings.user_id from ratings inner join options on ratings.option_id = options.id where room_id='${data.queryUrl}'`, (error, queryResult) => {
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