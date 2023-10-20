import socket from "../socket";


export const getHistoryUserId = async (payload: number) => {
    return new Promise(async (resolve, reject) => {
        await socket.emit('get-history-user-id',payload, (response: any) => {
            resolve(response)
        })
    })
}