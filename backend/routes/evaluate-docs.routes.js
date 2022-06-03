import Router from "@koa/router";
import {
  getMarks,
  getOneMark,
  updateMarks,
  deleteMarks,
} from "../api/evaluateDocs.js";

const router = new Router({
  prefix: "/Marks",
});

router.get("/", async (ctx, next) => {
  await getMarks()
    .then((res) => {
      ctx.body = res;
    })
    .catch((e) => {
      ctx.body = e.message;
    });
});

router.get("/:id", async (ctx, next) => {
  await getOneMark(ctx.params.id)
    .then((res) => {
      ctx.body = res;
    })
    .catch((e) => {
      ctx.body = e.message;
    });
});

router.patch("/:id", async (ctx, next) => {
  await updateMarks(ctx.params.id, ctx.request.body)
    .then((res) => {
      ctx.body = res;
    })
    .catch((e) => {
      ctx.body = e.message;
    });
});

router.delete("/:id", async (ctx, next) => {
  await deleteMarks(ctx.params.id)
    .then((res) => {
      ctx.body = res;
    })
    .catch((e) => {
      ctx.body = e.message;
    });
});

export default router;
