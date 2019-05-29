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

    dbPoolInstance.query(`select ratings.rating, options.option, options.id, ratings.user_id from ratings inner join options on ratings.option_id = options.id where room_id='${data.queryUrl}' ORDER BY options.created_at DESC`, (error, queryResult) => {
      if (error) {

        callback(error, null);

      } else {

        callback( null, queryResult.rows );

      }
    });
  }

  let queryGetRatingsVotingPage = (data, callback) => {

    dbPoolInstance.query(`select ratings.rating, options.option, options.id, ratings.user_id from ratings inner join options on ratings.option_id = options.id where room_id='${data.queryUrl}'`, (error, queryResult) => {
      if (error) {

        callback(error, null);

      } else {
        if (queryResult.rows){

            let queryToGetNumberOfUsers = `select distinct ratings.user_id from ratings inner join options on ratings.option_id = options.id where room_id='${data.queryUrl}'`

            dbPoolInstance.query(queryToGetNumberOfUsers, (error, queryResultTwo) => {

                if (error) {

                    callback(error, null);
                } else {

                    let length = queryResultTwo.rows.length
                    let getNames = queryResult.rows.map(result => result.option);
                    let getUniqueNames = getNames.filter((v,i) => getNames.indexOf(v) === i)
                    let results = getUniqueNames.map(name => {return {name: name, ratingOneScore: 0, ratingTwoScore: 0, ratingThreeScore: 0, length: length}})

                    results.forEach(result => {
                        queryResult.rows.forEach(row => {
                            if (result.name === row.option){
                                if (row.rating === 1 ) result.ratingOneScore++
                                    else if (row.rating === 2) result.ratingTwoScore++
                                        else if (row.rating === 3) result.ratingThreeScore++
                            }
                        })
                    })
                    // console.log('results', results)
                    callback( null, results );
                }
            })

        } else{
            callback(null, null);
        }

      }
    });
  }

  return {
    querySendRatings,
    queryGetRatings,
    queryGetRatingsVotingPage
  };
};