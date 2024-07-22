import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth';
import registrationImage from '../images/Registration1.png_300.png';
import { toast } from 'react-toastify';

const Register = () => {
    const [user, setUser] = useState({
        username: "",
        email: "",
        phone: "",
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
            const response = await fetch('http://localhost:3000/api/auth/register', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user),
            });
            const res_data = await response.json();
            console.log("res from server",res_data.extraDetails);
            if (response.ok) {
                
                storeTokenInLS(res_data.token);
                setUser({ username: "", email: "", phone: "", password: "" });
                navigate("/login");
                toast.success("successful")
            }else{
                toast.error(res_data.extraDetails ? res_data.extraDetails:res_data.message)
            }
            
        } catch (error) {
            console.log("register", error);
        }
    };

    return (
        <section>
            <main>
                <div className="section-registration">
                    <div className="container grid grid-two-cols">
                        <div className="registration-image">
                            <img src={registrationImage} alt="Register a signup form" width="400" height="400" />
                        </div>
                        <div className="registration-form">
                            <h1 className='main-heading mb-3'>Registration Form</h1>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="username">Username:</label>
                                    <input
                                        type="text"
                                        name='username'
                                        placeholder='Username'
                                        id='username'
                                        required
                                        autoComplete='off'
                                        value={user.username}
                                        onChange={handleInput}
                                    />
                                </div>
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
                                    <label htmlFor="phone">Phone:</label>
                                    <input
                                        type="number"
                                        name='phone'
                                        placeholder='Enter your phone no'
                                        id='phone'
                                        required
                                        autoComplete='off'
                                        value={user.phone}
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
                                <button type='submit' className='btn btn-submit'>Register Now</button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </section>
    );
}

export default Register;
