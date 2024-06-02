import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import carAnimation from '../../../../public/carAnimation.json'
import Lottie from "lottie-react";
import { AuthContext } from "../../../providers/AuthProviders";

const Login = () => {

  const {loginUser} = useContext(AuthContext);

  const handleLoginUser = event=>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password)
    loginUser(email, password)
    .then(result =>{
      const loggedUser = result.user;
      console.log(loggedUser.photoURL)
    })
    .catch(error=>console.error(error))
  }




  return (
    <div className="flex bg-gray-400">
      <div className="w-full h-full lg:max-w-md m-auto bg-purple-100 rounded p-5 sm:my-5">
        <div className="mb-5">
          <Lottie className="h-48" animationData={carAnimation}></Lottie>
          <h2 className="text-center text-4xl font-bold text-purple-500">
            Login Now
          </h2>
        </div>
        <form onSubmit={handleLoginUser}>
          <div>
            <label className="block mb-2 text-purple-500">Email</label>
            <input
              className="w-full p-2 mb-6 text-purple-700 border-b-2 border-purple-500 outline-none focus:bg-gray-300"
              type="text"
              name="email"
            />
          </div>
          <div>
            <label className="block mb-2 text-purple-500">Password</label>
            <input
              className="w-full p-2 mb-6 text-purple-700 border-b-2 border-purple-500 outline-none focus:bg-gray-300"
              type="password"
              name="password"
            />
          </div>
          <div>
            <input
              className="w-full bg-purple-500 hover:bg-purple-950 text-white font-bold py-2 px-4 mb-6 rounded"
              type="submit"
            />
          </div>
        </form>
        <div>
          <Link className="text-purple-700 hover:text-pink-700 text-sm float-left">
            Forgot Password?
          </Link>
          <Link
            to="/register"
            className="text-purple-700 hover:text-pink-700 text-sm float-right"
          >
            Create Account
          </Link>
        </div>
        <div className="mt-10">
          <button className="btn btn-block btn-info">
            Sign in with <FcGoogle className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
