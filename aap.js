const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const successController = require('./controllers/success');
const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
const contactRoutes = require('./routes/contact');

app.use('/admin',adminRoutes);
app.use('/shop',shopRoutes);
app.use(contactRoutes);
app.get('/success', successController.getSuccess);

app.use(errorController.get404);

app.listen(3000);