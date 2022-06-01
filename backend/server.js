import { connect } from "./utils/db.connection.js";
import "dotenv/config";
import studentRouter from "./routes/student.routes.js";
import json from "koa-json";
import bodyparser from "koa-bodyparser";
import Koa from "koa";
import staffRouter from "./routes/staff.router.js";
import evaluateRouter from "./routes/panelMember.router.js";

const app = new Koa();

const PORT = process.env.PORT || "8090";

app.use(json());
app.use(bodyparser());
app.use(async (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', '*');
  ctx.set('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
  ctx.set('Access-Control-Allow-Headers', 'Content-Type');
  await next();
});

app.use(studentRouter.routes()).use(studentRouter.allowedMethods());
app.use(staffRouter.routes()).use(staffRouter.allowedMethods());
app.use(evaluateRouter.routes()).use(evaluateRouter.allowedMethods());

app.listen(PORT, () => {
  console.log("Server Started on port : " + PORT);
  connect();
});
