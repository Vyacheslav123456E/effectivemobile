import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/sequelize";
import {Histories} from "./histories.model";
import {Users} from "../users/users.model";

@Injectable()
export class HistoriesService {
    constructor(
        @InjectModel(Histories) private historyModel: typeof Histories) {}

    async getHistoryId(payload: number){
        try {
            return await this.historyModel.findAll({
                where: {user_id: payload },
                include:[
                    {
                        model: Users,
                        attributes: ['email', 'name'],
                        required: true,
                    }
                ],
                attributes: ['id','event', 'created_at'],
                });
        } catch (e) {console.log(e)}
    }

}