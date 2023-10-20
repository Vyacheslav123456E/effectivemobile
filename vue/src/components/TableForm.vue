<template>
    <v-card min-width="100%">
        <v-card-title>Список пользователей</v-card-title>
        <v-toolbar flat>
            <v-spacer/>
            <v-btn color="primary" dark class="mb-2" @click="openDialog([])">
                Добавить
            </v-btn>
        </v-toolbar>
        <v-card-text>
            <v-data-table
                    :headers="headers"
                    :items="allUsers"
                    :page.sync="page"
                    :items-per-page="limit"
                    hide-default-footer
                    class="elevation-0">
                <template v-slot:[`item.actions`]="{ item }">
                    <td>
                        <v-icon @click="openDialog(item)" dense>mdi-pencil</v-icon>
                        <v-icon @click="openDialog(item)" dense>mdi-delete</v-icon>
                    </td>
                </template>
            </v-data-table>
            <div class="text-center pt-2">
                <v-row>
                    <v-col cols="9">
                        <v-pagination
                                v-model="page"
                                :length="Math.ceil(Count / limit)"
                                @input="handlePageChange"
                        ></v-pagination>
                    </v-col>
                    <v-col cols="2">
                        <v-combobox
                                v-model="limit"
                                :items="currents"
                                @change="choiceLimit(limit)"
                                dense
                        ></v-combobox>
                    </v-col>
                </v-row>
            </div>
        </v-card-text>
        <v-dialog
                v-model="dialog"
                max-width="500px">
            <EditForm
                    v-on:addForm="addForm"
                    v-on:closeEditForm="closeEditForm"/>
        </v-dialog>
    </v-card>
</template>

<script>
    import {mapGetters} from "vuex";
    import EditForm from "@/components/EditForm";

    export default {
        name: "TableForm",
        components: {EditForm},
        data() {
            return {
                limit: 10,
                currents: [5,10,20,30,40,50],
                page: 1,
                dialog: false,
                headers: [
                    {text: 'id', value: 'id'},
                    {text: 'Email', value: 'email'},
                    {text: 'Имя', value: 'name'},
                    {text: 'Роль', value: 'role'},
                    {text: 'Действие', value: 'actions', sortable: false},
                ],
            }
        },
        methods: {
            choiceLimit(value){
                this.$store.dispatch('users', {page: (this.page -1) * this.limit, limit: value})
            },
            handlePageChange(value){
                this.page = value;
                this.$store.dispatch('users', {page: (value -1) * this.limit, limit: this.limit})
            },
            async addForm(item) {
                if (item.password === item.repeat_password) {
                    if (item.id === null) {
                        await this.$store.dispatch('registration', {
                            email: item.email,
                            password: item.password,
                            id: item.id,
                            name: item.name,
                            role: item.role,
                            event: 'Добавление пользователя'
                        })
                    }else {
                        await this.$store.dispatch('updateUser', {
                            email: item.email,
                            password: item.password,
                            id: item.id,
                            name: item.name,
                            role: item.role,
                            event: 'Изменение данных пользователя'
                        })
                    }
                    await this.$store.dispatch('users', {page: this.page -1, limit: this.limit})
                }
                this.dialog = false
            },
            closeEditForm(value){
                this.dialog = value
            },
            openDialog(item){
                this.dialog = true
                if (item.length !== 0){
                    this.$store.commit('userItem',item)
                    this.$store.commit('roleItem',{id: item.role_id,role: item.role})
                }else {
                    this.$store.commit('userItem',[])
                    this.$store.commit('roleItem',{id: 2,role: 'user'})
                }
            }
        },
        created() {
            this.$store.dispatch('users', {page: this.page -1, limit: this.limit})
        },
        computed: mapGetters(["allUsers","Count"]),
    }
</script>

<style scoped>

</style>