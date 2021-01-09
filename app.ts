import "reflect-metadata";
import { createConnection } from "typeorm";
import { IController } from './controllers/IController';
import ControllerContainer from './controllers/InversifyContainer/ControllerContainer';
import ControllerTypes from './controllers/InversifyContainer/ControllerTypes';
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var app = express();
var cors = require('cors');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
createConnection();
const Container:IController[] = ControllerContainer.getAll<IController>(ControllerTypes.Controller); 
Container.forEach(controller => {
    controller.forApp(app).registerRoute();
})
module.exports = app;
