import { Container } from "inversify";
import { CardapioController } from "../CardapioController";
import { IController } from "../IController";
import { MainController } from "../MainController";
import { MesaController } from "../MesaController";
import ControllerTypes from "./ControllerTypes";
const ControllerContainer = new Container();
ControllerContainer.bind<IController>(ControllerTypes.Controller).to(MainController);
ControllerContainer.bind<IController>(ControllerTypes.Controller).to(MesaController);
ControllerContainer.bind<IController>(ControllerTypes.Controller).to(CardapioController);
export default ControllerContainer;