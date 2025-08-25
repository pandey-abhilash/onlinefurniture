import { useState } from "react"
import axios from 'axios';

const RegisterPage = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");


    const handleFormChange = (e, fieldName) => {
        console.log(e.target.value, fieldName);
        if (fieldName === "fullName") {
            setFullName(e.target.value)
        }
        if (fieldName === "email") {
            setEmail(e.target.value)
        }
        if (fieldName === "mobile") {
            setMobile(e.target.value)
        }
        if (fieldName === "password") {
            setPassword(e.target.value)
        }
        if (fieldName === "confirmPassword") {
            setConfirmPassword(e.target.value)
        }
    }

    const handleSubmit = async () => {

        let reqBody = {
            fullName, email, mobile, password, confirmPassword
        }

        let response = await axios.post("http://localhost:3001/register", reqBody)

        console.log(response);
    }

    return <div className="main">
        <h1>Create Your Account !</h1>
        <div className="form">
            <div className="formField">
                <label>Full Name</label>
                <input type="text" value={fullName} onChange={(e) => handleFormChange(e, "fullName")} />
            </div>

            <div className="formField">
                <label>Email</label>
                <input type="email" value={email} onChange={(e) => handleFormChange(e, "email")} />

            </div>
            <div className="formField">
                <label>Mobile no.</label>
                <input type="number" value={mobile} onChange={(e) => handleFormChange(e, "mobile")} />

            </div>
            <div className="formField">
                <label>Password</label>
                <input type="password" value={password} onChange={(e) => handleFormChange(e, "password")} />

            </div>
            <div className="formField">
                <label>Confirm Password</label>
                <input type="password" value={confirmPassword} onChange={(e) => handleFormChange(e, "confirmPassword")} />

            </div>
            <div className="formField">
                <button className="btn" onClick={handleSubmit}>Register</button>
                <a href="/" className="hyper-link">Already have an account!</a>
            </div>
        </div>

    </div>
}

export default RegisterPage