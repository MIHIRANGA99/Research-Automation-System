import Router from "@koa/router";
import {
  getAllStudents,
  getOneStudent,
  updateStudent,
  deleteStudent,
} from "../api/student.js";
import {validate, validateLogin} from "../Validations/studentValidation.js";
import Student from "../models/Student.model.js";
import bcrypt from "bcrypt";

const router = new Router({
  prefix: "/student",
});

router.post("/register", async (ctx, next) => {
  const data = ctx.request.body;

  try {
    const { error } = validate(ctx.request.body);
    if (error) {
      console.log(error);
      ctx.body = error.message;
      return
    }

    const userIDCheck = await Student.findOne({
      student_id: ctx.request.body.student_id,
    });
    if (userIDCheck){
        ctx.body = "User with given Student ID already Exist!"
        return
    }

    const userMailCheck = await Student.findOne({
        email: ctx.request.body.email,
      });
      if (userMailCheck){
          ctx.body = "User with given E-mail already Exist!"
          return
      }

    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashPassword = await bcrypt.hash(ctx.request.body.password, salt);

    const newStudent = await new Student({ ...ctx.request.body, password: hashPassword }).save();
    ctx.body = newStudent
  } catch (error) {
    console.log("Internal Server Error", error);
    ctx.body = error.message;
  }
});

router.post("/login", async (ctx, next) => {
	try {
		const { error } = validateLogin(ctx.request.body);
		if (error){
            console.log(error);
            ctx.body = error.message;
            return
          }

		const user = await Student.findOne({ student_id: ctx.request.body.student_id });
		if (!user){
            ctx.body = "Invalid ID or Password"
            return
        }

		const validPassword = await bcrypt.compare(
			ctx.request.body.password,
			user.password
		);
		if (!validPassword){
            console.log("Invalid ID or Password");
            ctx.body = "Invalid ID or Password"
            return
        }

		const token = user.generateAuthToken();
    console.log("logged in successfully");
		ctx.body = { data: token, message: "logged in successfully" }
	} catch (error) {
    console.log(error.message, error)
		ctx.body = { message: "Internal Server Error" }
	}
});



router.get("/", async (ctx, next) => {
  await getAllStudents()
    .then((res) => {
      ctx.body = res;
    })
    .catch((err) => {
      ctx.body = "Cannot Get Data!";
      console.log(err.message);
    });
});

router.get("/:id", async (ctx, next) => {
  await getOneStudent(ctx.params.id)
    .then((res) => {
      ctx.body = res;
    })
    .catch((err) => {
      ctx.body = "Cannot Get Data!";
      console.log(err);
    });
});

router.patch("/update/:id", async (ctx, next) => {
  await updateStudent(ctx.params.id, ctx.request.body)
    .then((res) => {
      ctx.body = res;
    })
    .catch((err) => {
      ctx.body = "Cannot Update!";
      console.log(err.message);
    });
});

router.delete("/delete/:id", async (ctx, next) => {
  await deleteStudent(ctx.params.id)
    .then(() => {
      ctx.body = "Successfully Deleted!";
    })
    .catch((err) => {
      ctx.body = "Cannot Delete!";
      console.log(err.message);
    });
});

export default router;
