import { BaseEntity, Entity, JoinColumn, OneToOne, PrimaryColumn, Column } from "typeorm";
import { Pessoa } from "./Pessoa";
@Entity()
export class Funcionario extends BaseEntity{
    @PrimaryColumn("double")
    fun_salario?:number;
    @Column()
    fun_cargo?:number;
    @OneToOne(type => Pessoa)
    @JoinColumn()
    pessoa?:Pessoa;
}