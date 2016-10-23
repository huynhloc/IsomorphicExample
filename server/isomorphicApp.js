'use strict';

require('dotenv').config();
import express from 'express';
import logger from 'morgan';
import path from 'path';
import busboy from 'express-busboy';
import errorhandler from 'errorhandler';
import methodOverride from 'method-override';
import handlebars from 'express-handlebars';
import config from './config';
import Parse from 'parse/node';
import {ParseServer} from 'parse-server';
import ParseDashboard from 'parse-dashboard';
import posts from './routes/posts';

const app = new express();

const IS_DEVELOPMENT = app.get('env') !== 'production';
const PARSE_DASHBOARD_AUTH = config.PARSE_DASHBOARD_AUTH

// because of starting node process outside server folder --> need re-config views folder
app.set('views', config.root + '/server/views');
app.engine('hbs', handlebars({defaultLayout: 'main',
                              extname: '.hbs', 
                              layoutsDir:'server/views/layouts',
                              partialsDir:'server/views/partials',
                              helpers: {
                                ifActive: function (v1, v2) { return v1 == v2 ? 'active' : ''; }
                              }}));
app.set('view engine', 'hbs');

busboy.extend(app);
app.use(methodOverride());
app.use(express.static(config.root + '/public'));

app.get('/', (req, res, next) => {
  res.render('index', {
    layout: false
  });  
});



app.use('/posts', notifications);

app.listen(config.PORT, () => console.log(`server running on port ${config.PORT}`));

// error handling middleaware should be loaded afrer the loading the routes
if(IS_DEVELOPMENT) {
  app.use(errorhandler());
}


