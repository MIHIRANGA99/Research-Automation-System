import Router from '@koa/router'
import { getAllStudents, getOneStudent, updateStudent, deleteStudent } from '../api/student.js';

const router = new Router({
    prefix: "/student"
});

router.get("/", async (ctx, next) => {
    await getAllStudents().then((res) => {
        ctx.body = res
    }).catch((err) => {
        ctx.body = "Cannot Get Data!"
        console.log(err.message)
    });
});

router.get("/:id", async (ctx, next) => {
    await getOneStudent(ctx.params.id).then((res) => {
        ctx.body = res;
    }).catch(err => {
        ctx.body = "Cannot Get Data!"
        console.log(err)
    });
})

router.patch("/update/:id", async (ctx, next) => {
    await updateStudent(ctx.params.id, ctx.request.body).then((res) => {
        ctx.body = res;
    }).catch(err => {
        ctx.body = "Cannot Update!"
        console.log(err.message);
    });
});

router.delete("/delete/:id", async (ctx, next) => {
    await deleteStudent(ctx.params.id).then(() => {
        ctx.body = "Successfully Deleted!"
    }).catch(err => {
        ctx.body = "Cannot Delete!"
        console.log(err.message);
    });
});

export default router;