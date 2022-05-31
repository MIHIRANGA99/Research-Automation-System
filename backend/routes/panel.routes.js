import Router from "@koa/router";
import { registerPanel, getPanels, getOnePanel, updatePanel, deletePanel } from "../api/panel.js";

const router = new Router({
    prefix: '/panel'
})

router.post('/register', async (ctx, next) => {
    await registerPanel(ctx.request.body).then((res) => {
        ctx.body = res
    }).catch((e) => {
        ctx.body = e.message
    })
})

router.get('/', async (ctx, next) => {
    await getPanels().then((res) => {
        ctx.body = res
    }).catch((e) => {
        ctx.body = e.message
    })
})

router.get('/:id', async (ctx, next) => {
    await getOnePanel(ctx.params.id).then((res) => {
        ctx.body = res
    }).catch((e) => {
        ctx.body = e.message
    })
})

router.patch('/:id', async (ctx, next) => {
    await updatePanel(ctx.params.id, ctx.request.body).then((res) => {
        ctx.body = res
    }).catch((e) => {
        ctx.body = e.message
    })
})

router.delete('/:id', async (ctx, next) => {
    await deletePanel(ctx.params.id).then((res) => {
        ctx.body = res
    }).catch((e) => {
        ctx.body = e.message
    })
})

export default router