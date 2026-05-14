import { useState } from 'react'

export default function App() {
  const [user, setUser] = useState({
    username: '',
    email: '',
    mobile: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    })

  };
  const [users, setUsers] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user)
    setUsers((prevusers) => {
      const newList = [...prevusers, user];
      console.log(newList)
      return newList

    })
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-600 via-blue-600 to-cyan-500 flex items-center justify-center p-4">
      {/* Main Glass Card */}
      <div className="w-full max-w-md bg-white/10 backdrop-blur-xl rounded-[2rem] border border-white/20 shadow-2xl p-10 relative overflow-hidden">

        {/* Decorative Blur Circle inside card */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-400/30 rounded-full blur-3xl"></div>

        <div className="text-center mb-8 relative z-10">
          <h2 className="text-3xl font-bold text-white tracking-tight">Join Our Community</h2>
          <p className="text-blue-100/80 mt-2 text-sm">Please enter your details to get started.</p>
        </div>

        <form className="space-y-5 relative z-10">
          {/* Username */}
          <div className="group">
            <div className="flex items-center bg-white/10 border border-white/20 rounded-2xl px-4 py-3 focus-within:ring-2 focus-within:ring-cyan-300 transition-all">
              <span className="text-white/60 mr-3 text-lg">👤</span>
              <input
                type="text"
                className="bg-transparent w-full text-white placeholder-white/50 outline-none text-sm"
                placeholder="john doe"
                name='username'
                onChange={handleChange} />
            </div>
          </div>

          {/* Email */}
          <div className="group">
            <div className="flex items-center bg-white/10 border border-white/20 rounded-2xl px-4 py-3 focus-within:ring-2 focus-within:ring-cyan-300 transition-all">
              <span className="text-white/60 mr-3 text-lg">✉️</span>
              <input
                type="email"
                className="bg-transparent w-full text-white placeholder-white/50 outline-none text-sm"
                placeholder="john@company.com"
                name='email'
                onChange={handleChange} />
            </div>
          </div>

          {/* Mobile */}
          <div className="group">
            <div className="flex items-center bg-white/10 border border-white/20 rounded-2xl px-4 py-3 focus-within:ring-2 focus-within:ring-cyan-300 transition-all">
              <span className="text-white/60 mr-3 text-lg">📱</span>
              <input
                type="tel"
                className="bg-transparent w-full text-white placeholder-white/50 outline-none text-sm"
                name='mobile'
                onChange={handleChange} />
            </div>
          </div>

          {/* Password */}
          <div className="group">
            <div className="flex items-center bg-white/10 border border-white/20 rounded-2xl px-4 py-3 focus-within:ring-2 focus-within:ring-cyan-300 transition-all">
              <span className="text-white/60 mr-3 text-lg">🔒</span>
              <input
                type="password"
                className="bg-transparent w-full text-white placeholder-white/50 outline-none text-sm"
                placeholder="••••••••"
                name='password'
                onChange={handleChange}
              />
            </div>
            <div className="flex justify-end mt-1">
              <button type="button" className="text-[10px] text-cyan-200 uppercase tracking-widest font-bold hover:text-white transition-colors">Show Password</button>
            </div>
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-fuchsia-600 to-purple-600 hover:from-fuchsia-500 hover:to-purple-500 text-white font-bold py-4 rounded-2xl shadow-lg shadow-purple-900/20 active:scale-[0.97] transition-all duration-200 uppercase tracking-widest text-sm mt-4"
            onClick={handleSubmit}  >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}