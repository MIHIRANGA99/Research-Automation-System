import Router from "@koa/router";
import { createMarkingScheme, getMarkingSchemes, getOneMarkingSchemes, updateMarkingSchemes} from "../api/markingScheme.js";

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

router.get("/", async (ctx, next) => {
  await getMarkingSchemes()
    .then((res) => {
      ctx.body = res;
    })
    .catch((e) => {
      ctx.body = e.message;
    });
});

router.get("/:id", async (ctx, next) => {
  await getOneMarkingSchemes(ctx.params.id)
    .then((res) => {
      ctx.body = res;
    })
    .catch((e) => {
      ctx.body = e.message;
    });
});

router.patch("/:id", async (ctx, next) => {
  await updateMarkingSchemes(ctx.params.id, ctx.request.body)
    .then((res) => {
      ctx.body = res;
    })
    .catch((e) => {
      ctx.body = e.message;
    });
});

export default router;
