import axios from 'axios';
import Crypto from '@/utils/crypto'

export default {
    state: {
        user: [],
        error: '',
        allUsers: [],
        item: [],
        roles: [],
        count: 0,
        role: []
    },
    mutations: {
        setUser(state, user) {
            state.user = user
        },
        error(state, error) {
            state.error = error
        },
        setAllUsers(state, allUsers) {
            state.allUsers = allUsers
        },
        userItem(state, item) {
            state.item = item
        },
        roleItem(state, role){
            state.role = role
        },
        setRoles(state, roles) {
            state.roles = roles
        },
        setCount(state, count) {
            state.count = count
        },
    },
    getters: {
        Users(state) {
            return state.user
        },
        Errors(state) {
            return state.error
        },
        allUsers(state) {
            return state.allUsers
        },
        Item(state){
            return state.item
        },
        Roles(state){
            return state.roles
        },
        itemRole(state){
            return state.role
        },
        Count(state){
            return state.count
        }
    },
    actions: {
        login({commit}, payload) {
            return new Promise((resolve) => {
                axios.post('api/login', payload)
                    .then(async (response) => {
                        if (response.data.success) {
                            let decrypt = await Crypto.decrypt(response.data.msg)
                            sessionStorage.setItem('_inv', response.data.msg)
                            commit('setUser', JSON.parse(decrypt))
                            resolve(response.data.success)
                        } else {
                            resolve(response.data.success)
                            sessionStorage.removeItem('_inv')
                            commit('error', response.data.msg)
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            })
        },
        registration({commit}, payload) {
            return new Promise((resolve) => {
                axios.post('api/registration', payload)
                    .then(async (response) => {
                        if (response.data.success) {
                            let decrypt = await Crypto.decrypt(response.data.msg)
                            sessionStorage.setItem('_inv', response.data.msg)
                            commit('setUser', decrypt)
                            resolve(response.data.success)
                        } else {
                            resolve(response.data.success)
                            commit('error', response.data.msg)
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            })
        },
        updateUser({commit}, payload) {
            return new Promise((resolve) => {
                axios.post('api/update-user', payload)
                    .then(async (response) => {
                        if (response.data.success) {
                            let decrypt = await Crypto.decrypt(response.data.msg)
                            commit('setUser', JSON.parse(decrypt))
                            sessionStorage.setItem('_inv', response.data.msg)
                            resolve(response.data.success)
                        } else {
                            resolve(response.data.success)
                            commit('error', response.data.msg)
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            })
        },
        users({commit},payload) {
            axios.post('api/users',payload)
                .then(async (response) => {
                    commit('setAllUsers', response.data.msg)
                    commit('setCount', Number(response.data.count))
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        editUser({commit}, payload){
            axios.post('api/edit-users', payload)
                .then(async (response) => {
                    commit('setAllUsers', response.data.msg)
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        roles({commit}){
            axios.post('api/roles')
                .then(async (response) => {
                    commit('setRoles', response.data.msg)
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
}
