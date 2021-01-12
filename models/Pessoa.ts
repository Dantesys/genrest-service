import { BaseEntity, Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Reserva } from "./Reserva";
@Entity()
export class Pessoa extends BaseEntity{
    @PrimaryGeneratedColumn()
    pes_ID?:number;
    @Column()
    pes_nome?:string;
    @Column()
    pes_email?:string;
    @Column()
    pes_senha?:string;
    @Column()
    pes_fone?:string;
}