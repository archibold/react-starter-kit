/**
 * Register your development apis as router middlewars
 */
const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send({ api: 'foo' });
});

module.exports = router;
