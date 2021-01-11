import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm";
@Entity()
export class Restaurante extends BaseEntity{
    @PrimaryColumn()
    rest_nome?:string;
    @Column("text")
    rest_desc?:string;
    @Column("text")
    rest_logo?:string;
}