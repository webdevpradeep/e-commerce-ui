import React from 'react';

const LoginPage = () => {
  return (
    <div className="h-150 w-100 border-2 ml-200 rounded-xl">
      {/* LoginPage */}
      <form className="grid gap-4 justify-center items-center ">
        <div className="flex justify-center items-center">
          <input
            className="h-10 w-80 border-1 text-shadow-amber-700"
            required
            type="email"
            placeholder="Enter your Email"
          ></input>
        </div>
        <div>
          <input
            className="h-10 w-80 border-1"
            required
            type="password"
            placeholder="Enter your Password"
          ></input>
        </div>
        <div>
          <button className="border-2 h-8 w-80 font-bold rounded-xl ">
            Log in
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
