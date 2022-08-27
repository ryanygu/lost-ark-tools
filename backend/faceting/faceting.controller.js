const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('_middleware/validate-request');
const authorize = require('_middleware/authorize')
const facetingService = require('./faceting.service');

// routes
router.post('/:id', authorize(), saveAbilityStoneSchema, saveAbilityStone)
router.get('/account/:id', authorize(), getAccountHistory)

module.exports = router;


function saveAbilityStoneSchema(req, res, next) {
    const schema = Joi.object({
        line1: Joi.array().items(Joi.string()).required(),
        line2: Joi.array().items(Joi.string()).required(),
        line3: Joi.array().items(Joi.string()).required(),
        score: Joi.number().required(),
        options: Joi.object({
            rarity: Joi.string().required()
        }),
    });
    validateRequest(req, next, schema);
}

function saveAbilityStone(req, res, next) {
    facetingService.create(req)
    .then(savedAbilityStone => res.json(savedAbilityStone))
    .catch(next);
}

function getAccountHistory(req, res, next) {
    facetingService.getAccountHistory(req)
    .then(history => res.json(history))
    .catch(next);
}

