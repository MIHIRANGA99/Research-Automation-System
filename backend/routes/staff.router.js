import Router from '@koa/router'
import {addStaff, deleteStaff, getAllStaff, getOneStaff, updateStaff} from "../api/staff.js";

const router = new Router({
    prefix: "/staff"
});

router.post('/addStaff', async (ctx) => {
    const data = ctx.request.body;
    console.log(data);
    const post = await addStaff(data);
    ctx.body = post;
    ctx.set('Content-Type', 'application.json');
    ctx.status = 201;
})

router.get("/", async (ctx, next) => {
    await getAllStaff().then((res) => {
        ctx.body = res
    }).catch((err) => {
        ctx.body = "Cannot Get Data!"
        console.log(err.message)
    });
});

router.get("/:id", async (ctx, next) => {
    await getOneStaff(ctx.params.id).then((res) => {
        ctx.body = res;
    }).catch(err => {
        ctx.body = "Cannot Get Data!"
        console.log(err)
    });
})

router.patch("/update/:id", async (ctx, next) => {
    await updateStaff(ctx.params.id, ctx.request.body).then((res) => {
        ctx.body = res;
    }).catch(err => {
        ctx.body = "Cannot Update!"
        console.log(err.message);
    });
});

router.delete("/delete/:id", async (ctx, next) => {
    await deleteStaff(ctx.params.id).then(() => {
        ctx.body = "Successfully Deleted!"
    }).catch(err => {
        ctx.body = "Cannot Delete!"
        console.log(err.message);
    });
});

export default router;