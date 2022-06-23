'use strict';


//Importación de las Dependencias
const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require ('cors');

//Importacción dde las Rutas//
const userRoutes = require('../src/routes/user.routes');
const serviceRoutes = require('../src/routes/service.routes');
const typeEventRoutes = require('../src/routes/typeEvent.routes');
const typeRoomRoutes = require('../src/routes/typeRoom.routes');
const hotelRoutes = require('../src/routes/hotel.routes');

//APP -> Servidor HTTP (Express)
const app = express(); //Creación del Servidor de Express


/*--------- CONFIGURACIÓN DEL SERVIDOR ---------*/ 

app.use(helmet());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());


app.use('/user', userRoutes);
app.use('/service', serviceRoutes);
app.use('/typeRoom', typeRoomRoutes);
app.use('/typeEvent', typeEventRoutes);
app.use('/hotel', hotelRoutes);

//Exportación//
module.exports = app;