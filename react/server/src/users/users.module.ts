import {UsersService} from "./users.service";
import {UsersGateway} from "./users.gateway";
import {SequelizeModule} from "@nestjs/sequelize";
import {Module} from "@nestjs/common";
import {Users} from "./users.model";


@Module({
    providers: [UsersService,UsersGateway],
    imports:[
        SequelizeModule.forFeature([Users]),
    ],
})
export class UsersModule {}