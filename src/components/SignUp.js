import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './pages/Buttons/Button'

function SignUp() {
    return (
        <div className="signup__container">
            <p className="updates__paragraph">
                For rate updates and promotions
            </p>
            <form className='form__signup'>
                <label>
                    <input className="input__box" type="text" name="name"  value="Your Email"/>
                </label>
                    <Link to='/login'><Button buttonStyle='btn--primary'>SIGN UP</Button> </Link> 
            </form>
        </div>
    )
}

export default SignUp
