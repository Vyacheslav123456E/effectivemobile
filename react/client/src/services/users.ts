import socket from "../socket";

export const getUsers = async () => {
    return new Promise(async (resolve, reject) => {
        await socket.emit('get-users', (response: any) => {
            resolve(response)
        })
    })
}
