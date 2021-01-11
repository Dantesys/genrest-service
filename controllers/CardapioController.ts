import { Comida } from "../models/Comida";
import { AbstractController } from "./AbstractController";
export class CardapioController extends AbstractController{
    protected prefix:string='';
    getCardapio(){
        return async function(req:any,res:any,next:any){
            let r:Comida[]|undefined = await Comida.find();
            res.send(r);
        }
    }
    addComida(){
        return async function(req:any,res:any,next:any){
            let comida = new Comida();
            comida.com_desc=req.body.comida.com_desc;
            comida.com_img=req.body.comida.com_img;
            comida.com_nome=req.body.comida.com_nome;
            comida.com_preco=req.body.comida.com_preco;
            comida.save();
            res.send(comida);
        }
    }
    delComida(){
        return async function(req:any,res:any,next:any){
            Comida.delete(req.params.id);
            res.send(null);
        }
    }
    editComida(){
        return async function(req:any,res:any,next:any){
            let id = req.params.id;
            console.log(id);
            let comida = await Comida.findOne(id);
            if(comida){
                comida.com_desc=req.body.comida.com_desc;
                comida.com_img=req.body.comida.com_img;
                comida.com_nome=req.body.comida.com_nome;
                comida.com_preco=req.body.comida.com_preco;
            }else{
                comida = new Comida();
                comida.com_desc=req.body.comida.com_desc;
                comida.com_img=req.body.comida.com_img;
                comida.com_nome=req.body.comida.com_nome;
                comida.com_preco=req.body.comida.com_preco;
            }
            Comida.update(id,comida);
            res.send(comida);
        }
    }
    registerRoute(){
        this.forRoute('/cardapio').get(this.getCardapio());
        this.forRoute('/cardapio/add').post(this.addComida());
        this.forRoute('/cardapio/delete/:id').delete(this.delComida());
        this.forRoute('/cardapio/edit/:id').put(this.editComida());
    }
}