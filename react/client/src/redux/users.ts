import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getUsers} from '../services/users'
import {IUsers} from "../types/users";
import {IHistory} from "../types/hisory";
import {getHistoryUserId} from "../services/history";

interface IUsersState {
    users: Array<IUsers>,
    history: Array<IHistory>
}

const initialState: IUsersState = {
    users: [],
    history: []
};
export const Users = createAsyncThunk(
    'Users',
    async () => {
        const response: any = await getUsers();

        return response
    }
)
export const HistoryUser = createAsyncThunk(
    'HistoryUser',
    async (payload: number) => {
        const response: any = await getHistoryUserId(payload);

        return response
    }
)
const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(Users.fulfilled, (state, action) => {
            state.users = action.payload
        })
        builder.addCase(HistoryUser.fulfilled, (state, action) => {
            state.history = action.payload
        })
    },
});
export default usersSlice.reducer;