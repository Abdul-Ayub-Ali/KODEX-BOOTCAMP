import { User, Mail, Lock, UserPlus } from 'lucide-react';

const Register = ({ setToggle }) => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-800">Create Account</h2>
                    <p className="text-gray-500 mt-2">Join us today! It only takes a minute</p>
                </div>

                <form className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <User className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="text"
                                className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all"
                                placeholder="Abdul Ayub Ali"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Mail className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="email"
                                className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all"
                                placeholder="name@email.com"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Password</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Lock className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="password"
                                className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all"
                                placeholder="Create a password"
                            />
                        </div>
                    </div>

                    <div className="text-xs text-gray-500 italic">
                        * Password must be at least 8 characters long.
                    </div>

                    <button className="w-full flex justify-center items-center gap-2 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-all shadow-lg shadow-green-100">
                        <UserPlus size={20} />
                        Create Account
                    </button>
                </form>

                <p className="text-center mt-8 text-gray-600">
                    Already have an account? <a href="#" className="text-green-600 font-bold hover:underline" onClick={() => {
                        setToggle((prev) => !prev)
                    }}>Login</a>
                </p>
            </div>
        </div>
    );
};

export default Register;