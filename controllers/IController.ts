import { Application, IRoute } from "express";
export interface IController{
    forApp(app:Application):IController;
    forRoute(path:string):IRoute;
    registerRoute():void;
}