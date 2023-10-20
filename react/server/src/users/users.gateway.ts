import {SubscribeMessage, WebSocketGateway} from "@nestjs/websockets";
import {UsersService} from "./users.service";
import {UsersDto} from "./dto/users.dto";
import {Socket} from "socket.io";

@WebSocketGateway({cors:{
        origin:"http://localhost:3000", methods: ["GET","POST"],
        credentials: true, transports: ['websocket', 'polling']},
    allowEIO3: true
})
export class UsersGateway {
    constructor(private usersService: UsersService) {};

    @SubscribeMessage('get-users')
    async users(){
        try {
            return  await this.usersService.getUsers()
        } catch (e) {console.log(e)}
    }
}