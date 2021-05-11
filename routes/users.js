var express = require('express');
var router = express.Router();

var express = require('express');
var router = express.Router();
const { index } = require('../userController')

module.exports = router => {
    router.get('/characters', index);

    return router;
};