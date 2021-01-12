import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Pessoa } from "./Pessoa";
@Entity()
export class Reserva extends BaseEntity{
    @PrimaryGeneratedColumn()
    res_ID?:number;
    @Column()
    res_data?:Date;
    @ManyToOne(type=>Pessoa,res_pessoa=>res_pessoa.pes_ID)
    @JoinColumn()
    res_pessoa?:Pessoa;
}