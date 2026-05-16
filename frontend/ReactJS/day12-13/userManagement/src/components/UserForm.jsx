import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";

const UserForm = ({ setMembers, setToggle, update }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode:'onChange',
  defaultValues: update ,
});

  const handleFormSubmit = (data) => {
    setMembers((prev) => [...prev, { ...data, id: nanoid() }]);
    reset();
    setToggle(true);
    
  };

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden">
      <div className="bg-slate-900 p-6">
        <h2 className="text-2xl font-bold text-white">Registration Form</h2>
        <p className="text-slate-400 text-sm">
          Fill in all details to test your RHF logic.
        </p>
      </div>

      <form onSubmit={handleSubmit(handleFormSubmit)} className="p-8 space-y-6">
        {/* Full Name & Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Wrapper Div takki layout na bigde */}
          <div className="flex flex-col">
            <label className="block text-sm font-semibold text-slate-700 mb-1">
              Full Name
            </label>
            <input
              {...register("fullName", { required: "Full Name is required" })}
              type="text"
              className={`w-full px-4 py-2.5 bg-slate-50 border rounded-lg focus:ring-2 outline-none transition-all ${errors.fullName
                  ? "border-red-500 focus:ring-red-500/20"
                  : "border-slate-200 focus:ring-indigo-500"
                }`}
              placeholder="Enter name"
            />
            {errors.fullName && (
              <p className="text-red-500 text-xs font-medium mt-1 animate-fadeIn">
                {errors.fullName.message}
              </p>
            )}
          </div>

          <div className="flex flex-col">
            <label className="block text-sm font-semibold text-slate-700 mb-1">
              Email Address
            </label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email address format",
                },
              })}
              type="email"
              className={`w-full px-4 py-2.5 bg-slate-50 border rounded-lg focus:ring-2 outline-none transition-all ${errors.email
                  ? "border-red-500 focus:ring-red-500/20"
                  : "border-slate-200 focus:ring-indigo-500"
                }`}
              placeholder="email@example.com"
            />
            {errors.email && (
              <p className="text-red-500 text-xs font-medium mt-1 animate-fadeIn">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>

        {/* Position & Experience */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label className="block text-sm font-semibold text-slate-700 mb-1">
              Position
            </label>
            <select
              {...register("position", { required: "Selection is mandatory" })}
              className={`w-full px-4 py-2.5 bg-slate-50 border rounded-lg focus:ring-2 outline-none transition-all ${errors.position
                  ? "border-red-500 focus:ring-red-500/20"
                  : "border-slate-200 focus:ring-indigo-500"
                }`}
            >
              <option value="">Select Role</option>
              <option value="frontend">Frontend Developer</option>
              <option value="backend">Backend Developer</option>
              <option value="fullstack">Full Stack Developer</option>
            </select>
            {errors.position && (
              <p className="text-red-500 text-xs font-medium mt-1 animate-fadeIn">
                {errors.position.message}
              </p>
            )}
          </div>

          <div className="flex flex-col">
            <label className="block text-sm font-semibold text-slate-700 mb-1">
              Experience (Years)
            </label>
            <input
              {...register("experience", {
                required: "Experience needs to be filled",
              })}
              type="number"
              className={`w-full px-4 py-2.5 bg-slate-50 border rounded-lg focus:ring-2 outline-none transition-all ${errors.experience
                  ? "border-red-500 focus:ring-red-500/20"
                  : "border-slate-200 focus:ring-indigo-500"
                }`}
              placeholder="0"
            />
            {errors.experience && (
              <p className="text-red-500 text-xs font-medium mt-1 animate-fadeIn">
                {errors.experience.message}
              </p>
            )}
          </div>
        </div>

        {/* Gender Radio Buttons */}
        <div className="flex flex-col">
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Gender
          </label>
          <div className="flex gap-6">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                {...register("gender", { required: "Select your gender" })}
                type="radio"
                value="male"
                className="w-4 h-4 text-indigo-600 focus:ring-indigo-500"
              />
              <span className="text-sm text-slate-600">Male</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                {...register("gender", { required: "Select your gender" })}
                type="radio"
                value="female"
                className="w-4 h-4 text-indigo-600 focus:ring-indigo-500"
              />
              <span className="text-sm text-slate-600">Female</span>
            </label>
          </div>
          {errors.gender && (
            <p className="text-red-500 text-xs font-medium mt-2 animate-fadeIn">
              {errors.gender.message}
            </p>
          )}
        </div>

        {/* Bio */}
        <div className="flex flex-col">
          <label className="block text-sm font-semibold text-slate-700 mb-1">
            Bio / About
          </label>
          <textarea
            {...register("bio")}
            rows="3"
            className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
            placeholder="Tell us about yourself..."
          ></textarea>
        </div>

        {/* T&C Checkbox */}
        <div className="flex flex-col">
          <div className="flex items-start gap-3">
            <input
              {...register("termsAccepted", {
                required: "You must accept the terms",
              })}
              type="checkbox"
              className="mt-1 w-4 h-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
            />
            <label className="text-sm text-slate-500">
              I agree to the terms and conditions of the developer portal.
            </label>
          </div>
          {errors.termsAccepted && (
            <p className="text-red-500 text-xs font-medium mt-1 animate-fadeIn">
              {errors.termsAccepted.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3.5 rounded-xl transition-all shadow-lg shadow-indigo-200"
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default UserForm;
