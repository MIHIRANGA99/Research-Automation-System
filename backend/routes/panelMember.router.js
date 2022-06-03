import {addEvaluDetails} from "../api/panelMember.js";
import Router from "@koa/router";

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

export default router