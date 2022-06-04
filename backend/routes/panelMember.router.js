import {
    addEvaluDetails,
    addTopicEvaluDetails,
    getGroupDetailsById,
    getGroupListById,
    getPresenEvaluById
} from "../api/panelMember.js";
import Router from "@koa/router";
import {getAllStaff, getOneStaff} from "../api/staff.js";

const router = new Router({
    prefix: "/panelMember"
});

router.post('/evaluatePresentation', async (ctx) => {
    const data = ctx.request.body;
    const post = await addEvaluDetails(data);
    ctx.body = post;
    ctx.set('Content-Type', 'application.json');
    ctx.status = 201;
})

router.post('/evaluateTopic', async (ctx) => {
    const data = ctx.request.body;
    const post = await addTopicEvaluDetails(data);
    ctx.body = post;
    ctx.set('Content-Type', 'application.json');
    ctx.status = 201;
})

router.get("/getEvaluatePresentation/:id", async (ctx, next) => {
    await getPresenEvaluById(ctx.params.id).then((res) => {
        ctx.body = res;
    }).catch(err => {
        ctx.body = "Cannot Get Data!"
        console.log(err)
    });
})

router.get("/getGroupList/:id", async (ctx, next) => {
    await getGroupListById(ctx.params.id).then((res) => {
        ctx.body = res;
    }).catch(err => {
        ctx.body = "Cannot Get Data!"
        console.log(err)
    });
})

router.get("/getGroupDetails/:id", async (ctx, next) => {
    await getGroupDetailsById(ctx.params.id).then((res) => {
        ctx.body = res;
    }).catch(err => {
        ctx.body = "Cannot Get Data!"
        console.log(err)
    });
})
export default router