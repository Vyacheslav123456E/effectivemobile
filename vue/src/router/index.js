import VueRouter from "vue-router";
import LoginViews from "@/views/LoginViews";
import RegistrationViews from "@/views/RegistrationViews";
import UsersViews from "@/views/UsersViews";

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/login',
            name: 'login',
            component: LoginViews
        },
        {
            path: '/registration',
            name: 'registration',
            component: RegistrationViews
        },
        {
            path: '/',
            name: 'users',
            component: UsersViews
        },
    ],
})
router.beforeEach((to, from, next) => {
    next();
});
export default router;