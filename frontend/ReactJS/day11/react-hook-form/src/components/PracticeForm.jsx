import { useForm } from "react-hook-form";

const PracticeForm = () => {
    const { register, handleSubmit } = useForm();

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-800">Quick Profile</h2>
                    <p className="text-gray-500 text-sm">Practice your React Hook Form logic here.</p>
                </div>

                <form
                    onSubmit={handleSubmit((data) => {
                        console.log(data);
                    })}
                    className="space-y-4" >
                    {/* Username (Text) */}
                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-semibold text-gray-600">Username</label>
                        <input
                            {...register('username')}
                            type="text"
                            placeholder="Enter username"
                            className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                        />
                        {/* Error message placeholder: <p className="text-red-500 text-xs mt-1">Error here</p> */}
                    </div>

                    {/* Age (Number) */}
                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-semibold text-gray-600">Age</label>
                        <input
                            {...register('age')}
                            type="number"
                            placeholder="e.g. 21"
                            className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                        />
                    </div>

                    {/* Role (Select) */}
                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-semibold text-gray-600">Role</label>
                        <select
                            {...register('role')} className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none bg-white transition-all cursor-pointer">
                            <option value="">Select a role</option>
                            <option value="developer">Developer</option>
                            <option value="designer">Designer</option>
                            <option value="student">Student</option>
                        </select>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 rounded-lg shadow-md transition-colors mt-4 active:scale-[0.98]"
                    >
                        Update Profile
                    </button>
                </form>
            </div>
        </div>
    );
};

export default PracticeForm;