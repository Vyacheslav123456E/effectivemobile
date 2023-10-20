export interface IHistory {
    id: number,
    event: string,
    user_id: number,
    created_at: string,
    users: {
        email: string,
        name: string
    }
}