import Joi from 'joi'
import passwordComplexity from 'joi-password-complexity'

const validate = (data) => {
	const schema = Joi.object({
		student_id: Joi.string().required().label("Student ID"),
		name: Joi.string().required().label("Full Name"),
		email: Joi.string().email().required().label("Email"),
		faculty: Joi.string().required().label("Faculty"),
		password: passwordComplexity().required().label("Password"),
	});
	return schema.validate(data);
};

export default validate