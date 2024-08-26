const path = require('path');
const rootDir = require('../util/path');

exports.getContact = (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'contact.html'));
};

exports.postContact =(req, res, next) => {
    console.log(req.body); // This will log the name and email to the console
    res.redirect('/success');
};