import Router from "@koa/router";
import {registerGroup} from "../api/studentGroup.js";

const router = new Router({
    prefix: '/student-group'
})

router.post('/', async (ctx, next) =>{
    await registerGroup(ctx.request.body).then((res) => {
        ctx.body = res
    }).catch((e) => {
        ctx.body = e.message
    })
})

export default router