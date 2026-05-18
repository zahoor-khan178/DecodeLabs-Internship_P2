

import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
const Home = () => {

    const navigate = useNavigate();

    const auth = JSON.parse(localStorage.getItem("user"));

    useEffect(() => {

        if (!auth) {
            navigate("/login");

        }

    }, [auth, navigate]);



    const showMessage = () => {
        alert('Welcome to DecodeLabs Internship Project!')
    }

    const logout = () => {

        localStorage.removeItem('user');
        navigate('/login');

    }

    return (
        <>
            <header>
                <h2>DecodeLabs</h2>
                <nav>
                    <Link to="#">About</Link>
                    <Link to="#">Home</Link>
                    <Link to="#">Courses</Link>
                    <Link to="#">Contact</Link>
                    <Link to="/login" onClick={logout} id='logout'>Logout</Link>
                </nav>
            </header>
            <section class="hero">
                <h1>Learn Full Stack Development</h1>
                <p>Build modern responsive websites with HTML, CSS & JavaScript.</p>
                <button onClick={showMessage}>Get Started</button>
            </section>
            <section className="user-info">

                <h2>User Information</h2>

                <h4>Name: {auth?.name}</h4>

                <h4>Email: {auth?.email}</h4>

            </section>
            <section class="features">
                <div class="card"><h3>HTML</h3><p>Structure your websites professionally.</p></div>
                <div class="card"><h3>CSS</h3><p>Create beautiful responsive designs.</p></div>
                <div class="card"><h3>JavaScript</h3><p>Add interaction and dynamic features.</p></div>
            </section>
            <footer>© 2026 DecodeLabs Internship Project</footer>
        </>

    )


};

export default Home;