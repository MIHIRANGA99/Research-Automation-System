import { useState } from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";
import "./registration.css";

const Signup = () => {
	const [data, setData] = useState({
		student_id: "",
		name: "",
		email: "",
        faculty: "",
		password: "",
	});
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			
			const url = "http://localhost:8090/student/register";
			const { data: res } = await axios.post(url, data);
			navigate("/student/login");
			console.log(res.message);
			
		} catch (error) {
			if (
				console.log("Hari")
			) {
				setError(error.response.data.message);
			}
		}
	};

	return (
		<div className="signup_container">
			<div className="signup_form_container">
				<div className="left_part">
					<h1>Welcome Back</h1>
					<Link to="/student/login">
						<button type="button" className="white_btn">
							SIGN IN
						</button>
					</Link>
				</div>
				<div className="right_part">
					<form className="form_container" onSubmit={handleSubmit}>
						<h1>Create Account</h1>
						<input
							type="String"
							placeholder="Student ID"
							name="student_id"
							onChange={handleChange}
							value={data.student_id}
							required
							className="input"
						/>
						<input
							type="String"
							placeholder="Student Name"
							name="name"
							onChange={handleChange}
							value={data.name}
							required
							className="input"
						/>
						<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
							className="input"
						/>
                        <div className="select">
							<select name="faculty" onChange={handleChange}>
								<option value="0">Select Faculty:</option>
								<option value="Faculty of Computing">Faculty of Computing</option>
								<option value="Faculty of Engineering">Faculty of Engineering</option>
								<option value="Faculty of Business Management">Faculty of Business Management</option>
							</select>	
						</div>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
							className="input"
						/>
						{error && <div className="error_msg">{error}</div>}
						<button type="submit" className="green_btn">
							Sign Up
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Signup;