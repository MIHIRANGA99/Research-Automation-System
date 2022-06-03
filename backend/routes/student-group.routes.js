import Router from "@koa/router";
import {getAllGroups, registerGroup, updateGroup} from "../api/studentGroup.js";

const router = new Router({
    prefix: '/student-group'
})

router.post('/create', async (ctx, next) =>{
    await registerGroup(ctx.request.body).then((res) => {
        ctx.body = res
    }).catch((e) => {
        ctx.body = e.message
    })
})

router.get('/', async (ctx, next) =>{
    await getAllGroups(ctx.request.body).then((res) => {
        ctx.body = res
    }).catch((e) => {
        ctx.body = e.message
    })
})

router.patch('/:id', async (ctx, next) => {
    await updateGroup(ctx.params.id, ctx.request.body).then((res) => {
        ctx.body = res
    }).catch(e => {
        console.log(e.message)
    })
})

export default router