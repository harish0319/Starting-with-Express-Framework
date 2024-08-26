const express = require('express');
const path = require('path');
const contactController = require('../controllers/contactus');
const router = express.Router();

// Display the contact form
router.get('/contactus', contactController.getContact);

// Handle the form submission
router.post('/contactus', contactController.postContact);

module.exports = router;