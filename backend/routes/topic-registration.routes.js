import Router from "@koa/router";
import { registerTopic } from "../api/TopicRegistration.js";

const router = new Router({
    prefix: '/topic-registration'
})

router.post('/', async(ctx, next) =>{
    await registerTopic(ctx.request.body).then((res) => {
        ctx.body = res
    }).catch((e) => {
        ctx.body = e.message
    })
})

export default router