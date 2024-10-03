import React, { useState } from "react";
import { FaFacebook, FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in with", { email, password });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <img
              src="https://img.icons8.com/ios-filled/50/000000/shop.png"
              alt="logo"
              className="h-10 w-10"
            />
          </div>
          <h2 className="text-2xl font-semibold">Welcome To Bazaar</h2>
        </div>

        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-2">Email or Phone Number</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@mail.com"
              className="w-full px-4 py-2 border rounded-lg text-sm"
              required
            />
          </div>

          <div className="mb-6 relative">
            <label className="block text-gray-700 text-sm mb-2">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="********"
                className="w-full px-4 py-2 border rounded-lg text-sm pr-10" 
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <FaEyeSlash className="h-5 w-5 text-gray-500" />
                ) : (
                  <FaEye className="h-5 w-5 text-gray-500" />
                )}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition duration-300"
          >
            Login
          </button>

          <div className="flex justify-center mt-4">
            <span className="text-gray-400">or</span>
          </div>

          <div className="flex flex-col space-y-2 mt-4">
            <button className="flex items-center justify-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300">
              <FaFacebook className="mr-2" /> Continue With Facebook
            </button>
            <button className="flex items-center justify-center bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300">
              <FaGoogle className="mr-2" /> Continue With Google
            </button>
          </div>
        </form>

        <div className="text-center mt-4">
          <p className="text-sm">
            Don't have an account?{" "}
            <a href="/register" className="text-blue-500 hover:underline">
              Register
            </a>
          </p>
          <p className="text-sm mt-2">
            Forgot your password?{" "}
            <a href="/reset" className="text-blue-500 hover:underline">
              Reset It
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
