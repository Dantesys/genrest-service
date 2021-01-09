import { Funcionario } from "../models/Funcionario";
import { Pessoa } from "../models/Pessoa";
import { Restaurante } from "../models/Restaurante";
import { AbstractController } from "./AbstractController";
export class MainController extends AbstractController{
    protected prefix:string='';
    getRestData(){
        return async function(req:any,res:any,next:any){
            let r:Restaurante|undefined = await Restaurante.findOne();
            res.send(r);
        }
    }
    LogIn(){
        return async function(req:any,res:any,next:any){
            let p = await Pessoa.findOne({pes_email:req.params.email,pes_senha:req.params.senha}) as Pessoa;
            let f = await Funcionario.findOne({pessoa:p}) as Funcionario;
            res.send({pessoa:p,funcionario:f});
        }
    }
    registerRoute(){
        this.forRoute('/rest').get(this.getRestData());
        this.forRoute('/login/:email/:senha').get(this.LogIn());
    }
}