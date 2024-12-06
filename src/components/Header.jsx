import './Header.css'
import { useNavigate } from 'react-router-dom'

function Header() {
    const navigate = useNavigate();
    const navigatePath = (path) => {
        navigate(path);
    }

    return (
        <div className="header">
            <div className="header-container">
                <div className="logo-container">
                    <h1 className="logo" onClick={() => navigatePath('/')}>Netlicks</h1>
                </div>
                <div className="button-container">
                    <button className="login-button" onClick={() => navigatePath('/login')}>Login</button>
                    <button className="register-button" onClick={() => navigatePath('/register')}>Register</button>
                </div>
            </div>
        </div>
    )
}

export default Header
