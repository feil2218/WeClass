import { createRouter, createWebHashHistory } from "vue-router";
import stuGrades from "./components/stuGrades.vue"
import Login from "./components/Login.vue"
const router = createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:"/StuGrades",
            component:stuGrades
        },
        {
            path:"/",
            component:Login
        }
    ]
});

export default router;