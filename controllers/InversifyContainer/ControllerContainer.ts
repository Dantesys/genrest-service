import { Container } from "inversify";
import { IController } from "../IController";
import { MainController } from "../MainController";
import ControllerTypes from "./ControllerTypes";
const ControllerContainer = new Container();
ControllerContainer.bind<IController>(ControllerTypes.Controller).to(MainController);
export default ControllerContainer;