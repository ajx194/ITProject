const fs = require('fs');
const csv = require('csvtojson');

const signUp = async (request, response) => {
    console.log(request.body);
    var keys = request.body;
    let writePayload = '' + '\n';
    for (var key in keys) {
      if (keys.hasOwnProperty(key)) {
        console.log(keys[key]);
        writePayload = writePayload + keys[key] + ',';
      }
    }
  
    const payload = await fs.appendFileSync('signup.csv', writePayload.slice(0, -1));
    response.json({
      payload: request.body
    });
}

const getSignUpDetails = async (request, response) => {
  const csvFilePath = 'signup.csv';

  const signUpList = await csv().fromFile(csvFilePath);
  response.json(signUpList);
}

module.exports = {signUp, getSignUpDetails};