import './LoginView.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Background from '../images/background.png'
import Header from '../components/Header'

function LoginView() {
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    function login(event) {
        event.preventDefault();
        if (password === "abcd1234") {
            navigate('/ ');
        } else {
            alert("Wrong password!");
        }
    }

    return (
        <div className='login-container'>
            <img src={Background} alt="Movie background" className="background" />
            <Header />
            <div className="island">
                <h2>Login</h2>
                <form onSubmit={(event) => { login(event) }}>
                    <div className="field">
                        <input type="text" required />
                        <label>Email or phone number</label>
                    </div>
                    <div className="field">
                        <input type="password" value={password} onChange={(event) => { setPassword(event.target.value) }} required />
                        <label>Password</label>
                    </div>
                    <button type="submit">Sign In</button>
                </form>
                <p>New to Netlicks? <a href="/register">Create account</a></p>
            </div>
        </div>
    )
}

export default LoginView