import { Mesa } from "../models/Mesa";
import { AbstractController } from "./AbstractController";
export class MesaController extends AbstractController{
    protected prefix:string='';
    getMesas(){
        return async function(req:any,res:any,next:any){
            let m:Mesa[]|undefined = await Mesa.find();
            res.send(m);
        }
    }
    addMesa(){
        return async function(req:any,res:any,next:any){
            let ms:Mesa[]|undefined = await Mesa.find();
            let m = new Mesa();
            m.mes_ID=ms.length+1;
            m.mes_status="LIVRE";
            m.mes_qr=req.body.qr;
            m.save();
            res.send(m);
        }
    }
    remMesa(){
        return async function(req:any,res:any,next:any){
            let m:Mesa[]|undefined = await Mesa.find();
            Mesa.delete(m.length);
            res.send(null);
        }
    }
    registerRoute(){
        this.forRoute(`/mesa`).get(this.getMesas());
        this.forRoute(`/mesa/add`).post(this.addMesa());
        this.forRoute(`/mesa/delete`).delete(this.remMesa());
    }
}