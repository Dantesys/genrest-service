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
            res.send(p);
        }
    }
    CadastroCliente(){
        return async function(req:any,res:any,next:any){
            let p = new Pessoa();
            p.pes_email=req.body.data.pes_email;
            p.pes_fone=req.body.data.pes_fone;
            p.pes_nome=req.body.data.pes_nome;
            p.pes_senha=req.body.data.pes_senha;
            p.save()
            res.send(p);
        }
    }
    registerRoute(){
        this.forRoute('/rest').get(this.getRestData());
        this.forRoute('/login/:email/:senha').get(this.LogIn());
        this.forRoute('/cadastro/cliente').post(this.CadastroCliente());
    }
}