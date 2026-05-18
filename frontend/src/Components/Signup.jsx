import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Signup = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSignup = async () => {

        try {

            if (!name || !email || !password) {

                alert('All fields are required.');
                return;

            }

            if (password.length !== 8) {

                alert('Password must be exactly 8 characters long.');
                return;

            }

            let response = await fetch('http://localhost:5000/register', {

                method: 'POST',

                body: JSON.stringify({
                    name,
                    email,
                    password
                }),

                headers: {
                    'Content-Type': 'application/json'
                }

            });

            let result = await response.json();

            if (response.ok) {

                localStorage.setItem('user', JSON.stringify(result));

                alert('Registration successful!');

                navigate('/');

            } else {

                alert(result.message || 'Registration failed');

            }

        } catch (err) {

            console.log('Error during registration:', err);

            alert('Server Error');

        }

    };

    return (

        <div className="signup-container">

            <form
                className="signup-form"

                onSubmit={(e) => {

                    e.preventDefault();
                    handleSignup();

                }}
            >

                <h2>Create Account</h2>

                <div className="form-group">

                    <label>Name</label>

                    <input
                        type="text"
                        placeholder="Enter your name"
                        className="form-input"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                </div>

                <div className="form-group">

                    <label>Email</label>

                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="form-input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                </div>

                <div className="form-group">

                    <label>Password</label>

                    <input
                        type="password"
                        placeholder="Enter password"
                        className="form-input"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                </div>

                <button type="submit" className="signup-button">

                    Sign Up

                </button>
                <Link to="/login" className=" to_login_logout">

                    Login

                </Link>

            </form>

        </div>

    );

};

export default Signup;