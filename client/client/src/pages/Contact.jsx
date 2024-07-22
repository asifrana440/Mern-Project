import { useState } from 'react';
import loginImage from '../images/Registration1.png_300.png';
import { useAuth } from "../store/auth"
import { toast } from 'react-toastify';

const defaultContactFormData={
    username:"",
    email:"",
    message:"",
};

const Contact = () => {
    const { user } = useAuth();
    const [contact, setContact] = useState(defaultContactFormData);
    const [userDataFetched, setUserDataFetched] = useState(true);

    // Fetch user data once if not fetched already
    if (userDataFetched && user) {
        setContact ({
            username: user.username,
            email: user.email,
            message: "",
        });
        setUserDataFetched(false);
    }

    const handleInput = (e) => {
        const name = e.target.name;
        const value= e.target.value;

        setContact({
            ...contact,
            [name]:value,
        });
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const response= await fetch("http://localhost:3000/api/form/contact",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(contact)
            });

            if(response.ok){
                setContact(defaultContactFormData);
                const data =await response.json();
                console.log(data);
                toast.success("Message send successful")
            }
        } catch (error) {
            toast.error("Message not send ")
            console.log(error)
            
        }
    };

    return (
        <section className="section-contact">
            <div className='contact-content-container'>
                <h1 className='main-heading mb-3 '>Contact Us</h1>
            </div>

            <div className="container grid grid-two-cols">
                <div className="contact-image">
                    <img src={loginImage} alt="contact form" />
                </div>

                <section className='section-form'>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="username">Username:</label>
                            <input
                                type="text"
                                name='username'
                                placeholder='Enter your username'
                                id='username'
                                required
                                autoComplete='off'
                                value={contact.username}
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
                                value={contact.email}
                                onChange={handleInput}
                                disabled={user} // Disable email input if user is authenticated
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message:</label>
                            <textarea
                                name='message'
                                placeholder='Enter your message'
                                id='message'
                                required
                                autoComplete='off'
                                value={contact.message}
                                cols="30"
                                rows="5"
                                onChange={handleInput}
                            ></textarea>
                        </div>

                        <button type='submit' className='btn btn-submit'>Submit</button>
                    </form>
                </section>
            </div>

            <section className="map-section mb-3">
                <div className="map-container">
                    <iframe
                        title="Google Maps"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54450.68064094523!2d74.23576215881177!3d31.464577104911264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919015f82b0b86f%3A0x2fcaf9fdeb3d02e6!2sJohar%20Town%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1715778678187!5m2!1sen!2s"
                        width="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </section>

        </section>
    );
}

export default Contact;


