<template>
    <v-form validate-on="submit lazy" @submit.prevent="submit">
        <v-text-field v-model="userName" label="Email"></v-text-field>
        <v-text-field v-model="password" label="Пароль"
                      :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                      :type="show1 ? 'text' : 'password'"
                      @click:append="show1 = !show1"></v-text-field>
        <v-text-field v-model="repeat_password" label="Повторите пароль"
                      :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                      :type="show1 ? 'text' : 'password'"
                      @click:append="show1 = !show1"></v-text-field>

        <p class="font-weight-regular" v-show="!add">
            <router-link :to="'/login'">Логин</router-link>
        </p>
        <v-card-actions v-show="!add">
            <v-btn type="submit" block color="primary">
                Регистрация
            </v-btn>
        </v-card-actions>
    </v-form>
</template>
<script>
    export default {
        name: "RegistrationForm",
        props: ['add'],
        data() {
            return {
                show1: false,
                userName: null,
                password: null,
                repeat_password: null
            }
        },
        methods: {
            async submit() {
                this.$emit('registrationForm', {email: this.userName, password: this.password,repeat_password: this.repeat_password})
            },
        }

    }
</script>