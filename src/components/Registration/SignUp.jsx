import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';
import AuthProvider, { AuthContext } from '../../Provider/AuthProvider';

const SignUp = () => {

    const {createUser} = useContext(AuthContext)

    const [error, seterror] = useState('');

    const handleSignup = (event) =>{
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        if(password !== confirm){
            seterror('Your Password did not match')
            return
        }

        else if(password.length <6 ){
            seterror('Password Must be 6 Charecter Long')
        }

        console.log(email, password, confirm);

        createUser(email, password)
        .then(result =>{
            console.log(result.user)
            alert('Registration Completed')
            seterror('');
            event.target.reset('')
            
        })
        .catch((error) =>{
            console.log(error);
            seterror(error.message)
            
        })
       
    }
    return (
        <div className="form-container">
            <h2 className='form-title'>Registration</h2>

            <form onSubmit={handleSignup}>
                <div className="form-control">
                    <label htmlFor=''>Email</label>
                    <input type="email" name='email' id='email' required />
                </div>
                <div className="form-control">
                    <label htmlFor=''>Password</label>
                    <input type="password" name='password' id='password' required />
                </div>
                <div className="form-control">
                    <label htmlFor=''>Confirm Password</label>
                    <input type="password" name='confirm' id='confirm' required />
                </div>

                <input className='btn-submit' type="submit" value='Sign Up' />
            </form>

            <p className='toggole'><small>Already Have an Account? <Link to='/login'>Login</Link> </small></p>

            <p className='text-error'>{error}</p>
        </div>
    );
};

export default SignUp;