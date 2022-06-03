import Router from "@koa/router";
import { createMarkingScheme } from "../api/markingScheme.js";

const router = new Router({
  prefix: "/markingScheme",
});

router.post("/", async (ctx, next) => {
  await createMarkingScheme(ctx.request.body)
    .then((res) => {
      ctx.body = res;
    })
    .catch((e) => {
      ctx.body = e.message;
    });
});

export default router;
