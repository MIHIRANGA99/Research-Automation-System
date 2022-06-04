import { useEffect, useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom"
import "./login.css"

const Login = () => {
	const [data, setData] = useState({ student_id: "", password: ""});
	const [role, setRole] = useState('')
	const [error, setError] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	useEffect(() => {
		console.log(localStorage.getItem("token"), localStorage.getItem("role"))
	},[])

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:8090/student/login";
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("token", res.data);
			localStorage.setItem("role", role)

			if(role === "student"){
				window.location = "/student";
			}else{
				window.location = "/staff";
			}

			
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
						<h1>STUDENThdfz LOGIN</h1>
						
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
						<div className="select">
							<select name="role" onChange={(e) => {setRole(e.target.value)}}>
								<option value="0">Select Role:</option>
								<option value="student">Student</option>
								<option value="staffmember">Staff Member</option>
								<option value="admin">Admin</option>
							</select>	
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