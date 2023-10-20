<template>
    <v-layout column justify-center align-center >
        <v-card  min-width="400">
            <v-card-text>
                <div style="color: red">{{Errors}}</div>
                  <LoginForm v-on:loginForm = "loginForm"/>
            </v-card-text>

        </v-card>
    </v-layout>
</template>

<script>
    import LoginForm from "@/components/LoginForm";
    import {mapGetters} from "vuex";
    export default {
        name: "LoginViews",
        components: {LoginForm},
        computed: mapGetters(["Errors"]),
        methods: {
            async loginForm(item) {
                await this.$store.dispatch('login', {email: item.email, password: item.password,event: 'Залогинился'})
                    .then(response => {
                        if (response) {
                            this.$router.push('/')
                        }
                    })
            }
        },
    }
</script>

<style scoped>

</style>