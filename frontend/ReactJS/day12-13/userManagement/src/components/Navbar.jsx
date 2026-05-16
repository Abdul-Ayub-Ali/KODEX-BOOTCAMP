const Navbar = ({ setToggle }) => {
    return (
        <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 px-6 py-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center">
                        <span className="text-white font-black italic">R</span>
                    </div>
                    <h1 className="text-2xl font-black text-slate-900 tracking-tighter">RHF_MASTER</h1>
                </div>

                <div className="flex items-center gap-4">
                    <button onClick={()=>setToggle((prev)=>!prev)} className="bg-slate-900 hover:bg-black text-white px-6 py-2.5 rounded-full font-bold text-sm transition-all shadow-xl active:scale-95">
                        Switch View
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;