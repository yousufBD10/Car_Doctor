import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import login from "../../assets/images/login/login.svg";
import { AuthContext } from "../../context/AuthContext";
const Login = () => {
  const {login} = useContext(AuthContext)
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || '/';


  const handleLogin =( event )=>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email,password);

    login(email,password)
    .then(result =>{
      const user  = result.user;
      
      
      
      const currentUser = {
        email: user.email
      }
      console.log(currentUser);
      //jwt token
      fetch('http://localhost:5000/jwt',{
        method:'POST',
        headers:{
          'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser)
      })
      .then(res=>res.json())
      .then(data =>{
        console.log(data);

        //locaal storage is the easiest but not the best 
        localStorage.setItem('Car_Doctor_token',data.token);
        navigate(from, { replace: true });


      })

    })
    .catch(err => console.error(err))


  }
  return (
    
      <div className="lg:flex">
       <div className="lg:w-1/2">
       <img className="w-2/4" src={login} alt="" />
       </div>
        <div className="card flex-shrink-0 lg:w-1/2 max-w-sm sm:w-full shadow-2xl bg-base-100">
          <h1 className="text-5xl text-center">Login</h1>
          <form onSubmit={handleLogin} className="card-body ">
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
              name="email" required
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
              name="password" required
                type="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <p >Don't have an account? <Link className='underline text-blue-700' to='/signin'>SignUp</Link> </p>
            <div className="form-control mt-6">
            <input type="submit" className="btn btn-primary" value="Login"/>
            </div>
          </form>
        </div>
      </div>

  );
};

export default Login;
