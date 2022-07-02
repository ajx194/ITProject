const csvFilePath = 'signup.csv';
const csv = require('csvtojson');


const signIn = async (request, response) => {
    const userList = await csv().fromFile(csvFilePath);
    const user = userList.find((user) => user.email === request.body.email && user.password === request.body.password);
    if (user) {
        return response.json({
            authenticated: true,
            admin: user.isAdmin || false
        });
    } else {
        return response.json({
            authenticated: false,
            admin: false
        });
    }
}

module.exports = {signIn};