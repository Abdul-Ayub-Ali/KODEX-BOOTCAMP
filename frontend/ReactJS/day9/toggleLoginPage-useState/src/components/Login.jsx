import { Mail, Lock, LogIn } from 'lucide-react';

const Login = ({ setToggle }) => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-gray-800">Welcome Back</h2>
                    <p className="text-gray-500 mt-2">Please enter your details to sign in</p>
                </div>

                <form className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Mail className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="email"
                                className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                placeholder="john@example.com"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Lock className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="password"
                                className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                placeholder="••••••••"
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                        <label className="flex items-center text-gray-600">
                            <input type="checkbox" className="rounded border-gray-300 text-blue-600 mr-2" />
                            Remember me
                        </label>
                        <a href="#" className="text-blue-600 hover:underline font-medium">Forgot password?</a>
                    </div>

                    <button className="w-full flex justify-center items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-all shadow-lg shadow-blue-200">
                        <LogIn size={20} />
                        Sign In
                    </button>
                </form>

                <p className="text-center mt-8 text-gray-600">
                    Don't have an account? <a href="#" className="text-blue-600 font-bold hover:underline" onClick={() => {
                        setToggle((prev) => !prev)
                    }}>Register</a>
                </p>
            </div>
        </div>
    );
};

export default Login;