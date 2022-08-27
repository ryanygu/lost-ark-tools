const config = require('config.js');
const mongoose = require('mongoose');
const connectionOptions = { useNewUrlParser: true, useUnifiedTopology: true };
const mongoURI = `mongodb+srv://${config.MONGO_USERNAME}:${config.MONGO_PASSWORD}@lost-ark-tools-db.xh55h.mongodb.net/?retryWrites=true&w=majority`
mongoose.connect(process.env.MONGODB_URI || mongoURI, connectionOptions);
mongoose.Promise = global.Promise;

module.exports = {
    Account: require('accounts/account.model'),
    AbilityStone: require('faceting/abilityStone.model.js'),
    RefreshToken: require('accounts/refresh-token.model'),
    isValidId
};

function isValidId(id) {
    return mongoose.Types.ObjectId.isValid(id);
}