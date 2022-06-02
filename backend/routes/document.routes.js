import Router from '@koa/router'
import { createDoc, deleteDoc, getDocs, getOneDoc, updateDoc } from '../api/document.js';

const router = new Router({
    prefix: "/document"
});

router.post('/', async (ctx, next) => {
    await createDoc(ctx.request.body).then((res) => {
        ctx.body = res
    }).catch((e) => {
        ctx.body = e.message
    })
})

router.get('/', async (ctx, next) => {
    await getDocs().then((res) => {
        ctx.body = res
    }).catch((e) => {
        ctx.body = e.message
    })
})

router.get('/:id', async (ctx, next) => {
    await getOneDoc(ctx.params.id).then((res) => {
        ctx.body = res
    }).catch((e) => {
        ctx.body = e.message
    })
})

router.put('/:id', async (ctx, next) => {
    await updateDoc(ctx.params.id, ctx.request.body).then((res) => {
        ctx.body = res
    }).catch((e) => {
        ctx.body = e.message
    })
})

router.delete('/:id', async (ctx, next) => {
    await deleteDoc(ctx.params.id).then((res) => {
        ctx.body = res
    }).catch((e) => {
        ctx.body = e.message
    })
})

export default router