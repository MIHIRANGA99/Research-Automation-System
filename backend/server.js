import { connect } from "./utils/db.connection.js";
import 'dotenv/config'
import json from "koa-json";
import Koa from "koa";

const app = new Koa();

const PORT = process.env.PORT || "8090";

app.use(json());

app.listen(PORT, () => {
  console.log("Server Started on port : " + PORT);
  connect();
});
