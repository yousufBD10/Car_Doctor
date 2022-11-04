import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import signin from '../../assets/images/login/login.svg';
import { AuthContext } from '../../context/AuthContext';
const Register = () => {
    const {createUser} = useContext(AuthContext);
    const location = useLocation();
    const from = location?.state?.pathname || '/';
    const navigate = useNavigate();

     const handleSignUp = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
        createUser(email,password)
        .then(result =>{
          navigate(from, { replace: true });
            const user = result.user;
            console.log(user);
        } )
        .catch(err => console.error(err))
     }
    
    return (
        
        <div className="lg:flex">
         <div className="lg:w-1/2">
         <img className="w-2/4" src={signin} alt="" />
         </div>
          <div className="card flex-shrink-0 lg:w-1/2 max-w-sm sm:w-full shadow-2xl bg-base-100">
          <h1 className="text-5xl text-center">Register</h1>
            <form onSubmit={handleSignUp} className="card-body ">
              <div className="form-control ">
                
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                name='name'
                required
                  type="text"
                  placeholder="Full Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control ">
                
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                name='email'
                required
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                name='password'
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                
              </div>
              <p className='mt-4' >Already have an account? <Link className='underline text-blue-700' to='/login'>Login</Link> </p>
              <div className="form-control mt-6">
                <input type="submit" className="btn btn-primary" value="Sign Up"/>
              </div>
            </form>
          </div>
        </div>
    );
};

export default Register;