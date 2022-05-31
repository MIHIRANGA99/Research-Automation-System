import Router from '@koa/router'
import { addSubmissionType, deleteSubmissionType, getOneSubmissionType, getSubmissionTypes, updateSubmissionType } from '../api/submissionType.js'

const router = new Router({
    prefix: '/submission-types'
})

router.post('/add', async (ctx, next) => {
    const data = ctx.request.body
    await addSubmissionType(data).then((res) => {
        ctx.body = res
    }).catch((e) => {
        ctx.body = e.message
    })
})

router.get('/', async (ctx, next) => {
    await getSubmissionTypes().then((res) => {
        ctx.body = res
    }).catch((e) => {
        ctx.body = e.message
    })
})

router.get('/:id', async (ctx, next) => {
    await getOneSubmissionType(ctx.params.id).then((res) => {
        ctx.body = res
    }).catch((e) => {
        ctx.body = e.message
    })
})

router.put('/:id', async (ctx, next) => {
    await updateSubmissionType(ctx.params.id, ctx.request.body).then((res) => {
        ctx.body = res
    }).catch((e) => {
        ctx.body = e.message
    })
})

router.delete('/:id', async (ctx, next) => {
    await deleteSubmissionType(ctx.params.id).then((res) => {
        ctx.body = res
    }).catch((e) => {
        ctx.body = e.message
    })
})

export default router