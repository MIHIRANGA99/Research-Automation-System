import Router from "@koa/router";
import {
  sendRequests,
  getRequests,
  getOneRequest,
  updateRequest,
  deleteRequest,
} from "../api/requests.js";

const router = new Router({
  prefix: "/requests",
});

router.post("/", async (ctx, next) => {
    const data = ctx.request.body
    await sendRequests(data).then((res) => {
        ctx.body = res
    }).catch((e) => {
        ctx.body = e.message
    })
});

router.get("/", async (ctx, next) => {
  await getRequests()
    .then((res) => {
      ctx.body = res;
    })
    .catch((e) => {
      ctx.body = e.message;
    });
});

router.get("/:id", async (ctx, next) => {
  await getOneRequest(ctx.params.id)
    .then((res) => {
      ctx.body = res;
    })
    .catch((e) => {
      ctx.body = e.message;
    });
});

router.patch("/:id", async (ctx, next) => {
  await updateRequest(ctx.params.id, ctx.request.body)
    .then((res) => {
      ctx.body = res;
    })
    .catch((e) => {
      ctx.body = e.message;
    });
});

router.delete("/:id", async (ctx, next) => {
  await deleteRequest(ctx.params.id)
    .then((res) => {
      ctx.body = res;
    })
    .catch((e) => {
      ctx.body = e.message;
    });
});

export default router;
