import { BaseEntity, Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Pessoa } from "./Pessoa";
@Entity()
export class Reserva extends BaseEntity{
    @PrimaryGeneratedColumn()
    res_ID?:number;
    @Column()
    res_data?:Date;
    @OneToOne(type => Pessoa)
    @JoinColumn()
    cliente?:Pessoa;
}