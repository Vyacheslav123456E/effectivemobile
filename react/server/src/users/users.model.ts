import {Column, DataType, HasMany, Model, Table} from "sequelize-typescript";
import {Histories} from "../histories/histories.model";

@Table({tableName: 'users', createdAt: false, updatedAt: false})
export class Users extends Model<Users> {
    @Column({type: DataType.INTEGER, allowNull: false,autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING, allowNull: true, defaultValue: null})
    email: string;

    @Column({type: DataType.STRING, allowNull: true, defaultValue: null})
    name: string;

    @Column({type: DataType.STRING, allowNull: true, defaultValue: null})
    password: string;

    @Column({type: DataType.INTEGER, allowNull: true, defaultValue: 0})
    role_id: number;

    @Column({type: DataType.DATE, allowNull: true, defaultValue: null})
    created_at: Date;
}