import React, { useRef, useState } from 'react'
import Layout from '../layout/Layout'
import { FiLogIn } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function Register() {
  const name = useRef("");
  const email = useRef("");
  const password = useRef("");
  const configPassword = useRef("");
  const [pwdShown, setPwdShown] = useState(false);
  const [configPwdShown, setConfigPwdShown] = useState(false);

  const togglePassword = () => {
    setPwdShown(!pwdShown);
  };
  const toggleConfigPassword = () => {
    setConfigPwdShown(!configPwdShown);
  };

  return (
    <Layout>
      <form className='container mx-auto px-2 mt-16 mb-20 flex-colo'>
        <div className='w-full 2xl:w-2/5 gap-6 flex-colo p-8 sm:p-14 md:w-3/5 bg-dry rounded-lg border border-border'>
          <img
            src='/image/logo.png'
            alt='logo'
            className='w-full h-12 object-contain'/>

          <div className="text-sm w-full">
            <label className="text-border font-semibold">Full Name</label>
            <input
                required
                ref={name}
                type="text"
                placeholder="Your full name"
                className='w-full text-sm p-4 mt-2 border border-border rounded text-white bg-dry'
                />
          </div>

          <div className="text-sm w-full">
            <label className="text-border font-semibold">Email</label>
            <input
                required
                ref={email}
                type="email"
                placeholder="NetMovie@gmail.com"
                className='w-full text-sm p-4 mt-2 border border-border rounded text-white bg-dry'
                />
          </div>

          <div className="text-sm w-full relative">
            <label className="text-border font-semibold">Password</label>
            <input
                required
                ref={password}
                type={pwdShown ? "text" : "password"}
                placeholder="********"
                className='w-full text-sm p-4 mt-2 border border-border rounded text-white bg-dry'
                />
            <button type='button' className='absolute right-4 top-10' onClick={togglePassword}>
              {
                pwdShown?
                <FaEyeSlash className='w-6 h-6'/>
                :
                <FaEye className='w-6 h-6'/>
              }
            </button>
          </div>

          <div className="text-sm w-full relative">
            <label className="text-border font-semibold"> Config Password</label>
            <input
                required
                ref={configPassword}
                type={configPwdShown ? "text" : "password"}
                placeholder="********"
                className='w-full text-sm p-4 mt-2 border border-border rounded text-white bg-dry'
                />
            <button type='button' className='absolute right-4 top-10' onClick={toggleConfigPassword}>
              {
                configPwdShown?
                <FaEyeSlash className='w-6 h-6'/>
                :
                <FaEye className='w-6 h-6'/>
              }
            </button>
          </div>
          <Link 
            to="/dashboard"
            className="bg-subMain transitions hover:bg-main flex-rows gap-4 text-white py-4 rounded-lg w-full">
              <FiLogIn/> Sign In
            </Link>
          <p className='text-center text-border'>
            Already have an account?{" "}
            <Link to="/login" className="text-dryGray font-semibold ml-2">
              Log In
            </Link>
          </p>
        </div>
      </form>

    </Layout>
  )
}

export default Register