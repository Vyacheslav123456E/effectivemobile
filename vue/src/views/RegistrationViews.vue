<template>
    <v-layout column justify-center align-center>
        <v-card min-width="400">
            <v-card-text>
                <div style="color: red">{{Errors}}</div>
                <RegistrationForm v-on:registrationForm = "registrationForm" v-bind:type="add"/>
            </v-card-text>
        </v-card>
    </v-layout>
</template>

<script>
    import RegistrationForm from "@/components/RegistrationForm";
    import {mapGetters} from "vuex";
    export default {
        name: "RegistrationViews",
        components: {RegistrationForm},
        data() {
            return {
                add: false,
            }
        },
        computed: mapGetters(["Errors"]),
        methods: {
            async registrationForm(item) {
                console.log(item)
                if (item.password === item.repeat_password) {
                    await this.$store.dispatch('registration',
                        {
                            email: item.email,
                            password: item.password,
                            role: 2,
                            event: 'Регистрация'
                        })
                        .then(response => {
                            if (response) {
                                this.$router.push('/')
                            }
                        })
                }
            }
        },
    }
</script>

<style scoped>

</style>