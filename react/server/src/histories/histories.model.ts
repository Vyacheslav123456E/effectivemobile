import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {Users} from "../users/users.model";

@Table({tableName: 'history', createdAt: false, updatedAt: false})
export class Histories extends Model<Histories>{
    @Column({type: DataType.INTEGER, allowNull: false,autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING, allowNull: true, defaultValue: null})
    event: string;

    @ForeignKey(() => Users)
    @Column({type: DataType.INTEGER, allowNull: false})
    user_id: number;

    @Column({type: DataType.DATE, allowNull: true, defaultValue: null})
    created_at: Date;

    @BelongsTo(() => Users)
    users: Users
}