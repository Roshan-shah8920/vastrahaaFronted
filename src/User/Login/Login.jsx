import React, { useContext, useState } from 'react'
import AppContext from '../../Context/AppContext'
import { useNavigate } from 'react-router-dom'


const Login = () => {
    const navigate = useNavigate()
    const { login } = useContext(AppContext)
    const [formData, setformData] = useState({
        email: "",
        password: ""

    })
    const onChangeHandler = (e) => {
        const { name, value } = e.target
        setformData({ ...formData, [name]: value })
    }
    const { email, password } = formData;
    const submitHandler = async (e) => {
        e.preventDefault();
        const user = await login( email, password)

        if (user.success) {
            navigate("/")
          }          
          
        console.log("user response", user);

        // alert("Your Form is Submited")
        console.log(formData);
    }
    return (
        <>
            <div className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: "#f8f9fa" }}>
                <div className="p-4 shadow-lg rounded bg-white" style={{ width: "350px" }}>
                    <h3 className="text-center mb-4">User Login</h3>
                    <form onSubmit={submitHandler}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input name="email" value={formData.email} onChange={onChangeHandler} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                            <div id="emailHelp" className="form-text">We'll never share your email.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input name="password" value={formData.password} onChange={onChangeHandler} type="password" className="form-control" id="exampleInputPassword1" required />
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login