import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Mesa extends BaseEntity{
    @PrimaryGeneratedColumn()
    mes_ID?:number;
    @Column()
    mes_status?:string;
    @Column("text")
    mes_qr?:string;
}