const config = require('config.js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const crypto = require("crypto");
const sendEmail = require('_helpers/send-email');
const db = require('_helpers/db');
const Role = require('_helpers/role');
const Account = require('../accounts/account.model')
const AbilityStone = require('./abilityStone.model')


module.exports = {
    create,
    getAccountHistory
};


async function create(req) {
    
    // todo: error checks
    const account = await getAccount(req.user.id)

    const abilityStone = new db.AbilityStone(req.body);
    abilityStone.account = account._id
    abilityStone.rarity = req.body.options.rarity

    account.faceting = account.faceting.concat(abilityStone._id)

    account.save()
    abilityStone.save()

    return abilityStone;
}

async function getAccountHistory(req) {
    const account = await getAccount(req.user.id)
    const allFacetingData = account.faceting
    return allFacetingData.map(data => basicDetails(data))
}


// helper functions

async function getAccount(id) {
    if (!db.isValidId(id)) throw 'Account not found';
    const account = await (await Account.findById(id).populate('faceting'));
    if (!account) throw 'Account not found';
    return account;
}


function basicDetails(abilityStone) {
    const { line1, line2, line3, score, created, rarity, id, account } = abilityStone;
    return { line1, line2, line3, score, created, rarity, id, account };
}

