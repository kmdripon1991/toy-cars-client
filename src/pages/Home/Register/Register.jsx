import Lottie from "lottie-react";
import React, { useContext } from "react";
import registration from "../../../../public/registration.json";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../../providers/AuthProviders";
import Swal from 'sweetalert2'

const Register = () => {
  const { createUser, updateUser } = useContext(AuthContext);

  const handleUserRegistration = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const newPassword = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    console.log(name, email, photo, newPassword, confirmPassword);
    if (newPassword === confirmPassword) {
      if (
        /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(
          newPassword
        )
      ) {
        createUser(email, newPassword)
          .then((result) => {
            const newUser = result.user;
            console.log(newUser);
            if(newUser){
              updateUser(name, photo)
            }
            Swal.fire("A new user created successfully!");
            form.reset();
          })
          .catch((error) => console.log(error));
      }
      else{
        alert('Password must contain one number, lowercase, uppercase, special character & 8-16 length')
      }
    }
    else{
      alert ("Password does not match.")
    }
  };

  return (
    <div className="w-full h-full bg-gray-400 dark:bg-gray-900">
      <div className="px-6 py-12">
        <div className="w-full flex ">
          <div className="w-1/2 h-auto bg-gray-400 dark:bg-gray-800 hidden lg:block">
            <Lottie animationData={registration}></Lottie>
          </div>
          <div className="w-full lg:w-1/2 bg-gray-200 dark:bg-gray-700 p-5 rounded-lg ">
            <h3 className="py-4 text-2xl text-center text-gray-800 dark:text-white">
              Create an Account!
            </h3>
            <form
              onSubmit={handleUserRegistration}
              className="px-8 pt-6 pb-8 mb-4 dark:bg-gray-800 rounded"
            >
              <div className="mb-4">
                <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white">
                  Name
                </label>
                <input
                  className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white">
                  Email
                </label>
                <input
                  className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white">
                  Photo Url
                </label>
                <input
                  className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  type="text"
                  name="photo"
                  placeholder="Photo url"
                  required
                />
              </div>
              <div className="mb-4 md:flex md:justify-between">
                <div className="mb-4 md:mr-2 md:mb-0">
                  <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white">
                    Password
                  </label>
                  <input
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    type="password"
                    name="password"
                    placeholder="********"
                    required
                  />
                  <p className="text-xs italic text-red-500">
                    Password must contain one single digit, lowercase, uppercase
                    & special Character.
                  </p>
                </div>
                <div className="md:ml-2">
                  <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white">
                    Confirm Password
                  </label>
                  <input
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    type="password"
                    name="confirmPassword"
                    placeholder="********"
                  />
                </div>
              </div>
              <div className="mb-6 text-center">
                <button
                  className="btn btn-block btn-primary text-white hover:bg-blue-900"
                  type="submit"
                >
                  Register Account
                </button>
              </div>
              <hr className="mb-6 border-t" />
              <div className="space-y-4">
                <button className="btn btn-block btn-info text-white hover:bg-blue-800">
                  Sign Up with <FcGoogle className="w-6 h-6" />
                </button>
                <div className="text-center">
                  <a
                    className="inline-block text-sm text-blue-500 dark:text-blue-500 align-baseline hover:text-blue-800"
                    href="./index.html"
                  >
                    Already have an account? Login!
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
