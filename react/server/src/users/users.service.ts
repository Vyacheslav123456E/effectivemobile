import {Injectable} from "@nestjs/common";

import {InjectModel} from "@nestjs/sequelize";
import {Users} from "./users.model";

@Injectable()
export class UsersService {
    constructor(@InjectModel(Users) private userModel: typeof Users) {}

    async getUsers() {
        return await this.userModel.findAll({ order: [['id', 'DESC']],});
    }
}