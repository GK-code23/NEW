const express = require('express')
const router = express.Router()
const postCOntroller = require('../controllers/post')

router.get('/',postCOntroller.getPosts)


module.exports = router;
