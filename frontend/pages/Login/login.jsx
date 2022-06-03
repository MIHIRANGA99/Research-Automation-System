import { useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom"
import "./login.css"

const Login = () => {
	const [data, setData] = useState({ student_id: "", password: "", role: "" });
	const [error, setError] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:8090/student/login";
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("token", res.data);
			window.location = "/";
		} catch (error) {
			if (
				console.log(error)
			) {
				setError(error.response.data.message);
			}
		}
	};

	return (
		<div className="login_container">
			<div className="login_form_container">
				<div className="left">
					<form className="form_container" onSubmit={handleSubmit}>
						<h1>STUDENT LOGIN</h1>
						
						<input
							type="String"
							placeholder="User ID"
							name="student_id"
							onChange={handleChange}
							value={data.student_id}
							required
							className="input"
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
							className="input"
						/>
						<div className="dropdown">
							<button class="dropbtn">Select Role</button>
							<div class="dropdown-content">
							<a href="/student/login">Student</a>
							<a href="/student/register">Panel Member</a>
							</div>
						</div>
						{error && <div className="error_msg">{error}</div>}
						<button type="submit" className="green_btn">
							SIGN IN
						</button>
					</form>
				</div>
				<div className="right">
					<h1>New Here ?</h1>
					<Link to="/student/register">
						<button type="button" className="white_btn">
							Sign Up
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Login;