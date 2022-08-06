
const express = require('express');
const router = express.Router();
const endpoint = "/web/v1/";


/* -- Controllers initialization start -- */
const AdminController = require('../controllers/admin/AdminController');
/* -- Controller initialization end  -- */

router.get(`/greetings`,AdminController.greetings);


module.exports = router;
