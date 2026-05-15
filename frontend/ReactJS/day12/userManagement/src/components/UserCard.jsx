const UserCard = ({ card }) => {
  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 relative group overflow-hidden">

      <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-50 rounded-bl-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-500"></div>

      <div className="flex flex-col h-full">

        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-tr from-indigo-600 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:rotate-6 transition-transform">
              <span className="text-2xl font-bold text-white">AA</span>
            </div>
            <div>
              <h3 className="text-xl font-black text-slate-800">{card.fullName}</h3>
              <p className="text-sm text-indigo-600 font-semibold tracking-wide">{card.position}</p>
            </div>
          </div>
        </div>

        <div className="space-y-3 flex-grow py-4 border-t border-slate-100">
          <div className="flex items-center text-slate-600">
            <span className="w-5 h-5 mr-3 text-slate-400">📧</span>
            <span className="text-sm truncate">{card.email}</span>
          </div>
          <div className="flex items-center text-slate-600">
            <span className="w-5 h-5 mr-3 text-slate-400">📅</span>
            <span className="text-sm font-medium">{card.experience}</span>
          </div>
          <div className="mt-2 p-3 bg-slate-50 rounded-xl">
            <p className="text-xs leading-relaxed text-slate-500 italic">
              {card.bio}
            </p>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between pt-4 border-t border-slate-100">
          <div className="flex gap-2">
            <button className="px-4 py-2 text-xs font-bold bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors">
              Edit Profile
            </button>
            <button className="px-4 py-2 text-xs font-bold bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors">
              Delete
            </button>
          </div>
          <span className="text-[10px] font-bold text-green-500 uppercase tracking-tighter bg-green-50 px-2 py-1 rounded">Verified</span>
        </div>
      </div>
    </div>
  );
};
export default UserCard;