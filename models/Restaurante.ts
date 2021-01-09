import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm";
@Entity()
export class Restaurante extends BaseEntity{
    @PrimaryColumn()
    rest_nome?:string;
    @Column()
    rest_desc?:string;
    @Column()
    rest_logo?:string;
}