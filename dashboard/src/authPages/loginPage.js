


const LoginPage = () => {
    return <div className="main">
        <h1>Login Here !</h1>
        <div className="form">
            <div className="formField">
                <label>Username</label>
                <input type="text" />
            </div>
            <div className="formField">
                <label>Password</label>
                <input type="password" />
            </div>
            <div className="formField">
                <button className="btn">Login</button>
                <a href="/register" className="hyper-link">Create new account !</a>
            </div>
        </div>

    </div>
}

export default LoginPage