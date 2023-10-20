<template>
    <v-card>
        <v-card-title>
            <span class="text-h5">Добавиь пользователя</span>
        </v-card-title>

        <v-card-text>
            <v-container>
                <v-col cols="12">
                    <v-text-field v-if="editItem.length === 0" v-model="editItem.email" label="Email" dense></v-text-field>
                    <h3 v-else>{{editItem.email}}</h3>
                </v-col>
                <v-col cols="12">
                    <v-text-field ref="name" v-model="editItem.name" label="Имя" dense></v-text-field>
                </v-col>
                <v-col cols="12">
                    <v-text-field ref="password" v-model="password" label="Пароль" dense
                                  :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                  :type="show1 ? 'text' : 'password'"
                                  @click:append="show1 = !show1"></v-text-field>
                </v-col>
                <v-col cols="12">
                    <v-text-field ref="repeat_password"  v-model="repeat_password" label="Повторите пароль"
                                  :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                  :type="show1 ? 'text' : 'password'" dense
                                  @click:append="show1 = !show1"></v-text-field>
                </v-col>
                <v-col cols="12">
                    <v-combobox  v-model="editRole" :items="Roles" item-text="role" item-value="id"
                                 label="Роль" dense>
                    </v-combobox>
                </v-col>
            </v-container>
        </v-card-text>

        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="close">
                Закрыть
            </v-btn>
            <v-btn color="blue darken-1" text @click="save">
                Сохранить
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "EditForm",
        data() {
            return {
                selectRole: null,
                show1: false,
                editEmail: null,
                password: null,
                editRoleRT: null,
                repeat_password: null,
            }
        },
        created() {
            this.$store.dispatch('roles')
        },
        methods: {
            close () {
                this.$refs.password.reset();
                this.$refs.repeat_password.reset();
                this.$refs.name.reset();
                this.$emit('closeEditForm', false)
            },
            async save(){
                if (this.password === this.repeat_password) {
                   await this.$emit('addForm', {
                        email: this.editItem.email,
                        role: this.editRoleRT === null ? this.editRole.id === null || undefined ? 2 : this.editRole.id :  this.editRoleRT.id ,
                        name: this.editItem.name,
                        id: this.editItem.id === undefined ? null : this.editItem.id,
                        password: this.password,
                        repeat_password: this.repeat_password
                    })
                    this.$refs.password.reset();
                    this.$refs.repeat_password.reset();
                    this.$refs.name.reset();
                }
                this.dialog = false
            },
        },
        computed: {
            ...mapGetters(["Item",'Roles','itemRole']),
            editItem: {
                get() {
                    return this.Item
                },
                set(value) {
                    this.editRole= value.id
                }
            },
            editRole: {
                get() {
                    return this.itemRole
                },
                set(value) {
                    this.editRoleRT= value
                }
            },
        },
    }
</script>

<style scoped>

</style>