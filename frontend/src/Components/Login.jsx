import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const API_URL = "http://localhost:5000";

    const handleLogin = async () => {

        try {

            if (!email || !password) {

                alert('All fields are required.');
                return;

            }

            if (password.length !== 8) {

                alert('Password must be exactly 8 characters long.');
                return;

            }

            let response = await fetch(`${API_URL}/login`, {

                method: 'POST',

                body: JSON.stringify({
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

                alert('Login successful!');

                navigate('/');

            } else {

                alert(result.message);

            }

        } catch (err) {

            console.log('Error during login:', err);

            alert('Server Error');

        }

    };

    return (

        <div className="signup-container">

            <form
                className="signup-form"

                onSubmit={(e) => {

                    e.preventDefault();

                    handleLogin();

                }}
            >

                <h2>Login User</h2>

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

                    Login

                </button>
                <Link to="/sign" className=" to_login_logout">

                    Create a new account

                </Link>

            </form>

        </div>

    );

};

export default Login;