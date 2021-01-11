import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Comida extends BaseEntity{
    @PrimaryGeneratedColumn()
    com_ID?:number;
    @Column()
    com_nome?:string;
    @Column("float")
    com_preco?:number;
    @Column("text")
    com_desc?:string;
    @Column("text")
    com_img?:string;
}