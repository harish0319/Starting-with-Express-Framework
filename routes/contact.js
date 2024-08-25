const express = require('express');
const path = require('path');
const rootDir = require('../util/path');
const router = express.Router();

// Display the contact form
router.get('/contactus', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'contact.html'));
});

// Handle the form submission
router.post('/contactus', (req, res, next) => {
    console.log(req.body); // This will log the name and email to the console
    res.redirect('/success');
});

module.exports = router;