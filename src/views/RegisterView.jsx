import './RegisterView.css'
import Background from '../images/background.png'
import Header from '../components/Header'

function RegisterView() {
    return (
        
        <div className='register-container'>
            <img src={Background} alt="Movie background" className="background" />
            <Header />
            <div className="island">
                <h2>Register</h2>
                <form action="#">
                    <div className="field">
                        <input type="text" required />
                        <label>First Name</label>
                    </div>
                    <div className="field">
                        <input type="text" required />
                        <label>Last Name</label>
                    </div>
                    <div className="field">
                        <input type="text" required />
                        <label>Email or phone number</label>
                    </div>
                    <div className="field">
                        <input type="password" required />
                        <label>Password</label>
                    </div>
                    <div className="field">
                        <input type="password" required />
                        <label>Re-enter Password</label>
                    </div>
                    <button type="submit">Create Account</button>
                </form>
                <p>Already have an account? <a href="/login">Sign In</a></p>
            </div>
        </div>
    )
}

export default RegisterView