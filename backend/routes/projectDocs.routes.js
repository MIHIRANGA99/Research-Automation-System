import Router from "@koa/router";
import { submitProjectDocs, getProjectDocs, getOneProjectDoc } from "../api/projectDocs.js";

const router = new Router({
  prefix: "/projectDocs",
});

router.post("/", async (ctx, next) => {
  await submitProjectDocs(ctx.request.body)
    .then((res) => {
      ctx.body = res;
    })
    .catch((e) => {
      ctx.body = e.message;
    });
});

router.get("/", async (ctx, next) => {
  await getProjectDocs()
    .then((res) => {
      ctx.body = res;
    })
    .catch((e) => {
      ctx.body = e.message;
    });
});

router.get("/:id", async (ctx, next) => {
  await getOneProjectDoc(ctx.params.id)
    .then((res) => {
      ctx.body = res;
    })
    .catch((e) => {
      ctx.body = e.message;
    });
});

export default router