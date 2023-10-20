import {Module} from "@nestjs/common";
import {SequelizeModule} from "@nestjs/sequelize";
import {Histories} from "./histories.model";
import {HistoriesService} from "./histories.service";
import {HistoriesGateway} from "./histories.gateway";


@Module({
    providers: [HistoriesService, HistoriesGateway,],
    imports: [
        SequelizeModule.forFeature([Histories]),
    ]
})
export class HistoriesModule {}