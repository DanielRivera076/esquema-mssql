// const express = require('express');
import express from 'express';
import config from './config';
import dashRoutes from './routes/dash.routes';
const app = express();


//middelwares

// rutes

app.use( '/api/v1/' , dashRoutes );

app.use('/',express.static(__dirname  + '/public',{
    extensions: ['html', 'htm'],
}
));

// init

const init = () => {
    app.listen(config.port);
    console.log('Server on port', 3000);
}
export default init;
