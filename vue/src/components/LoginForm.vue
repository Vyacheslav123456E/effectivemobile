<template>
    <v-form validate-on="submit lazy" @submit.prevent="submit">
        <v-text-field v-model="userName" label="Email"></v-text-field>
        <v-text-field v-model="password" label="Пароль"
                      :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                      :type="show1 ? 'text' : 'password'"
                      @click:append="show1 = !show1"></v-text-field>

        <p class="font-weight-regular">
            <router-link :to="'/registration'">Регистрация</router-link>
        </p>
        <v-card-actions>
            <v-btn type="submit" block color="primary">
                Вход
            </v-btn>
        </v-card-actions>
    </v-form>
</template>

<script>
    export default {
        name: "LoginForm",
        data() {
            return {
                emailRules: [v => !!v || 'Обязательное поле'],
                passwordRules: [v => !!v || 'Обязательное поле'],
                show1: false,
                userName: null,
                password: null
            }
        },
        methods: {
            async submit() {
                this.$emit('loginForm', {email: this.userName, password: this.password})
            }
        },

    }
</script>

<style scoped>

</style>