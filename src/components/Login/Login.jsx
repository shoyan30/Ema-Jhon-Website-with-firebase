import React, { useContext } from 'react';
import './Login.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {

    const { signInUser } = useContext(AuthContext)
    const Navigate = useNavigate();
    const location = useLocation();
    console.log(location);

    const from = location.state?.from?.pathname || '/';

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signInUser(email, password)
            .then(result => {
                console.log(result.user)
                alert('Login Successfull');
                Navigate(from, {replace: true});
            })
            .catch(error => {
                console.error(error.message);
            })

    }


    return (
        <div className="form-container">
            <h2 className='form-title'>Login</h2>

            <form onSubmit={handleLogin}>
                <div className="form-control">
                    <label htmlFor=''>Email</label>
                    <input type="email" name='email' id='email' required />
                </div>
                <div className="form-control">
                    <label htmlFor=''>Password</label>
                    <input type="password" name='password' id='password' required />
                </div>

                <input className='btn-submit' type="submit" value='Login' />
            </form>
            <p className='toggole'><small>New To Ema-John?  <Link to='/signup'>Create New Account</Link></small></p>
        </div>
    );
};

export default Login;