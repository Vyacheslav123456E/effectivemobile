<template>
    <v-layout column justify-center align-center >
      <v-card  min-width="400">
        <v-card-title>Профиль</v-card-title>
          <v-card-text>
              <v-form validate-on="submit lazy" @submit.prevent="submit">
                  <v-text-field v-model="editUser" label="Email"></v-text-field>
                  <v-text-field v-model="password" label="Пароль"
                                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                :type="show1 ? 'text' : 'password'"
                                @click:append="show1 = !show1"></v-text-field>
                  <v-text-field v-model="repeat_password" label="Повторите пароль"
                                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                :type="show1 ? 'text' : 'password'"
                                @click:append="show1 = !show1"></v-text-field>

                  <p class="font-weight-regular">
                      <router-link :to="'/'">Логин</router-link>
                  </p>
                  <v-card-actions>
                      <v-btn  type="submit" block color="primary">
                          Сохранмть
                      </v-btn>
                  </v-card-actions>
              </v-form>
          </v-card-text>
    </v-card>
    </v-layout>
</template>

<script>
    import {mapGetters} from "vuex";
    export default {
        name: "ProfileViews",
        data() {
            return {
                show1: false,
                userName: null,
                password: null,
                repeat_password: null,
                editTextareaUser: null
            }
        },
        methods: {
            async submit() {
                if (this.password === this.repeat_password) {
                    await this.$store.dispatch('updateUser', {email: this.userName, password: this.password})
                }
            }
        },
        computed: {
            ...mapGetters(["Users"]),
            editUser: {
                get() {
                    return this.Users.email
                },
                set(newName) {
                    return this.editTextareaUser = newName
                }
            },
        },
    }
</script>

<style scoped>

</style>