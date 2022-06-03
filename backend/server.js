import { connect } from "./utils/db.connection.js";
import "dotenv/config";
import studentRouter from "./routes/student.routes.js";
import json from "koa-json";
import bodyparser from "koa-bodyparser";
import cors from "@koa/cors";
import Koa from "koa";
import staffRouter from "./routes/staff.router.js";
import evaluateRouter from "./routes/panelMember.router.js";
import submissionTypeRouter from "./routes/submission-type.routes.js"
import documentRouter from "./routes/document.routes.js"
import panelRouter from "./routes/panel.routes.js"
import studentGroupRouter from "./routes/student-group.routes.js"

const app = new Koa();

const PORT = process.env.PORT || "8090";

app.use(json());
app.use(cors());
app.use(bodyparser());

app.use(studentRouter.routes()).use(studentRouter.allowedMethods());
app.use(staffRouter.routes()).use(staffRouter.allowedMethods());
app.use(evaluateRouter.routes()).use(evaluateRouter.allowedMethods());
app.use(submissionTypeRouter.routes()).use(submissionTypeRouter.allowedMethods());
app.use(documentRouter.routes()).use(documentRouter.allowedMethods());
app.use(panelRouter.routes()).use(panelRouter.allowedMethods());
app.use(studentGroupRouter.routes()).use(studentGroupRouter.allowedMethods());

app.listen(PORT, () => {
  console.log("Server Started on port : " + PORT);
  connect();
});
