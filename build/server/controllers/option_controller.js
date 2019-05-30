module.exports = (db) => {


    let getOptions = (request, response) => {

        const doneWithQuery = (error, result) => {

        response.send(result);

        }

        let data = {
            queryUrl: request.params.id,
        }


        db.option.queryOptions(data, doneWithQuery);

    };



  return {
    getOptions
  };
};