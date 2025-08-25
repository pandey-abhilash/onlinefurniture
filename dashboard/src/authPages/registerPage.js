
const RegisterPage = () => {
    return <div className="main">
        <h1>Create Your Account !</h1>
        <div className="form">
            <div className="formField">
                <label>Full Name</label>
                <input type="text" />
            </div>

            <div className="formField">
                <label>Email</label>
                <input type="text" />
            </div>
            <div className="formField">
                <label>Mobile no.</label>
                <input type="text" />
            </div>
            <div className="formField">
                <label>Password</label>
                <input type="password" />
            </div>
            <div className="formField">
                <label>Confirm Password</label>
                <input type="password" />
            </div>
            <div className="formField">
                <button className="btn">Register</button>
                <a href="/" className="hyper-link">Already have an account!</a>
            </div>
        </div>

    </div>
}

export default RegisterPage