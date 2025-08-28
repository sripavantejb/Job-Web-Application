import React, { useState } from 'react';

const FormInput = ({ icon, type, placeholder }) => (
  <div className="bg-gray-100 w-full flex items-center p-2 mb-3 rounded-md">
    <span className="text-gray-400 mx-2">{icon}</span>
    <input
      type={type}
      placeholder={placeholder}
      className="bg-gray-100 outline-none border-none flex-1"
      required
    />
  </div>
);

const SignInForm = () => (
  <div className="bg-white flex flex-col items-center justify-center p-12 text-center h-full">
    <h1 className="text-2xl font-bold mb-3">Sign In</h1>
    <span className="text-xs mb-3">use your email for login</span>
    <FormInput icon="✉️" type="email" placeholder="Email" />
    <FormInput icon="🔒" type="password" placeholder="Password" />
    <a href="#" className="text-xs my-3">Forgot your password?</a>
    <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold uppercase text-xs py-3 px-11 rounded-full transition-colors">
      Sign In
    </button>
  </div>
);

const SignUpForm = () => (
  <div className="bg-white flex flex-col items-center justify-center p-12 text-center h-full">
    <h1 className="text-2xl font-bold mb-3">Create Account</h1>
    <span className="text-xs mb-3">or use your email for registration</span>
    <FormInput icon="👤" type="text" placeholder="Name" />
    <FormInput icon="✉️" type="email" placeholder="Email" />
    <FormInput icon="🔒" type="password" placeholder="Password" />
    <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold uppercase text-xs py-3 px-11 rounded-full mt-4 transition-colors">
      Sign Up
    </button>
  </div>
);

const LoginForm = () => {
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative w-full max-w-4xl min-h-[480px] bg-white rounded-lg shadow-lg overflow-hidden">
        <div className={`
          absolute top-0 left-0 h-full w-1/2
          transition-all duration-700 ease-in-out
          ${showSignUp ? 'translate-x-full opacity-100 z-50' : 'opacity-0 z-10'}
        `}>
          <SignUpForm />
        </div>

        <div className={`
          absolute top-0 left-0 h-full w-1/2
          transition-all duration-700 ease-in-out
          ${showSignUp ? 'translate-x-full opacity-0 z-10' : 'opacity-100 z-50'}
        `}>
          <SignInForm />
        </div>

        <div className={`
          absolute top-0 left-1/2 w-1/2 h-full
          transition-all duration-700 ease-in-out z-40
          ${showSignUp ? '-translate-x-full' : 'translate-x-0'}
        `}>
          <div className="bg-gradient-to-r from-blue-400 to-blue-600 w-full h-full text-white flex flex-col items-center justify-center text-center p-10">
            {showSignUp ? (
              <>
                <h1 className="text-2xl font-bold">Welcome Back!</h1>
                <p className="text-sm font-light my-5">To keep connected with us please login with your personal info</p>
                <button onClick={() => setShowSignUp(false)} className="bg-transparent border-2 border-white font-bold uppercase text-xs py-3 px-11 rounded-full">
                  Sign In
                </button>
              </>
            ) : (
              <>
                <h1 className="text-2xl font-bold">Hello, Friend!</h1>
                <p className="text-sm font-light my-5">Enter your personal details and start your journey with us</p>
                <button onClick={() => setShowSignUp(true)} className="bg-transparent border-2 border-white font-bold uppercase text-xs py-3 px-11 rounded-full">
                  Sign Up
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
