import { getConnection } from "typeorm";
import { Pessoa } from "../models/Pessoa";
import { Reserva } from "../models/Reserva";
import { AbstractController } from "./AbstractController";
export class ReservaController extends AbstractController{
    protected prefix:string='';
    make(){
        return async function(req:any,res:any,next:any){
            let r = new Reserva();
            r.res_data=req.body.data;
            r.res_pessoa=req.params.id;
            r.save();
            res.send(r);
        }
    }
    get(){
        return async function(req:any,res:any,next:any){
            let r:Reserva[]|undefined = await Reserva.find({res_pessoa:req.params.id});
            res.send(r);
        }
    }
    getAll(){
        return async function(req:any,res:any,next:any){
            let r = await Reserva.find({relations:["res_pessoa"]});
            res.send(r);
        }
    }
    del(){
        return async function(req:any,res:any,next:any){
            let r = await Reserva.delete(req.params.id);
            res.send(r);
        }
    }
    registerRoute(){
        this.forRoute('/reserva/pessoa/:id').post(this.make());
        this.forRoute('/reserva/:id').get(this.get());
        this.forRoute('/reservas').get(this.getAll());
        this.forRoute('/reserva/del/:id').delete(this.del());
    }
}