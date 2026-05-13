import { useState } from "react";

const App = () => {
  let [username, setUsername] = useState('');
  let [email, setEmail] = useState('');
  let [mobile, setMobile] = useState('');
  let [password, setPassword] = useState('');


  let userDetails = {
    username: username,
    email: email,
    mobile: mobile,
    password: password,
  }
  console.log(userDetails)
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-gray-900">Create Account</h2>
          <p className="text-gray-500 mt-2 text-sm">Join us by filling in the details below</p>
        </div>

        <form className="space-y-5">
          {/* Username */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5 ml-1">Username</label>
            <input
              type="text"
              className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100 transition-all outline-none"
              placeholder="John Doe"
              onChange={(e) => { setUsername(username = e.target.value) }} />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5 ml-1">Email Address</label>
            <input
              type="email"
              className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100 transition-all outline-none"
              placeholder="name@example.com"
              onChange={(e) => { setEmail(email = e.target.value) }} />
          </div>

          {/* Mobile Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5 ml-1">Mobile Number</label>
            <input
              type="tel"
              className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100 transition-all outline-none"
              placeholder="9876543210"
              onChange={(e) => { setMobile(mobile = e.target.value) }} />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5 ml-1">Password</label>
            <input
              type="password"
              className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100 transition-all outline-none"
              placeholder="••••••••"
              onChange={(e) => { setPassword(password = e.target.value) }} />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-blue-200 active:scale-[0.98] transition-all duration-150 mt-4"
            onClick={(e) => {
              e.preventDefault();
              console.log(userDetails)
            }}  >
            Sign Up
          </button>

          <div className="relative flex py-3 items-center">
            <div className="flex-grow border-t border-gray-200"></div>
            <span className="flex-shrink mx-4 text-gray-400 text-xs uppercase">Or continue with</span>
            <div className="flex-grow border-t border-gray-200"></div>
          </div>

          <p className="text-center text-sm text-gray-600">
            Already a member? <a href="#" className="text-blue-600 font-bold hover:underline">Log in</a>
          </p>
        </form>
      </div>
    </div>
  )
}

export default App