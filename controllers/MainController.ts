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
    getGenData(){
        return async function(req:any,res:any,next:any){
            let r:Pessoa|undefined = await Pessoa.findOne({pes_ID:1});
            res.send(r);
        }
    }
    LogIn(){
        return async function(req:any,res:any,next:any){
            let p = await Pessoa.findOne({pes_email:req.params.email,pes_senha:req.params.senha}) as Pessoa;
            if(p.pes_ID==1){
                res.send({pessoa:p,adm:1});
            }else{
                res.send({pessoa:p,adm:0});
            }
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
    Restsave(){
        return async function(req:any,res:any,next:any){
            let r = await Restaurante.findOne();
            let nome=r?.rest_nome;
            if(r){
                r.rest_nome=req.body.data.rest_nome;
                r.rest_desc=req.body.data.rest_desc;
                let logo=req.body.data.rest_logo;
                if(logo){
                    r.rest_logo=logo;
                }
            }
            if(nome && r){
                Restaurante.update(nome,r);
            }else{
                r?.save();
            }
            res.send(r);
        }
    }
    Gensave(){
        return async function(req:any,res:any,next:any){
            let r = await Pessoa.findOne(1);
            if(r){
                r.pes_nome=req.body.data.pes_nome;
                r.pes_email=req.body.data.pes_email;
                r.pes_fone=req.body.data.pes_fone;
                r.pes_senha=req.body.data.pes_senha;
                Pessoa.update(1,r);
            }
            res.send(r);
        }
    }
    getPessoa(){
        return async function(req:any,res:any,next:any){
            let p = await Pessoa.findOne(req.params.id) as Pessoa;
            res.send(p);
        }
    }
    savePessoa(){
        return async function(req:any,res:any,next:any){
            let r = await Pessoa.findOne(req.params.id);
            if(r){
                r.pes_email=req.body.data.pes_email;
                r.pes_fone=req.body.data.pes_fone;
                r.pes_senha=req.body.data.pes_senha;
                Pessoa.update(req.params.id,r);
            }
            res.send(r);
        }
    }
    registerRoute(){
        this.forRoute('/rest').get(this.getRestData());
        this.forRoute('/rest/gen').get(this.getGenData());
        this.forRoute('/login/:email/:senha').get(this.LogIn());
        this.forRoute('/cadastro/cliente').post(this.CadastroCliente());
        this.forRoute('/rest/save').post(this.Restsave());
        this.forRoute('/rest/gen/save').post(this.Gensave());
        this.forRoute('/pessoa/:id').get(this.getPessoa());
        this.forRoute('/pessoa/edit/:id').post(this.savePessoa());
    }
}