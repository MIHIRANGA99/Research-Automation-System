import { connect } from "./utils/db.connection.js";
import "dotenv/config";
import studentRouter from "./routes/student.routes.js";
import json from "koa-json";
import bodyparser from "koa-bodyparser";
import cors from "@koa/cors";
import Koa from "koa";
import staffRouter from "./routes/staff.router.js";
import requestsRouter from "./routes/requests.routes.js";
import topicRegistration from "./routes/topic-registration.routes.js"
import evaluateRouter from "./routes/panelMember.router.js";
import submissionTypeRouter from "./routes/submission-type.routes.js"
import documentRouter from "./routes/document.routes.js"
import panelRouter from "./routes/panel.routes.js"
import studentGroupRouter from "./routes/student-group.routes.js"
import evaluateDocsRouter from "./routes/evaluate-docs.routes.js"
import markingSchemeRouter from "./routes/markingScheme.routes.js"
import projectDocsRouter from "./routes/projectDocs.routes.js"

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
app.use(requestsRouter.routes()).use(requestsRouter.allowedMethods());
app.use(topicRegistration.routes()).use(topicRegistration.allowedMethods());
app.use(evaluateDocsRouter.routes()).use(evaluateDocsRouter.allowedMethods());
app.use(markingSchemeRouter.routes()).use(markingSchemeRouter.allowedMethods());
app.use(projectDocsRouter.routes()).use(projectDocsRouter.allowedMethods());

app.listen(PORT, () => {
  console.log("Server Started on port : " + PORT);
  connect();
});
