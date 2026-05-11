const TodoCard = ({ taskData }) => {
    return (
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-center mb-3">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700">
                    {taskData.category}
                </span>
                <span className="flex items-center text-xs font-bold text-red-600 bg-red-50 px-2 py-1 rounded-full">
                    <span className="w-2 h-2 mr-1.5 rounded-full bg-red-600"></span>
                    {taskData.priority}
                </span>
            </div>

            <div className="flex gap-4">
                <input type="checkbox" className="mt-1.5 h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer" />
                <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-900 leading-tight">
                        {taskData.task}
                    </h3>
                    <p className="mt-1.5 text-sm text-slate-500 line-clamp-2">
                        {taskData.description}
                    </p>
                </div>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-100 flex justify-between items-center">
                <div className="flex items-center text-slate-400 gap-1.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-xs font-medium">{taskData.dueDate}</span>
                </div>
                <div className="flex items-center gap-2">
                    <button  className="p-1.5 rounded-md text-slate-400 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                    </button>
                    <button className="p-1.5 rounded-md text-slate-400 hover:bg-red-50 hover:text-red-600 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};
export default TodoCard;