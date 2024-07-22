import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth';
import loginImage from '../images/login.png_300.png';
import { toast } from 'react-toastify';

const URL = "http://localhost:3000/api/auth/login";

const Login = () => {
    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const navigate = useNavigate();
    const { storeTokenInLS } = useAuth();

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setUser({
            ...user,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user),
            });
            const res_data = await response.json();
            if (response.ok) {
                
                storeTokenInLS(res_data.token);
                setUser({ email: "", password: "" });
                navigate("/");
                toast.success("Login successful")
            }else{
                toast.error(res_data.extraDetails ? res_data.extraDetails:res_data.message);
                console.log("Invalid Credentials")
            }
    
        } catch (error) {
            console.log("login", error);
        }
    };

    return (
        <section>
            <main>
                <div className="section-registration">
                    <div className="container grid grid-two-cols">
                        <div className="registration-image">
                            <img src={loginImage} alt="Login form" width="400" height="400" />
                        </div>
                        <div className="registration-form">
                            <h1 className='main-heading mb-3'>Login Form</h1>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="email">Email:</label>
                                    <input
                                        type="email"
                                        name='email'
                                        placeholder='Enter your email'
                                        id='email'
                                        required
                                        autoComplete='off'
                                        value={user.email}
                                        onChange={handleInput}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password:</label>
                                    <input
                                        type="password"
                                        name='password'
                                        placeholder='Enter your password'
                                        id='password'
                                        required
                                        autoComplete='off'
                                        value={user.password}
                                        onChange={handleInput}
                                    />
                                </div>
                                <button type='submit' className='btn btn-submit'>Login Here</button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </section>
    );
}

export default Login;
