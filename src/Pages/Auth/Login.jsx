import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from './SocialLogin';
import { AuthContext } from '../../Components/Provider/AuthProvider';

const Login = () => {
     const {SignIn} = useContext(AuthContext)
     const navigate = useNavigate()
     
     const location = useLocation()
     const form = location.state?.form?.pathname || "/";
     const handleLogin = async(e) =>{
          e.preventDefault()
          const email = e.target.email.value;
          const password = e.target.password.value;
          SignIn(email,password)
          .then(()=>{
             return  navigate(form,{replace:true})
          })
     }
     return (
          <div className="min-h-screen  text-gray-900 flex justify-center">
               <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
                    <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
                         <div>
                              <h1 className="text-5xl text-center font-bold text-indigo-600"> Prolance </h1>
                         </div>
                         <div className=" flex flex-col items-center">
                              <h1 className="text-2xl xl:text-3xl font-extrabold">Login</h1>
                              <div className="w-full flex-1 mt-8">
                                   <div className="flex flex-col items-center">
                                        <SocialLogin></SocialLogin>


                                   </div>

                                   <div className=" my-5 border-b text-center">
                                        <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                                             Or Login with e-mail
                                        </div>
                                   </div>

                                   <form onSubmit={handleLogin} action="">
                                        <div className="mx-auto max-w-xs">


                                             <div>
                                                  <label htmlFor="">
                                                       Email
                                                  </label>
                                                  <input
                                                       className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                                       name='email'
                                                       type="email"
                                                       placeholder=" Type your  Email"
                                                  />
                                             </div>
                                             <div>
                                                  <label htmlFor="">
                                                       Password
                                                  </label>
                                                  <input
                                                       className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                                       name='password'
                                                       type="password"
                                                       placeholder="Enter Your Password"
                                                  />
                                             </div>

                                             <button
                                                  className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                                             >
                                                  <svg
                                                       className="w-6 h-6 -ml-2"
                                                       fill="none"
                                                       stroke="currentColor"
                                                       strokeWidth="2"
                                                       strokeLinecap="round"
                                                       strokeLinejoin="round"
                                                  >
                                                       <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                                       <circle cx="8.5" cy="7" r="4" />
                                                       <path d="M20 8v6M23 11h-6" />
                                                  </svg>
                                                  <span className="ml-3">Login</span>
                                             </button>
                                             <p className="mt-6  gap-2 text-xs text-gray-600 text-center">
                                                  <h1> Already Have an Account ?  </h1>
                                                  <Link to={'/signUp'} className="text-xl font-bold underline text-indigo-700" > SingUp </Link>

                                             </p>
                                        </div>
                                   </form>
                              </div>
                         </div>
                    </div>
                    <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
                         <div
                              className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
                              style={{
                                   backgroundImage:
                                        "url('https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg')",
                              }}
                         />
                    </div>
               </div>
          </div>
     );
};

export default Login;