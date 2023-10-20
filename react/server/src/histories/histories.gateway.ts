import {SubscribeMessage, WebSocketGateway,WebSocketServer} from "@nestjs/websockets";
import {Server, Socket} from "socket.io";
import {HistoriesService} from "./histories.service";

@WebSocketGateway({cors:{
        origin:"http://localhost:3000", methods: ["GET","POST"],
        credentials: true, transports: ['websocket', 'polling']},
    allowEIO3: true
})
export class HistoriesGateway {
    @WebSocketServer() server: Server;
    constructor(private historiesService: HistoriesService) {};

    @SubscribeMessage('get-history-user-id')
    async getHistories(socket: Socket,payload: number){
        try {
            return  await this.historiesService.getHistoryId(payload)
        } catch (e) {console.log(e)}
    }
}