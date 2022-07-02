const fs = require('fs');
const csv = require('csvtojson');

const quoteSubmission = async (request, response) => {
    console.log(request.body);
    var keys = request.body;
    let writePayload = '' + '\n';
    for (var key in keys) {
      if (keys.hasOwnProperty(key)) {
        console.log(keys[key]);
        writePayload = writePayload + keys[key] + ',';
      }
    }
  
    const payload = await fs.appendFileSync('quote-submission.csv', writePayload.slice(0, -1));
    response.json({
      payload: request.body
    });
}

const getQuotes = async (request, response) =>{
    const csvFilePath = 'quote-submission.csv';

    const quoteList = await csv().fromFile(csvFilePath);
    response.json(quoteList);
}

module.exports = {quoteSubmission, getQuotes};